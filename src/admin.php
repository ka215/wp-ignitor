<?php
/**
 * Trait for admin screen
 *
 * @package WpIgnitor
 * @since 1.0.0
 */
namespace wpIgnitor;

trait admin {
    /**
     * Member vars for admin screen only
     */
    protected $compress_file_map;
    
    protected $list_table;
    
    protected $http_post;
    
    protected $help_tabs;
    
    protected $help_sidebars;
    
    // For seeding
    protected $seeder;
    protected $faker;
    
    /* -------------------- Actions Section -------------------- */
    
    /**
     * Calling from "admin_menu" action
     *
     * @since 1.0.0
     * @access public
     */
    public function admin_menu() {
        if ( current_user_can( 'manage_options' ) ) {
            $remove_menu = [
                //'index.php', ...
            ];
            foreach( $remove_menu as $_page ) {
                remove_menu_page( $_page );
            }

            // Add menu for this plugin
            add_submenu_page( 'options-general.php', __( 'WP Ignitor Settings' ), __( 'WP Ignitor' ), 'manage_options', 'wpignitor-settings', [ &$this, 'plugin_settings_page' ] );
        }
    }

    /**
     * Calling from "admin_init" action
     *
     * @since 1.0.0
     * @access public
     */
    public function admin_init() {
        
        $this->http_post = ( strtoupper( $_SERVER['REQUEST_METHOD'] ) === 'POST' );
        
        $this->help_tabs = [];
        $this->help_sidebars = [];
        
        // Prepare seeding
        $this->seeder = defined( 'SALON_SEEDER' ) ? SALON_SEEDER : false;
        if ( $this->seeder ) {
            require_once __DIR__ . '/../vendor/autoload.php';
            $this->faker = \Faker\Factory::create( 'ja_JP' );
        }
    }

    /**
     * Calling from "current_screen" action
     *
     * @since 1.0.0
     * @access public
     */
    public function current_screen( \WP_Screen $screen ) {
        //
    }

    /**
     * Calling from "wp_dashboard_setup" action
     *
     * @since 1.0.0
     * @access public
     */
    public function wp_dashboard_setup() {
        // Dashboard widgets that does not want to display
        if ( ! current_user_can( 'manage_options' ) ) {
            // e.g. remove_meta_box( 'dashboard_right_now', 'dashboard', 'normal' );
        }
        // Add new dashboard widgets
        // e.g. wp_add_dashboard_widget( 'dashboard_widget_slug', 'display_widget_title', [ $this, 'callback_method' ] );
    }

    /**
     * Calling from "admin_enqueue_scripts" action
     *
     * @since 1.0.0
     * @access public
     */
    public function admin_enqueue_scripts() {
        global $pagenow;
        $_page = isset( $_REQUEST['page'] ) ? $_REQUEST['page'] : null;
        if ( $pagenow === 'options-general.php' && $_page === 'wpignitor-settings' ) {
            // Fonts
            $font_cdn_url = 'https://cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css';
            wp_enqueue_style( 'hack-font', $font_cdn_url, [], '' );
            // Icons
            $mdi_cdn_url = 'https://cdn.materialdesignicons.com/5.8.55/css/materialdesignicons.min.css';
            wp_enqueue_style( 'mdi-icons', $mdi_cdn_url, [], '5.8.55' );
            // For plugin only
            $style_file_path = $this->paths['assets_dir'] . 'css/wp-ignitor.css';
            $style_file_url = home_url( $this->paths['assets_dir_url'] . 'css/wp-ignitor.css' );
            if ( @file_exists( $style_file_path ) ) {
                $_hash = hash( 'CRC32b', filemtime( $style_file_path ) );
                wp_enqueue_style( 'wp-ignitor', $style_file_url . '?h=' . $_hash, [], IGNITOR_PLUGIN_VERSION );
            }
            $script_file_path = $this->paths['assets_dir'] . 'js/wp-ignitor.js';
            $script_file_url = home_url( $this->paths['assets_dir_url'] . 'js/wp-ignitor.js' );
            if ( @file_exists( $script_file_path ) ) {
                $_hash = hash( 'CRC32b', filemtime( $script_file_path ) );
                wp_enqueue_script( 'wp-ignitor', $script_file_url . '?h=' . $_hash, [], IGNITOR_PLUGIN_VERSION, true );
            }
        }
    }

