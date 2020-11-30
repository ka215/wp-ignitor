<?php
/**
 * Holds the WP Ignitor plugin core class
 *
 * @package WpIgnitor
 * @since 1.0.0
 */
namespace wpIgnitor;

use wpIgnitor\{
    listTable,
};

if ( ! class_exists( 'wpIgnitor' ) ) :

class wpIgnitor extends abstractClass {
    /**
     * Holds plugin version
     *
     * @const string
     */
    const VERSION = IGNITOR_PLUGIN_VERSION;

    /**
     * Holds options key
     *
     * @access protected
     * @var string
     */
    protected $options_key = IGNITOR;

    /**
     * Holds errors object
     *
     * @access public
     * @var object
     */
    public $errors;

    /**
     * [Deprecated] Holds notification object
     *
     * @access public
     * @var object
     */
    public $notifications;

    /**
     * Holds current page being requested
     *
     * @access public
     * @var string
     */
    public $request_page;

    /**
     * Holds current action being requested
     *
     * @access public
     * @var string
     */
    public $request_action;

    /**
     * Holds current instance being requested
     *
     * @access public
     * @var int
     */
    public $request_instance = 0;

    /**
     * Holds max upload filesize from running php environment requested
     *
     * @access public
     * @var int (bytes unit)
     */
    //public $max_upload_size;
    
    /**
     * Holds various paths for using in this plugin
     *
     * @access public
     * @var array
     */
    public $paths;
    
    /**
     * Holds user's accept language
     *
     * @access public
     * @var string
     */
    public $user_language;

    /**
     * Holds database handler
     *
     * @access protected
     * @var array
     */
    //protected $dbh;

    /**
     * Holds loaded instances
     *
     * @access protected
     * @var array
     */
    protected $loaded_instances = [];

    /**
     * Returns singleton instance
     *
     * @access public
     *
     * @param string $class Class to instantiate
     * @return object Instance of $class
     */
    public static function get_object( string $class = null ): self {
        return parent::get_object( __CLASS__ );
    }

    /**
     * Returns default options
     *
     * @access public
     *
     * @return array Default options
     */
    public static function default_options(): array {
        return apply_filters( 'wpignitor_default_options', [
            # 'option_key_1'     => true,
            # 'option_key_2'     => 'default',
            # 'option_key_3'     => []
        ] );
    }

