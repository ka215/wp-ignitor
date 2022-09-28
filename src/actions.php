<?php
/**
 * Trait for add actions
 *
 * @package WpIgnitor
 * @since 1.0.0
 */
namespace wpIgnitor;

trait actions {
    /**
     * Fires after a taxonomy is unregistered.
     *
     * @access public
     * @package WordPress(core)
     * @since 4.5.0
     */
    public function registered_taxonomy( $taxonomy, $object_type, $args ) {
        //var_dump( __METHOD__, $taxonomy, $object_type, $args );
    }

    /**
     * Fires after a post type is registered.
     *
     * @access public
     * @package WordPress(core)
     * @since 4.6.0
     */
    public function registered_post_type( string $post_type, $args ) {
        //var_dump( __METHOD__, $post_type, $args );
    }

    /**
     * Fires once activated plugins have loaded.
     *
     * @access public
     * @package WordPress(core)
     * @since 1.5.0
     */
    public function plugins_loaded() {
        /**
         * Fire emergency recovery
         *
         * @since 1.0.3
         * @hook  filter
         */
        $run_recovery = apply_filters( 'wpignitor_emergency_recovery', false );
        if ( $run_recovery ) {
            $this->emergency_recovery();
        }
    }

    /**
     * Fires after the theme is loaded
     *
     * @access public
     * @package WordPress(core)
     * @since 3.0.0
     */
    public function after_setup_theme() {
        global $_wp_theme_features;
        if ( ! is_array( $_wp_theme_features ) ) {
            $_wp_theme_features = [];
        }
        $cleanup_options = $this->get_option( 'cleanup_html' );
        if ( isset( $cleanup_options['feedlinks'] ) && $cleanup_options['feedlinks'] && array_key_exists( 'automatic-feed-links', $_wp_theme_features ) ) {
            // Prevent output all feed links
            $_wp_theme_features['automatic-feed-links'] = false;
        }
        if ( isset( $cleanup_options['comments'] ) && $cleanup_options['comments'] && array_key_exists( 'html5', $_wp_theme_features ) ) {
            // Disable comment
            unset( $_wp_theme_features['html5']['comment-form'] );
            unset( $_wp_theme_features['html5']['comment-list'] );
        }
        if ( isset( $cleanup_options['block_editor'] ) && $cleanup_options['block_editor'] ) {
            // Disable block editor
            if ( array_key_exists( 'core-block-patterns', $_wp_theme_features ) ) {
                $_wp_theme_features['core-block-patterns'] = false;
            }
            if ( array_key_exists( 'block-templates', $_wp_theme_features ) ) {
                $_wp_theme_features['block-templates'] = false;
            }
            if ( array_key_exists( 'widgets-block-editor', $_wp_theme_features ) ) {
                $_wp_theme_features['widgets-block-editor'] = false;
            }
        }
        // self::logger( $_wp_theme_features, __METHOD__ );
        ob_start( function( $buffer ) {
            // Remove the `<link rel="profile" href="http://gmpg.org/xfn/11">`
            $buffer = preg_replace( '@<link\s+rel=(\'|")profile(\'|")\s+href=(\'|")https?://gmpg.org/xfn/11(\'|")>@', '', $buffer );
            // Remove the `id='twentytwenty-*'` attributes
            //$buffer = preg_replace( '/id=(\'|")twentytwenty\-.*?(\'|")/', '', $buffer );
            if ( isset( $cleanup_options['oembeds'] ) && $cleanup_options['oembeds'] ) {
                // Remove wp-embed.min.js
                $buffer = preg_replace( '@<script\s+.*?id=(\'|")wp\-embed\-js(\'|").*?></script>@', '', $buffer );
            }
            return $buffer;
        } );
    }