    /**
     * Calling from "admin_print_styles" action
     *
     * @since 1.0.0
     * @access public
     */
    public function admin_print_styles() {
        global $pagenow;
        $internal_css = null;
        if ( ( $pagenow === 'profile.php' || $pagenow === 'edit-profile.php' ) && ! current_user_can( 'manage_options' ) ) {
            $internal_css = <<<EOS
<style id="wpignitor-internal-css">
</style>
EOS;
        }
        if ( ! empty( $internal_css ) ) {
            echo $this->minify_css( $internal_css );
        }
    }

    /**
     * Calling from "admin_head" action
     *
     * @since 1.0.0
     * @access public
     */
    public function admin_head() {
        $current_screen = get_current_screen();
        if ( $current_screen->id === 'settings_page_wpignitor-settings' ) {
            $helps = [
                'salon-list-help' => [
                    'title'    => '店舗一覧',
                    'content'  => '<p>この画面からすべての店舗へアクセスできます。ワークフローに合うようにこの画面の表示をカスタマイズできます。</p>',
                    'callback' => false,
                ],
                'salon-edit-help' => [
                    'title'    => '店舗の新規登録／編集',
                    'content'  => '<p>この画面では、店舗の新規登録や編集を行うことができます。</p>',
                    'callback' => false,
                ],
                'items-edit-help' => [
                    'title'    => '項目管理',
                    'content'  => '<p>この画面では、店舗編集時に設定できる各種項目の追加や編集などを行うことができます。</p>',
                    'callback' => false,
                ],
            ];
            foreach ( $helps as $help_id => $data ) {
                $this->help_tabs[] = array_merge( [ 'id' => $help_id ], $data );
                $this->help_sidebars[$help_id] = [
                    '<p><strong>詳細情報:</strong></p>',
                    '<p><a href="https://live-r.crossrink.co.jp/after-corona-salon/salon-management-plugin">Repository</a></p>',
                ];
            }
            if ( ! empty( $this->help_tabs ) ) {
                foreach ( $this->help_tabs as $_args ) {
                    $current_screen->add_help_tab( $_args );
                    if ( array_key_exists( $_args['id'], $this->help_sidebars ) ) {
                        $current_screen->set_help_sidebar( implode( "\n", $this->help_sidebars[$_args['id']] ) );
                    }
                }
            }
            /*
            if ( $this->is_salon_list ) {
                $current_screen->add_option( 'per_page', [ 'default' => 10, 'option' => 'edit_salon_per_page' ] );
            }
            if ( $this->is_edit_salon ) {
                $current_screen->add_option( 'use_seeder', [ 'default' => false, 'option' => 'edit_salon_use_seeder' ] );
            }
            */
        }
    }

    /* -------------------- Filters Section -------------------- */

    /**
     * Calling from "user_contactmethods" filter
     *
     * @since 1.0.0
     * @access public
     */
    public function user_contactmethods( $user_contact ) {
        global $pagenow;
        if ( current_user_can( 'manage_options' ) && 'profile.php' === $pagenow ) {
            // Add to admin user's profile only
        }
        return $user_contact;
    }

    /**
     * Calling from "admin_footer_text" filter
     *
     * @since 1.0.0
     * @access public
     */
    public function admin_footer_text( $text ) {
        $text = '';
        return $text;
    }

    /**
     * Calling from "set-screen-option" filter
     *
     * @since 1.0.0
     * @access public
     */
    public function set_screen_option( $screen_option, $option, $value ) {
        var_dump( __METHOD__, $screen_option, $option, $value  );
        $user = wp_get_current_user();
        update_user_meta( $user->ID, $option, $value );
        return $screen_option;
    }

