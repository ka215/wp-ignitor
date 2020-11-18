<?php
/**
 * Trait for add actions
 *
 * @package WpIgnitor
 * @since 1.0.0
 */
namespace wpIgnitor;

trait actions {
    //
    public function registered_taxonomy( $taxonomy, $object_type, $args ) {
        //var_dump( __METHOD__, $taxonomy, $object_type, $args );
    }

    public function registered_post_type( $post_type, $args ) {
        //var_dump( __METHOD__, $post_type, $args );
    }

    public function init() {
        // Register private custom taxonomies
        /*
        register_taxonomy( 'measure', 'salon', [
            'label' => 'コロナ対策', 'public' => false, 'rewrite' => false, 'hierarchical' => true, 'capabilities' => [ 'assign_terms' ], 'sort' => true
        ] );
        register_taxonomy( 'treatment', 'salon', [
            'label' => '施術内容', 'public' => false, 'rewrite' => false, 'hierarchical' => false, 'capabilities' => [ 'assign_terms' ], 'sort' => true
        ] );
        register_taxonomy( 'spec', 'salon', [
            'label' => '店舗スペック', 'public' => false, 'rewrite' => false, 'hierarchical' => false, 'capabilities' => [ 'assign_terms' ], 'sort' => true
        ] );
        register_taxonomy( 'payment', 'salon', [
            'label' => '決済方法', 'public' => false, 'rewrite' => false, 'hierarchical' => false, 'capabilities' => [ 'assign_terms' ], 'sort' => true
        ] );
        */
    }