    /**
     * Fires after WordPress has finished loading but before any headers are sent.
     *
     * @access public
     * @package WordPress(core)
     * @since 1.5.0
     */
    public function init() {
        $cleanup_options = $this->get_option( 'cleanup_html' );
        if ( isset( $cleanup_options['feedlinks'] ) && $cleanup_options['feedlinks'] ) {
            // Remove feed links
            remove_action( 'wp_head', 'feed_links', 2 );
            remove_action( 'wp_head', 'feed_links_extra', 3 );
        }
        if ( isset( $cleanup_options['emoji'] ) && $cleanup_options['emoji'] ) {
            // Remove emoji
            remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
            remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
            remove_action( 'wp_print_styles', 'print_emoji_styles' );
            remove_action( 'admin_print_styles', 'print_emoji_styles' );
            remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
            remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
            remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
        }
        if ( isset( $cleanup_options['rsd_link'] ) && $cleanup_options['rsd_link'] ) {
            // Remove RSD link
            remove_action( 'wp_head', 'rsd_link' );
        }
        if ( isset( $cleanup_options['wlwmanifest'] ) && $cleanup_options['wlwmanifest'] ) {
            // Remove wlwmanifest link
            remove_action( 'wp_head', 'wlwmanifest_link' );
        }
        if ( isset( $cleanup_options['canonical'] ) && $cleanup_options['canonical'] ) {
            // Remove canonical link
            remove_action( 'wp_head', 'rel_canonical' );
        }
        if ( isset( $cleanup_options['others'] ) && $cleanup_options['others'] ) {
            // Remove Others
            remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head' );
            remove_action( 'wp_head', 'wp_generator' );
            remove_action( 'wp_head', 'wp_shortlink_wp_head' );
        }
        if ( isset( $cleanup_options['oembeds'] ) && $cleanup_options['oembeds'] ) {
            // Remove oEmbeds
            remove_action( 'wp_head', 'wp_oembed_add_discovery_links' );
            remove_action( 'wp_head', 'wp_oembed_add_host_js' );
        }
        if ( isset( $cleanup_options['rest_api'] ) && $cleanup_options['rest_api'] ) {
            // Remove rest api links
            remove_action( 'wp_head', 'rest_output_link_wp_head' );
            remove_action( 'template_redirect', 'rest_output_link_header', 11 );
        }
        if ( isset( $cleanup_options['block_editor'] ) && $cleanup_options['block_editor'] ) {
            remove_action( 'wp_enqueue_scripts', 'wp_enqueue_global_styles' );
            remove_action( 'wp_body_open', 'wp_global_styles_render_svg_filters' );
            remove_action( 'wp_footer', 'wp_enqueue_global_styles', 1 );
        }
        remove_action( 'template_redirect', 'wp_redirect_admin_locations', 1000 );
    }