    /**
     * Calling from "dashboard_recent_posts_query_args" filter
     *
     * @since 1.0.0
     * @access public
     */
    public function dashboard_recent_posts_query_args( $query_args ) {
        //$query_args['post_type'] = [ 'post', 'page' ];
        return $query_args;
    }

    /**
     * Calling from "plugin_action_links" filter
     *
     * @since 1.0.0
     * @access public
     */
    public function plugin_action_links( $links, $file ) {
        /*
        if ( $file == plugin_basename( $this->paths['plugin_dir'] . 'wp-ignitor.php' ) ) {
            var_dump( __METHOD__, $links, $file );
            array_unshift( $links, '<a href="' . esc_url( self::get_page_url() ) . '">'.esc_html__( 'Settings' ).'</a>' );
        }*/
        return $links;
    }

    /**
     * Calling from "plugin_action_links_{plugin_name}" filter
     *
     * @since 1.0.0
     * @access public
     */
    public function plugin_action_links_self( $links ) {
        $_link = esc_url( self::get_page_url() );
        $settings_link = '<a href="'. $_link .'">'. __( 'Settings' ) .'</a>';
        array_unshift( $links, $settings_link ); 
        return $links; 
    }

    /**
     * Calling from "all_plugins" filter
     *
     * @since 1.0.0
     * @access public
     */
    public function all_plugins( $all_plugins ) {
        $self_plugin = plugin_basename( $this->paths['plugin_dir'] . 'wp-ignitor.php' );
        //var_dump( __METHOD__, $all_plugins, $self_plugin );
        if ( isset( $all_plugins[$self_plugin] ) ) {
            if ( is_plugin_active( $self_plugin ) ) {
                $all_plugins[$self_plugin]['Description'] = __( "<strong>Thank you for using!</strong> Now let's hide that we are WordPress and get starting with the strong defensive turn." );
            } else {
                $all_plugins[$self_plugin]['Description'] = __( "Now let's hide that we are WordPress and get starting with the strong defensive turn." );
            }
        }
        return $all_plugins;
    }


    /* -------------------- Helpers Section -------------------- */

    /**
     * Retrieve the configuration page URL of this plugin
     *
     * @param  string   $tab    
     * @return string
     */
    public static function get_page_url( string $tab = '' ): string {
        $args = [ 'page' => 'wpignitor-settings'];
        if ( ! empty( $tab ) ) {
            $args['tab'] = $tab;
        }
        return add_query_arg( $args, admin_url( 'options-general.php' ) );
    }

    /**
     * Move WordPress core files to the new installation path specified
     *
     * @param  string   $new_install_path   The new installation path to move to
     * @return bool
     */
    public function moveto_new_install_path( string $new_install_path ): bool {
        $message = '';
        if ( ! @file_exists( $new_install_path ) ) {
            try {
                mkdir( $new_install_path, 0755 );
            } catch ( Exception $e ) {
                $message = __( 'Failed to create the directory to move the file to.', IGNITOR );
                $this->errors->add( 'failure_to_moving_install_path', $message );
                $this->logger( $message );
                return false;
            }
        }
        if ( ! is_dir( $new_install_path ) || ! is_writable( $new_install_path ) ) {
            $message = __( 'The destination path is invalid directory, or never write permission.', IGNITOR );
            $this->errors->add( 'failure_to_moving_install_path', $message );
            $this->logger( $message );
            return false;
        }

        // Compress current files
        if ( ! $this->compressTarball( ABSPATH ) ) {
            $message = __( 'The files on the installation path for moving could not compressed.', IGNITOR );
            $this->errors->add( 'failure_to_moving_install_path', $message );
            $this->logger( $message );
            return false;
        }

        $origin_archive_path = ABSPATH . IGNITOR . '_temp.tar';

        // Move and decompress file
        if ( ! $this->extractTarball( $origin_archive_path, $new_install_path ) ) {
            $message = __( 'Failed to move the files.', IGNITOR );
            $this->errors->add( 'failure_to_moving_install_path', $message );
            $this->logger( $message );
            return false;
        }

        return true;
    }



