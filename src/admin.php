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
    protected $rest_namespaces;
    
    /* -------------------- Actions Section -------------------- */
    
    /**
     * Fires before the administration menu loads in the admin.
     *
     * @access public
     * @package WordPress(core)
     * @since 1.5.0
     */
    public function admin_menu( string $context ) {
        if ( current_user_can( 'manage_options' ) ) {
            $remove_menu = [
                //'index.php', ...
            ];
            foreach( $remove_menu as $_page ) {
                remove_menu_page( $_page );
            }

            // Add menu for this plugin
            add_submenu_page( 'options-general.php', __( 'WP Ignitor Settings', IGNITOR ), __( 'WP Ignitor', IGNITOR ), 'manage_options', 'wpignitor-settings', [ &$this, 'plugin_settings_page' ] );
        }
    }

    /**
     * Fires as an admin screen or script is being initialized.
     *
     * @access public
     * @package WordPress(core)
     * @since 2.5.0
     */
    public function admin_init() {
        
        $this->http_post = ( strtoupper( $_SERVER['REQUEST_METHOD'] ) === 'POST' );
        
        $this->help_tabs = [];
        $this->help_sidebars = [];
        
        $this->rest_namespaces = rest_get_server()->get_namespaces();
        $this->rest_namespaces[] = '/';
    }

    /**
     * Fires after the current screen has been set.
     *
     * @access public
     * @package WordPress(core)
     * @since 3.0.0
     */
    public function current_screen( \WP_Screen $screen ) {
        //
    }

    /**
     * Fires after core widgets for the admin dashboard have been registered.
     *
     * @access public
     * @package WordPress(core)
     * @since 2.5.0
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
     * Enqueue scripts for all admin pages.
     *
     * @access public
     * @package WordPress(core)
     * @since 2.8.0
     */
    public function admin_enqueue_scripts( string $hook_suffix ) {
        global $pagenow;
        $_page = sanitize_text_field( $_REQUEST['page'] ?? '' );
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
     * Fires when styles are printed for all admin pages.
     *
     * @access public
     * @package WordPress(core)
     * @since 2.6.0
     */
    public function admin_print_styles() {
        global $pagenow;
        /**
         * Filter the internal CSS to insert before minifying.
         *
         * @since 1.0.0
         * @hook  filter
         */
        $internal_css = apply_filters( 'wpignitor_admin_internal_css', '', $pagenow );
        if ( ! empty( $internal_css ) ) {
            $internal_css = '<style id="'. IGNITOR .'-internal-css">'. $internal_css .'</style>';
            echo $this->minify_css( $internal_css );
        }
    }

    /**
     * Fires in head section for all admin pages.
     *
     * @access public
     * @package WordPress(core)
     * @since 2.1.0
     */
    public function admin_head() {
        $current_screen = get_current_screen();
        if ( $current_screen->id === 'settings_page_wpignitor-settings' ) {
            $helps = [
                'globals-tab-help' => [
                    'title'    => __( 'Globals', IGNITOR ),
                    'content'  => $this->get_tab_help_content( 'globals' ),
                    'callback' => false,
                ],
                'conceal-tab-help' => [
                    'title'    => __( 'Conceals', IGNITOR ),
                    'content'  => $this->get_tab_help_content( 'conceal' ),
                    'callback' => false,
                ],
                'login-tab-help' => [
                    'title'    => __( 'Authorizations', IGNITOR ),
                    'content'  => $this->get_tab_help_content( 'login' ),
                    'callback' => false,
                ],
                'utils-tab-help' => [
                    'title'    => __( 'Utilities', IGNITOR ),
                    'content'  => $this->get_tab_help_content( 'utils' ),
                    'callback' => false,
                ],
            ];
            foreach ( $helps as $help_id => $data ) {
                $this->help_tabs[] = array_merge( [ 'id' => $help_id ], $data );
                $this->help_sidebars[$help_id] = [
                    '<dt>'. __( 'More Information:', IGNITOR ) .'</dt>',
                    '<dd><a href="https://wordpress.org/plugins/wp-ignitor/" target="_blank">'. __( 'Plugin Page', IGNITOR ) .'</a></dd>',
                    '<dd><a href="https://github.com/ka215/wp-ignitor" target="_blank">'. __( 'Repository', IGNITOR ) .'</a></dd>',
                    '<dt>'. __( 'Contribution:', IGNITOR ) .'</dt>',
                    '<dd><a href="https://github.com/sponsors/ka215" target="_blank"><i class="mdi mdi-heart-outline" style="color:#ff0099;"></i> '. __( 'Sponsor', IGNITOR ) .'</a></dd>',
                    '<dt>'. __( 'Plugin Version:', IGNITOR ) .'</dt>',
                    '<dd>'. self::VERSION .'</dd>',
                ];
            }
            if ( ! empty( $this->help_tabs ) ) {
                foreach ( $this->help_tabs as $_args ) {
                    $current_screen->add_help_tab( $_args );
                    if ( array_key_exists( $_args['id'], $this->help_sidebars ) ) {
                        $current_screen->set_help_sidebar( '<dl>'. implode( "\n", $this->help_sidebars[$_args['id']] ) .'</dl>' );
                    }
                }
            }
        }
    }

    /* -------------------- Filters Section -------------------- */

    /**
     * Filters the user contact methods.
     *
     * @access public
     * @package WordPress(core)
     * @since 2.9.0
     */
    public function user_contactmethods( array $methods, ?object $user ): array {
        if ( current_user_can( 'manage_options' ) ) {
            // Add to admin user's profile only
        }
        return $methods;
    }

    /**
     * Filters the "Thank you" text displayed in the admin footer.
     *
     * @access public
     * @package WordPress(core)
     * @since 2.8.0
     */
    public function admin_footer_text( string $text ): string {
        //$text = '';
        return $text;
    }

    /**
     * Filters a screen option value before it is set.
     * (filter named "set-screen-option" in core)
     *
     * @access public
     * @package WordPress(core)
     * @since 2.8.0 -> 5.4.2
     */
    public function set_screen_option( $screen_option, ?string $option, ?int $value ) {
        $user = wp_get_current_user();
        update_user_meta( $user->ID, $option, $value );
        return $screen_option;
    }

    /**
     * Filters the query arguments used for the Recent Posts widget.
     *
     * @access public
     * @package WordPress(core)
     * @since 4.2.0
     */
    public function dashboard_recent_posts_query_args( array $query_args ): array {
        //$query_args['post_type'] = [ 'post', 'page' ];
        return $query_args;
    }

    /**
     * Filters the action links displayed for each plugin in the Plugins list table.
     *
     * @access public
     * @package WordPress(core)
     * @since 2.5.0 -> 2.6.0 -> 4.9.0
     */
    public function plugin_action_links( ?array $actions, ?string $plugin_file, ?array $plugin_data, ?string $context ): array {
        return $actions;
    }

    /**
     * Filters the list of action links displayed for a specific plugin in the Plugins list table.
     * (filter named "plugin_action_links_{$plugin_file}" in core)
     *
     * @access public
     * @package WordPress(core)
     * @since 2.7.0 -> 4.9.0
     */
    public function plugin_action_links_self( ?array $actions, ?string $plugin_file, ?array $plugin_data, ?string $context ): array {
        $_link = esc_url( self::get_page_url() );
        $settings_link = '<a href="'. $_link .'">'. __( 'Settings' ) .'</a>';
        array_unshift( $actions, $settings_link ); 
        return $actions; 
    }

    /**
     * Filters the full array of plugins to list in the Plugins list table.
     *
     * @access public
     * @package WordPress(core)
     * @since 3.0.0
     */
    public function all_plugins( array $all_plugins ): array {
        $self_plugin = plugin_basename( $this->paths['plugin_dir'] . 'wp-ignitor.php' );
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
     * @package WpIgnitor
     * @since 1.0.0
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
     * Get specific tab content in admin help.
     *
     * @package WpIgnitor
     * @since 1.0.0
     *
     * @param  string   $tab    
     * @return string
     */
    public function get_tab_help_content( string $tab ): string {
        ob_start();
        $this->get_plugin_template( 'help-'. $tab );
        $help = ob_get_contents();
        ob_end_clean();
        return $help;
    }

    /**
     * Move WordPress core files to the new installation path specified
     *
     * @package WpIgnitor
     * @since 1.0.0
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
                if ( $this->debug ) {        
                    self::logger( $message );
                }
                return false;
            }
        }
        if ( ! is_dir( $new_install_path ) || ! is_writable( $new_install_path ) ) {
            $message = __( 'The destination path is invalid directory, or never write permission.', IGNITOR );
            $this->errors->add( 'failure_to_moving_install_path', $message );
            if ( $this->debug ) {        
                self::logger( $message );
            }
            return false;
        }

        // Compress current files
        if ( ! $this->compressTarball( ABSPATH ) ) {
            $message = __( 'The files on the installation path for moving could not compressed.', IGNITOR );
            $this->errors->add( 'failure_to_moving_install_path', $message );
            if ( $this->debug ) {        
                self::logger( $message );
            }
            return false;
        }

        $origin_archive_path = ABSPATH . IGNITOR . '_temp.tar';

        // Move and decompress file
        if ( ! $this->extractTarball( $origin_archive_path, $new_install_path ) ) {
            $message = __( 'Failed to move the files.', IGNITOR );
            $this->errors->add( 'failure_to_moving_install_path', $message );
            if ( $this->debug ) {        
                self::logger( $message );
            }
            return false;
        }

        return true;
    }

    /**
     * Get editable constant list
     *
     * @package WpIgnitor
     * @since 1.0.0
     *
     * @see https://ja.wordpress.org/support/article/editing-wp-config-php/
     * 
     * @return array
     */
    public function get_editable_constants(): array {
        $constants = [
            // '' => [ 'label' => __( '', IGNITOR ), 'type' => '', 'value' => , 'class' => '', 'placeholder' => __( 'Undefined', IGNITOR ) ],
            // '' => [ 'label' => __( '', IGNITOR ), 'type' => 'checkbox', 'value' => 1, 'class' => 'toggle', 'checked' =>  ],
            'wp_content_dir'       => [ 'label' => __( 'Move wp-content directory', IGNITOR ), 'type' => 'text', 'value' => WP_CONTENT_DIR, 'class' => 'medium-text code', 'placeholder' => WP_CONTENT_DIR, 'pair' => 'WP_CONTENT_URL' ],
            'wp_plugin_dir'        => [ 'label' => __( 'Move plugin directory', IGNITOR ), 'type' => 'text', 'value' => WP_PLUGIN_DIR, 'class' => 'medium-text code', 'placeholder' => WP_PLUGIN_DIR, 'pair' => 'WP_PLUGIN_URL' ],
            'uploads'              => [ 'label' => __( 'Move upload directory', IGNITOR ), 'type' => 'text', 'value' => defined( 'UPLOADS' ) ? UPLOAD : '', 'class' => 'regular-text code', 'placeholder' => __( 'Undefined', IGNITOR ) ],
            'autosave_interval'    => [ 'label' => __( 'Change auto save interval', IGNITOR ), 'type' => 'number', 'value' => AUTOSAVE_INTERVAL, 'class' => 'small-text', 'placeholder' => AUTOSAVE_INTERVAL, 'unit' => __( 'Sec.', IGNITOR ) ],
            'wp_post_revisions'    => [ 'label' => __( 'Disable post revisions', IGNITOR ), 'type' => 'checkbox', 'value' => 1, 'class' => 'toggle', 'checked' => WP_POST_REVISIONS ],
            'cookie_domain'        => [ 'label' => __( 'Cookie domain', IGNITOR ), 'type' => 'text', 'value' => COOKIE_DOMAIN, 'class' => 'regular-text code', 'placeholder' => COOKIE_DOMAIN ],
            'wp_allow_multisite'   => [ 'label' => __( 'Enable multi-site', IGNITOR ), 'type' => 'checkbox', 'value' => 1, 'class' => 'toggle', 'checked' => defined( 'WP_ALLOW_MULTISITE' ) ? WP_ALLOW_MULTISITE : false ],
            'noblogredirect'       => [ 'label' => __( 'Redirect non-existent blogs', IGNITOR ), 'type' => 'text', 'value' => defined( 'NOBLOGREDIRECT' ) ? NOBLOGREDIRECT : '', 'class' => 'medium-text code', 'placeholder' => __( 'Undefined', IGNITOR ) ],
            'wp_disable_fatal_error_handler' => [
                                        'label' => __( 'Disable recovery mode (>= WP 5.2)', IGNITOR ), 'type' => 'checkbox', 'value' => 1, 'class' => 'toggle', 'checked' => defined( 'WP_DISABLE_FATAL_ERROR_HANDLER' ) ? WP_DISABLE_FATAL_ERROR_HANDLER : false ],
            'wp_debug'             => [ 'label' => __( 'Enable debug mode', IGNITOR ), 'type' => 'checkbox', 'value' => 1, 'class' => 'toggle', 'checked' => WP_DEBUG ],
            'wp_debug_log'         => [ 'label' => __( 'Enable debug log output', IGNITOR ), 'type' => 'checkbox', 'value' => 1, 'class' => 'toggle', 'checked' => WP_DEBUG_LOG ],
            'wp_debug_display'     => [ 'label' => __( 'Enable PHP error display', IGNITOR ), 'type' => 'checkbox', 'value' => 1, 'class' => 'toggle', 'checked' => WP_DEBUG_DISPLAY ],
            'script_debug'         => [ 'label' => __( 'Enable script debug (for *.js and *.css)', IGNITOR ), 'type' => 'checkbox', 'value' => 1, 'class' => 'toggle', 'checked' => SCRIPT_DEBUG ],
            'concatenate_scripts'  => [ 'label' => __( 'Disable JavaScript concatenation', IGNITOR ), 'type' => 'checkbox', 'value' => 1, 'class' => 'toggle', 'checked' => defined( 'CONCATENATE_SCRIPTS' ) ? CONCATENATE_SCRIPTS : false ],
            'wp_memory_limit'      => [ 'label' => __( 'Change PHP allocated memory limit', IGNITOR ), 'type' => 'number', 'value' => (int) WP_MEMORY_LIMIT, 'class' => 'little-text', 'placeholder' => (int) WP_MEMORY_LIMIT, 'unit' => __( 'MB', IGNITOR ) ],
            'wp_max_memory_limit'  => [ 'label' => __( 'Change max memory limit for admin pages', IGNITOR ), 'type' => 'number', 'value' => (int) WP_MAX_MEMORY_LIMIT, 'class' => 'little-text', 'placeholder' => (int) WP_MAX_MEMORY_LIMIT, 'unit' => __( 'MB', IGNITOR ) ],
            'disable_wp_cron'      => [ 'label' => __( 'Disable Cron', IGNITOR ), 'type' => 'checkbox', 'value' => 1, 'class' => 'toggle', 'checked' => defined( 'DISABLE_WP_CRON' ) ? DISABLE_WP_CRON : false ],
            'wp_cron_lock_timeout' => [ 'label' => __( 'Change cron timeout time', IGNITOR ), 'type' => 'number', 'value' => defined( 'WP_CRON_LOCK_TIMEOUT' ) ? WP_CRON_LOCK_TIMEOUT : '', 'class' => 'small-text', 'placeholder' => 60, 'unit' => __( 'Sec.', IGNITOR ) ],
            'empty_trash_days'     => [ 'label' => __( 'Change period until trash emptied', IGNITOR ), 'type' => 'number', 'value' => EMPTY_TRASH_DAYS, 'class' => 'small-text', 'placeholder' => EMPTY_TRASH_DAYS, 'unit' => __( 'Day', IGNITOR ) ],
            'disallow_file_edit'   => [ 'label' => __( 'Disallow plugin/theme editor', IGNITOR ), 'type' => 'checkbox', 'value' => 1, 'class' => 'toggle', 'checked' => defined( 'DISALLOW_FILE_EDIT' ) ? DISALLOW_FILE_EDIT : false ],
            'force_ssl_admin'      => [ 'label' => __( 'Force SSL on admin and login pages', IGNITOR ), 'type' => 'checkbox', 'value' => 1, 'class' => 'toggle', 'checked' => FORCE_SSL_ADMIN ],
            'ignitor_debug'        => [ 'label' => __( 'Enable debug mode for WP-Ignitor plugin', IGNITOR ), 'type' => 'checkbox', 'value' => 1, 'class' => 'toggle', 'checked' => IGNITOR_DEBUG ],
        ];
        return $constants;
    }

    /**
     * Get cleanup HTML items
     *
     * @package WpIgnitor
     * @since 1.0.0
     *
     * @return array
     */
    public function get_cleanup_items(): array {
        $current_cleanup_options = $this->get_option( 'cleanup_html' ) ?: [];
        $items = [
            'prefetch'     => [ 'label' => __( 'Remove tags for prefetch as resource hint.', IGNITOR ), 'checked' => isset( $current_cleanup_options['prefetch'] ) ? $current_cleanup_options['prefetch'] : false ],
            'feedlinks'    => [ 'label' => __( 'Prevent output all feed links.', IGNITOR ), 'checked' => isset( $current_cleanup_options['feedlinks'] ) ? $current_cleanup_options['feedlinks'] : false ],
            'comments'     => [ 'label' => __( 'Disable comment.', IGNITOR ), 'checked' => isset( $current_cleanup_options['comments'] ) ? $current_cleanup_options['comments'] : false ],
            'emoji'        => [ 'label' => __( 'Stop the import of emoji-related resources.', IGNITOR ), 'checked' => isset( $current_cleanup_options['emoji'] ) ? $current_cleanup_options['emoji'] : false ],
            'rsd_link'     => [ 'label' => __( 'Remove RSD link for remote posting.', IGNITOR ), 'checked' => isset( $current_cleanup_options['rsd_link'] ) ? $current_cleanup_options['rsd_link'] : false ],
            'wlwmanifest'  => [ 'label' => __( 'Remove wlwmanifest link.', IGNITOR ), 'checked' => isset( $current_cleanup_options['wlwmanifest'] ) ? $current_cleanup_options['wlwmanifest'] : false ],
            'canonical'    => [ 'label' => __( 'Remove canonical link.', IGNITOR ), 'checked' => isset( $current_cleanup_options['canonical'] ) ? $current_cleanup_options['canonical'] : false ],
            'oembeds'      => [ 'label' => __( 'Stop providing oEmbed for media embedding.', IGNITOR ), 'checked' => isset( $current_cleanup_options['oembeds'] ) ? $current_cleanup_options['oembeds'] : false ],
            'rest_api'     => [ 'label' => __( 'Remove the REST API link tag (REST API will be not disabled).', IGNITOR ), 'checked' => isset( $current_cleanup_options['rest_api'] ) ? $current_cleanup_options['rest_api'] : false ],
            'block_editor' => [ 'label' => __( 'Remove the library of block editor on the frontend.', IGNITOR ), 'checked' => isset( $current_cleanup_options['block_editor'] ) ? $current_cleanup_options['block_editor'] : false ],
            'others'       => [ 'label' => __( 'Remove several outputs, such as generator meta tag.', IGNITOR ), 'checked' => isset( $current_cleanup_options['others'] ) ? $current_cleanup_options['others'] : false ],
        ];
        return $items;
    }

    /**
     * Clear all options saved for this plugin
     *
     * @package WpIgnitor
     * @since 1.0.0
     *
     * @param  bool $complete_deletion  Whether to delete records from the wp_options table as well
     * @return bool
     */
    public function clear_all_options( bool $complete_deletion = false ): bool {
        foreach ( $this->options as $_optkey => $_optval ) {
            $this->delete_option( $_optkey );
        }
        $this->save_options();
        if ( $complete_deletion ) {
            return delete_option( $this->options_key );
        } else {
            return empty( $this->options );
        }
    }

    /* -------------------- Plugin Configuration Pages -------------------- */

    /**
     * Controller of the plugin configuration pages.
     *
     * @package WpIgnitor
     * @since 1.0.0
     */
    public function plugin_settings_page(): void {
        // Execute update action
        global $pagenow;
        parse_str( $_SERVER['QUERY_STRING'], $queries );
        $page_args = [
            'pagenow'     => $pagenow,
            'assets_url'  => site_url( $this->paths['assets_dir_url'] ),
            'self_url'    => admin_url( basename( $_SERVER['REQUEST_URI'] ) ),
            'query_args'  => $queries,
            'current_tab' => sanitize_key( $_REQUEST['tab'] ?? 'globals' ),
            'tabs' => [
                'globals' => [ 'label' => __( 'Globals', IGNITOR ), 'icon' => 'mdi-rocket-launch-outline' ],
                'conceal' => [ 'label' => __( 'Conceals', IGNITOR ), 'icon' => 'mdi-incognito' ],
                'login'   => [ 'label' => __( 'Authorizations', IGNITOR ), 'icon' => 'mdi-shield-key-outline' ],
                'utils'   => [ 'label' => __( 'Utilities', IGNITOR ), 'icon' => 'mdi-hammer-wrench' ],
                //'helth'   => [ 'label' => __( 'Helth Check', IGNITOR ), 'icon' => 'mdi-check-circle-outline' ],
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

    /**
     * Perform each process by handling the POST values on the plugin configuration page.
     *
     * @package WpIgnitor
     * @since 1.0.0 -> 1.1.1
     */
    public function execute_plugin_settings(): array {
        $is_success  = false;
        $messages    = [];
        $nonce       = filter_input( INPUT_POST, '_wpnonce', FILTER_SANITIZE_SPECIAL_CHARS );
        $current_tab = filter_input( INPUT_POST, 'tab', FILTER_SANITIZE_SPECIAL_CHARS );
        if ( ! wp_verify_nonce( $nonce, $current_tab .'@'. IGNITOR ) ) {
            // Invalid access
            return [ 'state' => 'error', 'message' => __( 'Invalid access.', IGNITOR ) ];
        }
        // Get params
        $params = [];
        foreach ( $_POST as $_k => $_v ) {
            switch ( $_k ) {
                case 'int':
                case 'origin_login_behavior':
                    // For integer
                    $params[$_k] = filter_input( INPUT_POST, $_k, FILTER_VALIDATE_INT );
                    break;
                case 'float':
                    // For float
                    $params[$_k] = empty( $_POST[$_k] ) ? null : filter_input( INPUT_POST, $_k, FILTER_VALIDATE_FLOAT );
                    break;
                case 'array':
                case 'wp_config':
                case 'advanced_htaccess':
                case 'namespaces':
                case 'http_code':
                case 'allow_login_ips':
                case 'apache_auth_ids':
                case 'apache_auth_passwords':
                    // For array
                    $params[$_k] = filter_input( INPUT_POST, $_k, FILTER_DEFAULT, FILTER_REQUIRE_ARRAY );
                    if ( ! empty( $params[$_k] ) ) {
                        foreach ( $params[$_k] as $_idx => $_elm ) {
                            if ( is_numeric( $_elm ) ) {
                                $params[$_k][$_idx] = (int) $_elm;
                            } elseif ( is_string( $_elm ) && in_array( strtolower( $_elm ), [ 'true', 'false' ], true ) ) {
                                $params[$_k][$_idx] = filter_var( $_elm, FILTER_VALIDATE_BOOLEAN );
                            }
                        }
                    }
                    break;
                case 'url':
                case '_wp_http_referer':
                    // For url
                    $params[$_k] = filter_input( INPUT_POST, $_k, FILTER_VALIDATE_URL );
                    break;
                case 'bool':
                case 'new_login_on':
                    // For boolean
                    $params[$_k] = filter_input( INPUT_POST, $_k, FILTER_VALIDATE_BOOLEAN );
                    break;
                case '_wpnonce':
                case 'tab':
                    // Skip because it has already been filtered
                    break;
                case 'htaccess':
                    // For string that allows only specific tags
                    $params[$_k] = filter_input( INPUT_POST, $_k, FILTER_DEFAULT );
                    $allowed_html = [
                        'ifmodule' => [
                            'mod_rewrite.c'     => [],
                            'mod_auth_basic.c'  => [],
                            'mod_auth_digest.c' => [],
                        ],
                    ];
                    $params[$_k] = wp_kses( $params[$_k], $allowed_html );
                    break;
                default:
                    // For string
                    $params[$_k] = filter_input( INPUT_POST, $_k, FILTER_DEFAULT );
                    if ( strpos( $params[$_k], PHP_EOL ) !== false ) {
                        $params[$_k] = sanitize_textarea_field( $params[$_k] );
                    } else {
                        $params[$_k] = sanitize_text_field( $params[$_k] );
                    }
                    // Cast to boolean
                    if ( in_array( strtolower( $params[$_k] ), [ 'true', 'false' ], true ) ) {
                        $params[$_k] = filter_var( $params[$_k], FILTER_VALIDATE_BOOLEAN );
                    }
                    break;
            }
        }
        // Set the default value if the value is missing as like when checkbox is unchecked.
        if ( ! isset( $params['bool'] ) ) {
            // e.g. $params['bool'] = false;
        }
        // Individual processing by the specified method
        switch( $params['method'] ) {
            case 'update-wp-config':
                unset( $params['htaccess'] );
                $this->options['wp_config_options'] = isset( $params['wp_config'] ) ? $params['wp_config'] : [];
                $this->save_options();
                $wp_config_file = $this->get_wp_config_path();
                if ( is_writable( $wp_config_file ) ) {
                    $is_success = $this->wpconfig_insert_with_markers( $wp_config_file, 'WP Ignitor', $params['add_config_fulltext'] );
                }
                if ( ! $is_success ) {
                    $messages[] = __( 'Failed to update "wp-config.php".', IGNITOR );
                }
                break;
            case 'restore-wp-config':
                $is_success = $this->restore_wpconfig();
                break;
            case 'update-htaccess':
                unset( $params['wp_config'] );
                $rules = $params['htaccess'];
                // Upsert the basic auth user file if necessary; since v1.1.0
                if ( $this->debug ) {        
                    self::logger( $params, __METHOD__ );
                }
                $apache_auth_user_exists = false;
                // Firstly register auth users
                if ( ! empty( $params['apache_auth_ids'] ) && ! empty( $params['apache_auth_passwords'] ) ) {
                    $_auth_user_pair = [];
                    foreach ( $params['apache_auth_ids'] as $_id => $_user ) {
                        if ( ! empty( $_user ) && isset( $params['apache_auth_passwords'][$_id] ) && ! empty( $params['apache_auth_passwords'][$_id] ) ) {
                            $_auth_user_pair[sanitize_user( $_user )] = sanitize_text_field( $params['apache_auth_passwords'][$_id] );
                        }
                    }
                    if ( empty( $_auth_user_pair ) ) {
                        $this->options['apache_auth_users'] = [];
                        $this->remove_auth_user_file();
                    } else {
                        $this->options['apache_auth_users'] = $_auth_user_pair;
                        $apache_auth_user_exists = true;
                    }
                    $this->options['advanced_htaccess']['apache_auth_type'] = $params['advanced_htaccess']['apache_auth_type'] ?: 'basic';
                    $this->save_options();
                }
                // self::logger( $this->get_options() );
                if ( (bool)$params['advanced_htaccess']['apache_auth'] ) {
                    $is_enabled_apache_auth = false;
                    // Then save the apache authentication user file.
                    if ( $apache_auth_user_exists ) {
                        $file_path = $params['advanced_htaccess']['apache_auth_user_file'];
                        $auth_type = $params['advanced_htaccess']['apache_auth_type'] ?: 'basic';
                        $is_enabled_apache_auth = $this->save_auth_user_file( $file_path, $auth_type );
                        if ( ! $is_enabled_apache_auth ) {
                            $messages[] = __( 'Updated ".htaccess", but the apache authentication setting was aborted because the saving of the authentication user file failed.', IGNITOR );
                        }
                    } else {
                        $messages[] = __( 'Updated ".htaccess", but the apache authentication setting was aborted because anyone valid authentication user has not been set.', IGNITOR );
                    }
                    if ( ! $is_enabled_apache_auth ) {
                        $this->options['advanced_htaccess']['apache_auth'] = false;
                        $this->save_options();
                        $rules = $this->generate_htaccess();
                    }
                } else {
                    // Then remove the apache authentication user file.
                    $this->remove_auth_user_file();
                }
                // Ensure get_home_path() is declared.
                require_once ABSPATH . 'wp-admin/includes/file.php';
                $htaccess_file = $this->get_htaccess_path();
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
            case 'restore-htaccess':
                $is_success = $this->restore_htaccess();
                break;
            case 'clear-all-settings':
                $is_success = $this->clear_all_options();
                break;
            case 'rest-behavior':
                $rest_opts = [];
                foreach ( $params['namespaces'] as $_ns => $_val ) {
                    $http_code = 200;
                    if ( isset( $params['http_code'] ) && array_key_exists( $_ns, $params['http_code'] ) ) {
                        $http_code = $params['http_code'][$_ns];
                    }
                    $rest_opts[$_ns] = [ 'todo' => $_val, 'state' => $http_code ];
                }
                $this->options['rest_behavior'] = $rest_opts;
                $this->save_options();
                $is_success = true;
                break;
            case 'login-setting':
                if ( $params['new_login_on'] && ! empty( $params['new_login_path'] ) ) {
                    $this->options['new_login'] = [
                        'path' => $params['new_login_path'],
                        'orig' => $params['origin_login_behavior'],
                    ];
                } else {
                    $this->delete_option( 'new_login' );
                }
                if ( array_key_exists( 'allow_login_ips', $params ) && ! empty( $params['allow_login_ips'] ) ) {
                    $this->options['allow_login_ips'] = $params['allow_login_ips'];
                    if ( array_key_exists( 'deny_login_redirect', $params ) && ! empty( $params['deny_login_redirect'] ) ) {
                        $this->options['deny_login_redirect'] = (int) $params['deny_login_redirect'];
                    } else {
                        $this->options['deny_login_redirect'] = 401;
                    }
                } else {
                    $this->delete_option( 'allow_login_ips' );
                    $this->delete_option( 'deny_login_redirect' );
                }
                $this->save_options();
                $is_success = true;
                break;
            case 'unlock-core-updater':
                if ( get_option( 'core_updater.lock' ) ) {
                    delete_option( 'core_updater.lock' );
                } else {
                    $messages[] = __( "It's not locked right now.", IGNITOR );
                }
                $is_success = empty( $messages );
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

}