    /**
     * loads the plugin
     *
     * @access protected
     */
    protected function load() {
        // Various global settings for this plugin
        $this->paths = [
            'plugin_dir' => IGNITOR_PLUGIN_DIR,
            'views_dir'  => IGNITOR_PLUGIN_DIR . 'views/',
            'assets_dir' => IGNITOR_PLUGIN_DIR . 'assets/',
            'assets_dir_url' => str_replace( $_SERVER['DOCUMENT_ROOT'], '', IGNITOR_PLUGIN_DIR . 'assets/' ),// Relative path
        ];

        // Initialize the errors object for this plugin
        $this->errors = new \WP_Error();

        add_filter( 'auto_update_plugin', '__return_false' );

        // Action hooks: refer definition in "actions" trait
        add_action( 'registered_taxonomy', [ $this, 'registered_taxonomy' ], 10, 3 );
        add_action( 'registered_post_type', [ $this, 'registered_post_type' ], 10, 2 );
        //add_action( 'plugins_loaded', [ $this, 'plugins_loaded' ] );
        add_action( 'after_setup_theme', [ $this, 'after_setup_theme' ] );
        add_action( 'init', [ $this, 'init' ] );
        add_action( 'widgets_init', [ $this, 'widgets_init' ] );
        add_action( 'wp_enqueue_scripts', [ $this, 'wp_enqueue_scripts' ] );
        add_action( 'wp_ajax_wpignitor_ajax', [ $this, 'wpignitor_ajax' ] );
        add_action( 'wp_ajax_nopriv_wpignitor_ajax', [ $this, 'nopriv_wpignitor_ajax' ] );
        add_action( 'wp_footer', [ $this, 'wp_footer' ] );
        add_action( 'shutdown', [ $this, 'shutdown' ] );

        // Filter hooks: refer definition in "filters" trait
        //add_filter( 'upload_dir', [ $this, 'upload_dir' ] );// Reference: filters
        add_filter( 'wp_resource_hints', [ $this, 'wp_resource_hints' ], 10, 2 );
        add_filter( 'rest_authentication_errors', [ $this, 'rest_authentication_errors' ] );
        add_filter( 'rest_pre_dispatch', [ $this, 'rest_pre_dispatch' ], 10, 3 );
        add_filter( 'rest_endpoints', [ $this, 'rest_endpoints' ] );

        // For admin screen controls: refer definition in "admin" trait
        if ( is_admin() ) :

        add_action( 'admin_menu', [ $this, 'admin_menu' ] );
        add_action( 'admin_init', [ $this, 'admin_init' ] );
        add_action( 'current_screen', [ $this, 'current_screen' ] );
        add_action( 'wp_dashboard_setup', [ $this, 'wp_dashboard_setup' ] );
        add_action( 'admin_enqueue_scripts', [ $this, 'admin_enqueue_scripts' ] );
        add_action( 'admin_print_styles', [ $this, 'admin_print_styles' ] );
        add_action( 'admin_head', [ $this, 'admin_head' ] );
        add_filter( 'user_contactmethods', [ $this, 'user_contactmethods' ] );
        add_filter( 'admin_footer_text', [ $this, 'admin_footer_text' ] );
        add_filter( 'set-screen-option', [ $this, 'set_screen_option' ], 10, 3 );
        add_filter( 'dashboard_recent_posts_query_args', [ $this, 'dashboard_recent_posts_query_args' ] );
        add_filter( 'plugin_action_links', [ $this, 'plugin_action_links' ], 10 , 4 );
        add_filter( 'plugin_action_links_'.plugin_basename( $this->paths['plugin_dir'] . 'wp-ignitor.php' ), [ $this, 'plugin_action_links_self' ], 10, 4 );
        add_filter( 'all_plugins', [ $this, 'all_plugins' ] );

        endif;

        // For frontend screen controls: refer definition in "frontend" trait

        // Bind shortcodes
        //add_shortcode( 'shortcode_handler',         [ $this, 'shortcode_method' ] );// Reference: shortcodes

    }

    /**
     * Database: including trait for database handler
     */
    //use database;

    /**
     * Actions: including trait for action hooks
     */
    use actions;
    
    /**
     * Filters: including trait for filter hooks
     */
    use filters;

    /**
     * Filters: including trait for processing on the admin screen
     */
    use admin;

    /**
     * Utilities: including trait for conveniently utility methods
     */
    use utils;

    /**
     * Salons: including trait as salons model
     */
    //use salons;

    /**
     * Callback that fires when the plugin is activated
     *
     * @access public
     */
    public static function plugin_activation() {
        $logs = [];
        $logs[] = '"WP Ignitor" plugin activated!';
        $plugin_option_key = IGNITOR;
        $plugin_options = get_option( $plugin_option_key );
        if ( $plugin_options ) {
            update_option( $plugin_option_key, $plugin_options );
            ob_start();
            var_dump( $plugin_options );
            $buffer = ob_get_contents();
            ob_get_clean();
            $logs[] = $buffer;
        }

        self::logger( $logs );
        //error_log( implode( "\n", $logs ), 3, IGNITOR_PLUGIN_DIR . 'wp-ignitor.log' );
    }

    /**
     * Callback that fires when the plugin is deactivated
     *
     * @access public
     */
    public static function plugin_deactivation() {
        $logs = [];
        $logs[] = '"WP Ignitor" plugin deactivated!';
        $plugin_option_key = IGNITOR;
        $plugin_options = get_option( $plugin_option_key );
        if ( $plugin_options ) {
            ob_start();
            var_dump( $plugin_options );
            $buffer = ob_get_contents();
            ob_get_clean();
            $logs[] = $buffer;
            delete_option( $plugin_option_key );
        }

        self::logger( $logs );
        //error_log( implode( "\n", $logs ), 3, IGNITOR_PLUGIN_DIR . 'wp-ignitor.log' );
    }

}

endif;// Class exists