    /* -------------------- Settings Page Section -------------------- */

    // Page Controller
    public function plugin_settings_page() {
        // Execute update action
        global $pagenow;
        parse_str( $_SERVER['QUERY_STRING'], $queries );
        $page_args = [
            'pagenow'     => $pagenow,
            'assets_url'  => site_url( $this->paths['assets_dir_url'] ),
            'self_url'    => admin_url( basename( $_SERVER['REQUEST_URI'] ) ),
            'query_args'  => $queries,
            'current_tab' => isset( $_REQUEST['tab'] ) && ! empty( $_REQUEST['tab'] ) ? $_REQUEST['tab'] : 'globals',
            'tabs' => [
                'globals' => [ 'label' => __( 'Globals', IGNITOR ), 'icon' => 'mdi-alert-octagram-outline' ],
                'conceal' => [ 'label' => __( 'Conceal Being WordPress', IGNITOR ), 'icon' => 'mdi-incognito' ],
                'login'   => [ 'label' => __( 'Customize Authorization Pages', IGNITOR ), 'icon' => 'mdi-shield-key-outline' ],
                'helth'   => [ 'label' => __( 'Helth Check', IGNITOR ), 'icon' => 'mdi-check-circle-outline' ],
            ],
            'nonce_key'   => '',
        ];
        $page_args['nonce_key'] = $page_args['current_tab'] .'@'. IGNITOR;
        if ( $this->http_post ) {
            $page_args = array_merge( $page_args, $this->execute_plugin_settings() );
        }
        
        // Render Page
        $this->get_plugin_template( 'settings', $page_args );
    }

    public function execute_plugin_settings() {
        $is_success  = false;
        $messages    = [];
        $nonce       = filter_input( INPUT_POST, '_wpnonce', FILTER_SANITIZE_STRING );
        $current_tab = filter_input( INPUT_POST, 'tab', FILTER_SANITIZE_STRING );
        //var_dump( $current_tab, $nonce, wp_create_nonce( $current_tab .'@'. IGNITOR ) );
        if ( ! wp_verify_nonce( $nonce, $current_tab .'@'. IGNITOR ) ) {
            // Invalid access
            return [ 'state' => 'error', 'message' => __( 'Invalid access.', IGNITOR ) ];
        }
        // Get params
        $params = [];
        foreach ( $_POST as $_k => $_v ) {
            switch ( $_k ) {
                case 'int':
                    // For integer
                    $params[$_k] = filter_input( INPUT_POST, $_k, FILTER_VALIDATE_INT );
                    break;
                case 'float':
                    // For float
                    $params[$_k] = empty( $_POST[$_k] ) ? null : filter_input( INPUT_POST, $_k, FILTER_VALIDATE_FLOAT );
                    break;
                case 'array':
                    // For array
                    $params[$_k] = filter_input( INPUT_POST, $_k, FILTER_DEFAULT, FILTER_REQUIRE_ARRAY );
                    if ( ! empty( $params[$_k] ) ) {
                        foreach ( $params[$_k] as $_idx => $_elm ) {
                            if ( is_numeric( $_elm ) ) {
                                $params[$_k][$_idx] = (int) $_elm;
                            }
                        }
                    }
                    break;
                case '_wp_http_referer':
                    // For url
                    $params[$_k] = filter_input( INPUT_POST, $_k, FILTER_VALIDATE_URL );
                    break;
                case 'bool':
                    // For boolean
                    $params[$_k] = filter_input( INPUT_POST, $_k, FILTER_VALIDATE_BOOLEAN );
                    break;
                case '_wpnonce':
                case 'tab':
                    // Skip
                    break;
                default:
                    // For string
                    $params[$_k] = filter_input( INPUT_POST, $_k, FILTER_DEFAULT );
                    break;
            }
        }
        // Set the default value if the value is missing as like when checkbox is unchecked.
        if ( ! isset( $params['bool'] ) ) {
            $params['bool'] = false;
        }
        // Individual processing by the specified method
        switch( $params['method'] ) {
            case 'update-wp-config':
                break;
            case 'update-htaccess':
                // Ensure get_home_path() is declared.
                require_once ABSPATH . 'wp-admin/includes/file.php';
                $htaccess_file = $this->get_htaccess_path();
                $rules = $params['htaccess'];
                if ( ! $htaccess_file ) {
                    $home_path     = get_home_path();
                    $htaccess_file = $home_path . '.htaccess';
                    if ( ! file_exists( $htaccess_file ) && is_writable( $home_path ) ) {
                        $is_success = $this->wpignitor_insert_with_markers( $htaccess_file, 'WP Ignitor Rules', $rules );
                    }
                } else
                if ( is_writable( $htaccess_file ) ) {
                    $is_success = $this->wpignitor_insert_with_markers( $htaccess_file, 'WP Ignitor Rules', $rules );
                }
                if ( ! $is_success ) {
                    $messages[] = __( 'Failed to update ".htaccess".', IGNITOR );
                }
                break;
        }
        
        // Get the errors after individual processing
        if ( is_wp_error( $this->errors ) ) {
            $messages = array_merge( $messages, $this->errors->get_error_messages() );
        }
        
        // Response processing
        $default_message = $is_success ? __( 'Completed successfully.', IGNITOR ) : __( 'Execution failed.', IGNITOR );
        $response = [
            'state' => $is_success ? 'success' : 'error',
            'message' => empty( $messages ) ? $default_message : implode( "<br>\n", $messages ),
        ];
        if ( ! $is_success ) {
            $response['params'] = $params;
        }
        return $response;
    }