    /**
     * Fires after all default WordPress widgets have been registered.
     *
     * @access public
     * @package WordPress(core)
     * @since 2.2.0
     */
    public function widgets_init() {
        global $wp_widget_factory;
        $cleanup_options = $this->get_option( 'cleanup_html' );
        if ( isset( $cleanup_options['comments'] ) && $cleanup_options['comments'] ) {
            // Remove recent comment style
            remove_action( 'wp_head', [ $wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style' ] );
        }
    }

    /**
     * Fires when scripts and styles are enqueued.
     *
     * @access public
     * @package WordPress(core)
     * @since 2.8.0
     */
    public function wp_enqueue_scripts() {
        $cleanup_options = $this->get_option( 'cleanup_html' );
        if ( isset( $cleanup_options['oembeds'] ) && $cleanup_options['oembeds'] ) {
            // Remove oEmbeds
            wp_deregister_script( 'wp-embed' );
            wp_dequeue_script( 'wp-embed' );
        }
        if ( isset( $cleanup_options['block_editor'] ) && $cleanup_options['block_editor'] && ! is_admin() ) {
            // Remove script tags for block editor
            wp_dequeue_style( 'wp-block-library' );
            wp_dequeue_style( 'wp-block-library-theme' );
            wp_dequeue_style( 'global-styles' );
        }
    }

    /*
     * Ajax for admin screen
     *
     * @access public
     * @package WpIgnitor
     * @since 1.0.0
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
                $without_subdir    = filter_input( INPUT_POST, 'without_subdir', FILTER_VALIDATE_BOOLEAN ) ?? false;
                $optimize_htaccess = filter_input( INPUT_POST, 'optimize_htaccess', FILTER_VALIDATE_BOOLEAN ) ?? false;
                $messages          = [];
                $result            = false;
                $response          = [ 'button_text' => __( 'Close' ) ];
                $is_moved          = false;
                if ( empty( $new_install_path ) ) {
                    $messages[] = __( 'The new path to move to is not specified.', IGNITOR );
                } else {
                    $new_install_path = rtrim( $this->paths['docroot'] .'/'. $new_install_path, '/\\' );
                    $old_install_path = rtrim( $this->paths['docroot'] .'/'. $this->get_wp_install_dir(), '/\\' );
                    // Relocate "wp-config.php" to its initial position
                    if ( $this->get_wp_config_path() !== $this->paths['install_path'] . 'wp-config.php' ) {
                        $from_path = $this->get_wp_config_path();
                        $to_path = $this->paths['install_path'] . 'wp-config.php';
                        if ( is_writable( $from_path ) && is_writable( $this->paths['install_path'] ) ) {
                            if ( ! @file_exists( $to_path ) ) {
                                rename( $from_path, $to_path );
                            }
                        }
                    }
                    // Copy the files under the current installation path to the new path
                    $is_moved = $this->moveto_new_install_path( $new_install_path );
                    if ( $is_moved ) {
                        $messages[] = __( 'Copied the files under the current installation path to the new path.', IGNITOR );
                        // Update install path in the WordPress DB
                        $protocol = ( ! empty( $_SERVER['HTTPS'] ) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443 ) ? 'https' : 'http';
                        $new_siteurl = str_replace( $this->paths['docroot'], "{$protocol}://{$_SERVER['HTTP_HOST']}", $new_install_path );
                        update_option( 'siteurl', $new_siteurl, true );// get at site_url() as install root i.e. https://example.wordpress.com/example
                        $_proc_res = __( 'Updated site URL in the DataBase.', IGNITOR );
                        if ( $without_subdir ) {
                            update_option( 'home', "{$protocol}://{$_SERVER['HTTP_HOST']}", true );// get at home_url() as application root i.e. https://example.wordpress.com
                            $_proc_res = __( 'Updated site and home URL in the DataBase.', IGNITOR );
                        }
                        $messages[] = $_proc_res;
                        // Optimize .htaccess then save
                        if ( $optimize_htaccess ) {
                            $path_dirs = explode( '/', str_replace( '\\', '/', $new_install_path ) );
                            $last_dir = end( $path_dirs );
                            $rules = $this->generate_htaccess( $last_dir . '/' );
                            $moved_htaccess = $new_install_path . '/.htaccess';
                            $docroot_htaccess = $this->paths['docroot'] . '/.htaccess';
                            if ( file_exists( $docroot_htaccess ) ) {
                                $messages[] = __( "I didn't update it because \".htaccess\" already exists in the document root.", IGNITOR );
                            } elseif ( file_exists( $moved_htaccess ) && is_writable( $moved_htaccess ) ) {
                                @rename( $moved_htaccess, $docroot_htaccess );
                            }
                            if ( is_writable( $this->paths['docroot'] ) ) {
                                $is_saved = $this->wpignitor_insert_with_markers( $docroot_htaccess, 'WP Ignitor Rules', $rules );
                            } else {
                                $is_saved = false;
                            }
                            if ( $is_saved ) {
                                $messages[] = __( 'Saved the optimized ".htaccess".', IGNITOR );
                            } else {
                                $messages[] = __( 'Failed to update ".htaccess".', IGNITOR );
                            }
                        }
                        // Remove the origin source files after moved
                        $response['remove_files'] = $this->compress_file_map;
                        if ( ! empty( $this->compress_file_map ) ) {
                            $failures = [];
                            foreach ( $this->compress_file_map as $_path ) {
                                if ( ! @unlink( $_path ) ) {
                                    $failures[] = $_path;
                                }
                            }
                            if ( $old_install_path === $this->paths['docroot'] ) {
                                $this->remove_dir_recursive( $old_install_path . '/wp-admin' );
                                $this->remove_dir_recursive( $old_install_path . '/wp-content' );
                                $this->remove_dir_recursive( $old_install_path . '/wp-includes' );
                            } else {
                                $this->remove_dir_recursive( $old_install_path );
                            }
                            if ( ! empty( $failures ) ) {
                                if ( $this->debug ) {        
                                    self::logger( "Files that could not be removed: \n" . implode( "\n", $failures ) );
                                }
                                $messages[] = __( 'The file move was successful, but some of the source files could not be removed.', IGNITOR );
                            } else {
                                $messages[] = __( 'The files move completed successfully.', IGNITOR );
                                $result = true;
                                $new_siteurl = str_replace( $this->paths['docroot'], "{$protocol}://{$_SERVER['HTTP_HOST']}", $new_install_path );
                                $response['redirect_to'] = isset( $new_siteurl ) ? $new_siteurl . '/wp-admin/options-general.php?page=wpignitor-settings' : '';
                            }
                        }
                        $response['button_text'] = $result ? __( 'Re-login', IGNITOR ) : __( 'Close' );
                        $response['auth_cookies'] = [ AUTH_COOKIE, SECURE_AUTH_COOKIE, LOGGED_IN_COOKIE ];
                        // Finally log out
                        wp_destroy_current_session();
                        wp_clear_auth_cookie();
                        wp_set_current_user( 0 );
                    } else {
                        $messages[] = __( 'Failed to move the files. It may not have sufficient permissions to operate the source files or directories.', IGNITOR );
                    }
                }
                $response['result']  = $result;
                $response['message'] = end( $messages );// implode( "<br>\n", $messages );
                break;
            case 'move-wp-config':
                $from_path = $this->get_wp_config_path();
                $to_path = dirname( $this->get_wp_config_path(), 2 ) . '/wp-config.php';
                if ( is_writable( $from_path ) && is_writable( dirname( $this->get_wp_config_path(), 2 ) ) ) {
                    if ( file_exists( $to_path ) ) {
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
            case 'reload-preview-htaccess':
                $allow_sources = [
                    'hosts'    => array_values( filter_input( INPUT_POST, 'allow_hosts', FILTER_DEFAULT, FILTER_REQUIRE_ARRAY ) ?? [] ),
                    'addrs'    => array_values( filter_input( INPUT_POST, 'allow_addrs', FILTER_DEFAULT, FILTER_REQUIRE_ARRAY ) ?? [] ),
                    'referers' => array_values( filter_input( INPUT_POST, 'allow_referers', FILTER_DEFAULT, FILTER_REQUIRE_ARRAY ) ?? [] ),
                ];
                $this->options['allow_sources'] = $allow_sources;
                $advanced_htaccess_base = filter_input( INPUT_POST, 'advanced_htaccess', FILTER_DEFAULT, FILTER_REQUIRE_ARRAY ) ?? [];
                $advanced_htaccess = array_map( function( $item ) {
                    return boolval( $item );
                }, $advanced_htaccess_base );
                if ( isset( $advanced_htaccess['apache_auth_type'] ) && $advanced_htaccess['apache_auth_type'] ) {
                    unset( $advanced_htaccess['apache_auth_type'] );
                    $advanced_htaccess['apache_auth_type'] = $advanced_htaccess_base['apache_auth_type'];
                }
                if ( isset( $advanced_htaccess['apache_auth_user_file'] ) && $advanced_htaccess['apache_auth_user_file'] ) {
                    unset( $advanced_htaccess['apache_auth_user_file'] );
                    $advanced_htaccess['apache_auth_user_file'] = $advanced_htaccess_base['apache_auth_user_file'];
                }
                $this->options['advanced_htaccess'] = $advanced_htaccess;
                $this->save_options();
                $response = [
                    'result' => true,
                    'htaccess' => $this->generate_htaccess(),
                    'advanced_htaccess' => $advanced_htaccess,
                ];
                break;
            case 'cleanup-html':
                $target_path  = filter_input( INPUT_POST, 'target_page_path', FILTER_SANITIZE_STRING ) ?? '/';
                $cleanup_opts = filter_input( INPUT_POST, 'cleanup', FILTER_DEFAULT, FILTER_REQUIRE_ARRAY );
                if ( ! empty( $cleanup_opts ) ) {
                    foreach ( $cleanup_opts as $_k => $_v ) {
                        $cleanup_opts[$_k] = filter_var( $_v, FILTER_VALIDATE_BOOLEAN );
                    }
                    $this->options['cleanup_html'] = $cleanup_opts;
                } else {
                    $this->options['cleanup_html'] = [];
                }
                $this->save_options();
                $response = [
                    'result' => true,
                    'html'   => $this->get_frontend_html( $target_path, 'head', true ),
                ];
                break;
        }
        wp_die( json_encode( $response ) );
    }

    /*
     * Ajax for frontend
     *
     * @access public
     * @package WpIgnitor
     * @since 1.0.0
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
            case 'get_test':
                $response = [ 'dummy' => true ];
                break;
        }
        wp_die( json_encode( $response ) );
    }

    /**
     * Prints scripts or data before the closing body tag on the front end.
     *
     * @access public
     * @package WordPress(core)
     * @since 1.5.1
     */
    public function wp_footer() {
        $cleanup_options = $this->get_option( 'cleanup_html' );
        if ( isset( $cleanup_options['oembeds'] ) && $cleanup_options['oembeds'] ) {
            // Remove oEmbeds
            wp_deregister_script( 'wp-embed' );
        }
    }

    /**
     * Prints any scripts and data queued for the footer. For both admin page and frontend.
     *
     * @access public
     * @package WordPress(core)
     * @since 2.8.0
     */
    public function print_footer_scripts() {
        if ( $this->emergency_recovery_done ) {
            $message = __( 'Performed an emergency recovery. If you want to continue using the WP igniter, you should disable the "wpignitor_emergency_recovery" filter.', IGNITOR );
            $alert = <<<EOS
<script>
var recovered = function() {
  alert( '{$message}' );
};
if ( document.readyState === 'complete' || ( document.readyState !== 'loading' && ! document.documentElement.doScroll ) ) {
  recovered()
} else
if ( document.addEventListener ) {
  document.addEventListener( 'DOMContentLoaded', recovered, false )
} else {
  window.onload = recovered
}
</script>
EOS;
            echo $alert;
        }
    }

    /**
     * Fires just before PHP shuts down execution.
     *
     * @access public
     * @package WordPress(core)
     * @since 1.2.0
     */
    public function shutdown() {
        while( @ob_end_flush() );
    }

    /**
     * Fires when the login form is initialized.
     *
     * @access public
     * @package WordPress(core)
     * @since 3.2.0
     */
    public function login_init() {
        $current_new_login = $this->get_option( 'new_login' );
        if ( ! empty( $current_new_login ) ) {
            $check_credential = hash( 'sha512', 'wp-ignitor@'. $_SERVER['HTTP_HOST'] .':'. $this->paths['views_dir'] .'entrance.php' );
            // self::logger( [ __METHOD__, WPIGNITOR_LOGIN_PAGE_DIR, WPIGNITOR_LOGIN_PAGE_FILE, WPIGNITOR_LOGIN_PAGE_URL, WPIGNITOR_LOGIN_CREDENTIAL, $check_credential ] );
            if ( ! defined( 'WPIGNITOR_LOGIN_CREDENTIAL' ) || $check_credential !== WPIGNITOR_LOGIN_CREDENTIAL ) {
                global $wp_query;
                $wp_query->set_404();
                status_header( '404' );
                nocache_headers();
                include( get_query_template( '404' ) );
                exit;
            }
        }
        $allowed_login_ips = $this->get_option( 'allow_login_ips' );
        if ( $allowed_login_ips && ! empty( $allowed_login_ips ) ) {
            $current_remote_ip = $this->get_remote_addr();
            $is_allowed = false;
            foreach ( $allowed_login_ips as $allowed_ip ) {
                if ( preg_match( '/^'. preg_quote( $allowed_ip, '/' ) .'/', $current_remote_ip ) ) {
                    $is_allowed = true;
                    break;
                }
            }
            if ( ! $is_allowed ) {
                $to_status = $this->get_option( 'deny_login_redirect' ) ? (int) $this->get_option( 'deny_login_redirect' ) : 401;
                status_header( $to_status );
                nocache_headers();
                switch ( $to_status ) {
                    case 401:
                        header( 'HTTP/1.0 401 Unauthorized' );
                        exit;
                    case 403:
                        header( 'HTTP/1.0 403 Forbidden' );
                        exit;
                    case 404:
                    default:
                        header( 'HTTP/1.0 404 Not Found' );
                        exit;
                }
            }
        }
        //update_option( 'admin_email_lifespan', time() );
        //self::logger( date_i18n( 'Y-m-d H:i:s', get_option( 'admin_email_lifespan' ) ) );
    }

    /**
     * Do 'all' actions first during `do_action()`
     *
     * @access public
     * @package WordPress(core)
     * @since 1.2.0 -> 5.3.0
     */
    public function debug_all_actions(): void {
        /*
        echo '<p style="color:blue;">'. current_action() .'</p>';
        if ( 'wpcf7_upload_dir' === current_action() ) {
            var_dump( func_get_arg(1) );
        }
        */
        //ini_set( 'memory_limit', '-1' );
        //self::logger( __METHOD__ .':'. current_action() .'::['. func_get_arg(1) .']' );
    }




}