    /*
     * Ajax for admin screen
     *
     * @access public
     */
    public function wpignitor_ajax() {
        $nonce = filter_input( INPUT_POST, 'nonce', FILTER_SANITIZE_STRING );
        $tab   = filter_input( INPUT_POST, 'tab', FILTER_SANITIZE_STRING );
        if ( ! wp_verify_nonce( $nonce, $tab .'@'. IGNITOR ) ) {
            $this->errors = new \WP_Error( 'invalid_access', __( 'Invalid Access!', IGNITOR ) );
            wp_die( json_encode( $this->errors->get_error_message() ) );
        }
        $method = filter_input( INPUT_POST, 'method', FILTER_SANITIZE_STRING );
        $result = false;
        switch ( $method ) {
            case 'move-install-path':
                $new_install_path  = filter_input( INPUT_POST, 'new_install_path', FILTER_SANITIZE_STRING );
                $without_subdir    = filter_input( INPUT_POST, 'without_subdir', FILTER_VALIDATE_BOOLEAN ) ?: false;
                $optimize_htaccess = filter_input( INPUT_POST, 'optimize_htaccess', FILTER_VALIDATE_BOOLEAN ) ?: false;
                $messages          = [];
                if ( empty( $new_install_path ) ) {
                    $messages[] = __( 'The new path to move to is not specified.', IGNITOR );
                } else {
                    $new_install_path = rtrim( $_SERVER['DOCUMENT_ROOT'] .'/'. $new_install_path, '/\\' );
                    $old_install_path = rtrim( $_SERVER['DOCUMENT_ROOT'] .'/'. $this->get_wp_install_dir(), '/\\' );
                    if ( $this->moveto_new_install_path( $new_install_path ) ) {
                        // Update install path in the WordPress DB
                        $protocol = ( ! empty( $_SERVER['HTTPS'] ) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443 ) ? 'https' : 'http';
                        $new_siteurl = str_replace( $_SERVER['DOCUMENT_ROOT'], "{$protocol}://{$_SERVER['HTTP_HOST']}", $new_install_path );
                        update_option( 'siteurl', $new_siteurl, true );// get at site_url() as install root i.e. https://example.wordpress.com/example
                        if ( $without_subdir ) {
                            update_option( 'home', "{$protocol}://{$_SERVER['HTTP_HOST']}", true );// get at home_url() as application root i.e. https://example.wordpress.com
                        }

                        // Optimize .htaccess then save
                        if ( $optimize_htaccess ) {
                            $rules = $this->generate_htaccess( basedir( $new_install_path ) . '/' );
                            $moved_htaccess = $new_install_path . '/.htaccess';
                            $docroot_htaccess = $_SERVER['DOCUMENT_ROOT'] . '/.htaccess';
                            if ( file_exists( $docroot_htaccess ) ) {
                                $messages[] = __( "I didn't update it because \".htaccess\" already exists in the document root.", IGNITOR );
                            } else
                            if ( file_exists( $moved_htaccess ) && is_writable( $moved_htaccess ) ) {
                                @rename( $moved_htaccess, $docroot_htaccess );
                            }
                            if ( is_writable( $_SERVER['DOCUMENT_ROOT'] ) ) {
                                $is_saved = $this->wpignitor_insert_with_markers( $docroot_htaccess, 'WP Ignitor Rules', $rules );
                            }
                            if ( ! $is_saved ) {
                                $messages[] = __( 'Failed to update ".htaccess".', IGNITOR );
                            }
                        }

                        // Remove the origin source files after moved
                        if ( ! empty( $this->compress_file_map ) ) {
                            $failures = [];
                            foreach ( $this->compress_file_map as $_path ) {
                                if ( ! @unlink( $_path ) ) {
                                    $failures[] = $_path;
                                }
                            }
                            if ( $old_install_path === $_SERVER['DOCUMENT_ROOT'] ) {
                                $this->remove_dir_recursive( $old_install_path . '/wp-admin' );
                                $this->remove_dir_recursive( $old_install_path . '/wp-content' );
                                $this->remove_dir_recursive( $old_install_path . '/wp-includes' );
                            } else {
                                $this->remove_dir_recursive( $old_install_path );
                            }
                            if ( ! empty( $failures ) ) {
                                $this->logger( "Files that could not be removed: \n" . implode( "\n", $failures ) );
                                $messages[] = __( 'The file move was successful, but some of the source files could not be removed.', IGNITOR );
                            } else {
                                $messages[] = __( 'The files move completed successfully.', IGNITOR );
                                $result = true;
                            }
                        }
                    } elseif ( is_wp_error( $this->errors ) ) {
                        $messages[] = $this->errors->get_error_message();
                    }
                }
                $response = [
                    'result' => $result,
                    'message' => implode( "\n", $messages ),
                    'button_text' => $result ? __( 'Re-login', IGNITOR ) : __( 'Close' ),
                    'redirect_to' => isset( $new_siteurl ) ? $new_siteurl . '/wp-admin/options-general.php?page=wpignitor-settings' : '',
                ];
                break;
            case 'move-wp-config':
                $from_path = $this->get_wp_config_path();
                $to_path = dirname( $this->get_wp_config_path(), 2 ) . '/wp-config.php';
                if ( is_writable( $from_path ) && is_writable( dirname( $this->get_wp_config_path(), 2 ) ) ) {
                    if ( @file_exists( $to_path ) ) {
                        $message = __( 'The "wp-config.php" file already exists to the destination.', IGNITOR );
                    } else {
                        if ( rename( $from_path, $to_path ) ) {
                            $message = __( 'The "wp-config.php" file has been moved.', IGNITOR );
                            $result = true;
                        } else {
                            $message = __( 'Failed to move the "wp-config.php" file.', IGNITOR );
                        }
                    }
                } else {
                    $message = __( 'Do not have permission to work with files.', IGNITOR );
                }
                $response = [
                    'result' => $result,
                    'path' => $this->get_wp_config_path(),
                    'message' => $message,
                ];
                break;
        }
        wp_die( json_encode( $response ) );
    }

    /*
     * Ajax for frontend
     *
     * @access public
     */
    public function nopriv_wpignitor_ajax() {
        $token = filter_input( INPUT_GET, 'token', FILTER_SANITIZE_STRING );
        if ( ! wp_verify_nonce( $token, 'frontend@' . $_SERVER['HTTP_HOST'] ) ) {
            $append_desc = sprintf( ' Your sent token "%s" is invalid, it should be "%s".', $token, wp_create_nonce( 'frontend@' . $_SERVER['HTTP_HOST'] ) );
            $this->errors = new \WP_Error( 'invalid_access', 'Invalid Access!' . ( isset( $append_desc ) ? $append_desc : '' ) );
            wp_die( $this->errors->get_error_message() );
        }
        $method = filter_input( INPUT_GET, 'method', FILTER_SANITIZE_STRING );
        switch ( $method ) {
            case 'get_globals':
                break;
        }
        wp_die( json_encode( $response ) );
    }

}