    public function upsert_items() {
        $is_success = false;
        $messages = [];
        $nonce = filter_input( INPUT_POST, '_wpnonce', FILTER_SANITIZE_STRING );
        $referer = filter_input( INPUT_POST, '_wp_http_referer', FILTER_SANITIZE_STRING );
        if ( ! wp_verify_nonce( $nonce, 'edit-items@acs' ) && check_admin_referer() !== true ) {
            // Invalid access
            return [ 'state' => 'error', 'message' => '不正なアクセスです。' ];
        }
        // Get params
        $params = [];
        foreach ( $_POST as $_k => $_v ) {
            switch ( $_k ) {
                case 'area_id':
                case 'measure_id':
                    // For integer
                    $params[$_k] = filter_input( INPUT_POST, $_k, FILTER_VALIDATE_INT );
                    break;
                case 'area_station':
                case 'measure_detail':
                case 'treatment':
                case 'spec':
                case 'payment':
                    // For array
                    $params[$_k] = filter_input( INPUT_POST, $_k, FILTER_DEFAULT, FILTER_REQUIRE_ARRAY );
                    if ( ! empty( $params[$_k] ) ) {
                        $params[$_k] = array_unique( $params[$_k] );
                        foreach ( $params[$_k] as $_idx => $_elm ) {
                            if ( is_numeric( $_elm ) ) {
                                $params[$_k][$_idx] = (int) $_elm;
                            }
                        }
                    }
                    break;
                default:
                    // For string
                    $params[$_k] = filter_input( INPUT_POST, $_k, FILTER_DEFAULT );
                    break;
            }
        }
        //var_dump( $params );
        switch ( $params['action'] ) {
            case 'create_area':
                if ( ! empty( $params['area_id'] ) ) {
                    $params['area_id'] = null;
                }
                $result = $this->upsert_area( $params );
                $messages[] = $result ? 'エリアが新たに追加されました。' : 'エリアの追加に失敗しました。';
                break;
            case 'update_area':
                $result = $this->upsert_area( $params );
                $messages[] = $result ? 'エリアの設定を変更しました。' : 'エリアの設定変更に失敗しました。';
                break;
            case 'delete_area':
                if ( ! empty( $params['area_id'] ) ) {
                    $result = $this->delete_area( $params['area_id'] );
                } else {
                    $result = false;
                }
                $messages[] = $result ? 'エリアを削除しました。' : 'エリアの削除に失敗しました。';
                break;
            case 'create_measure':
                $measure_name = wp_strip_all_tags( $params['measure_name'] );
                $result = wp_insert_term( $measure_name, 'measure' /*, [ 'parent' => $parent_term_id ] */ );
                //var_dump( $measure_name, $result );
                if ( is_wp_error( $result ) ) {
                    $this->errors->add( 'insert_term_failure', "コロナ対策（大項目）に「{$measure_name}」を追加できませんでした。" );
                } else {
                    foreach ( $params['measure_detail'] as $_detail ) {
                        $_detail = wp_strip_all_tags( $_detail );
                        if ( is_wp_error( wp_insert_term( $_detail, 'measure', [ 'parent' => $result['term_id'] ] ) ) ) {
                            $this->errors->add( 'insert_term_failure', "コロナ対策（小項目）に「{$_detail}」を追加できませんでした。" );
                        }
                    }
                }
                if ( is_wp_error( $this->errors ) && ! empty( $this->errors->get_error_code() ) ) {
                    $result = false;
                } else {
                    $messages[] = 'コロナ対策が新たに追加されました。';
                    $result = true;
                }
                break;
            case 'update_measure':
                $measure_name = wp_strip_all_tags( $params['measure_name'] );
                $term = term_exists( $measure_name, 'measure' );
                if ( $term == null || $term == 0 ) {
                    $_res = wp_update_term( $params['measure_id'], 'measure', [ 'name' => $measure_name ] );
                    if ( is_wp_error( $_res ) ) {
                        $this->errors->add( 'update_term_failure', "コロナ対策（大項目）を「{$measure_name}」に変更できませんでした。" );
                    } else {
                        $parent_term_id = $_res['term_id'];
                    }
                } else {
                    $parent_term_id = $term['term_id'];
                }
                $children_term = get_terms( 'measure', [ 'orderby' => 'id', 'order' => 'ASC', 'hide_empty' => false, 'fields' => 'id=>name', 'parent' => $parent_term_id ] );
                $modified_ids = [];
                foreach ( $params['measure_detail'] as $_id => $_val ) {
                    if ( array_key_exists( $_id, $children_term ) ) {
                        if ( $_val !== $children_term[$_id] ) {
                            //var_dump( "Update detail: {$children_term[$_id]} -> {$_val} <br>" );
                            if ( is_wp_error( wp_update_term( $_id, 'measure', [ 'name' => $_val ] ) ) ) {
                                $this->errors->add( 'update_term_failure', "コロナ対策詳細（小項目）「{$_val}」の変更に失敗しました。" );
                            }
                        }
                        $modified_ids[] = $_id;
                    } else {
                        //var_dump( "Insert detail: new -> {$_val}　<br>" );
                        if ( is_wp_error( wp_insert_term( $_val, 'measure', [ 'parent' => $parent_term_id ] ) ) ) {
                            $this->errors->add( 'insert_term_failure', "コロナ対策詳細（小項目）に「{$_val}」を追加できませんでした。" );
                        }
                    }
                }
                $remove_terms = array_diff_key( $children_term, $params['measure_detail'] );
                if ( ! empty( $remove_terms ) ) {
                    foreach ( $remove_terms as $_id => $_val ) {
                        $_val = wp_strip_all_tags( $_val );
                        //var_dump( "Remove detail: [{$_id}]{$_val} <br>" );
                        if ( is_wp_error( wp_delete_term( $_id, 'measure', [ 'parent' => $parent_term_id ] ) ) ) {
                            $this->errors->add( 'delete_term_failure', "コロナ対策詳細（小項目）「{$_val}」の削除に失敗しました。" );
                        }
                    }
                }
                if ( is_wp_error( $this->errors ) && ! empty( $this->errors->get_error_code() ) ) {
                    $result = false;
                } else {
                    $messages[] = 'コロナ対策と対策詳細を更新しました。';
                    $result = true;
                }
                break;
            case 'delete_measure':
                if ( empty( $params['measure_id'] ) ) {
                    $result = false;
                }
                $children_term = get_terms( 'measure', [ 'orderby' => 'id', 'order' => 'ASC', 'hide_empty' => false, 'fields' => 'id=>name', 'parent' => $params['measure_id'] ] );
                if ( ! empty( $children_term ) ) {
                    foreach ( $children_term as $_id => $_name ) {
                        if ( is_wp_error( wp_delete_term( $_id, 'measure', [ 'parent' => $params['measure_id'] ] ) ) ) {
                            $this->errors->add( 'delete_term_failure', "コロナ対策詳細（小項目）「{$_val}」の削除に失敗しました。" );
                        }
                    }
                }
                if ( is_wp_error( $this->errors ) && ! empty( $this->errors->get_error_code() ) ) {
                    $this->errors->add( 'delete_term_failure', "コロナ対策（大項目）「{$_val}」の削除を中止しました。" );
                    $result = false;
                } else {
                    if ( is_wp_error( wp_delete_term( $params['measure_id'], 'measure' ) ) ) {
                        $this->errors->add( 'delete_term_failure', "コロナ対策（大項目）「{$_val}」の削除に失敗しました。" );
                        $result = false;
                    } else {
                        $messages[] = 'コロナ対策と対策詳細を削除しました。';
                        $result = true;
                    }
                }
                break;
            case 'upsert_treatment':
            case 'upsert_spec':
            case 'upsert_payment':
                $item_type = str_replace( 'upsert_', '', $params['action'] );
                if ( ! empty( $params[$item_type] ) ) {
                    $item_labels = [
                        'treatment' => '施術内容',
                        'spec'      => '店舗スペック',
                        'payment'   => '決済方法',
                    ];
                    $result = $this->edit_term( $params[$item_type], $item_type, $item_labels[$item_type] );
                } else {
                    $result = false;
                }
                break;
        }
        $is_success = $result;
        
        if ( is_wp_error( $this->errors ) && ! empty( $this->errors->get_error_code() ) ) {
            $messages = array_merge( $messages, $this->errors->get_error_messages() );
            $is_success = false;
        }
        
        $default_message = $is_success ? '正常に処理しました。' : '処理に失敗しました。';
        return [
            'state' => $is_success ? 'success' : 'error',
            'message' => empty( $messages ) ? $default_message : implode( "<br>\n", $messages ),
        ];
    }

    public function recent_salons_widget() {
        $content_template = '<div id="registered-salons" class="activity-block">%s<ul>%s</ul></div>';
        $interval = 14;
        $max_salons = 5;
        $title = sprintf( '<h3>直近 %d 日以内に登録された店舗（ %d 件まで）</h3>', $interval, $max_salons );
        $salons = $this->get_recent_salons( $interval, $max_salons );
        if ( ! empty( $salons ) ) {
            $list = '';
            foreach ( $salons as $salon ) {
                $list .= sprintf( '<li><span>%s</span><div class="wrap"><a href="%s" aria-label="%s">%s</a></div><span class="state %s">%s</span></li>',
                    implode( ' ', [ date_i18n( __( 'M jS' ), strtotime( $salon['created_at'] ) ), date_i18n( __( 'g:i A' ), strtotime( $salon['created_at'] ) ) ] ),
                    admin_url( 'admin.php?page=edit_salon&salon_id=' . $salon['id'] ),
                    '「'. $salon['name'] .'」を編集',
                    $salon['name'],
                    $salon['status'] ? 'published': 'private',
                    $salon['status'] ? '公開中' : '未公開'
                );
            }
        } else {
            $list = '<li><span>該当する店舗がありません。</span></li>';
        }
        printf( $content_template, $title, $list );
    }

}