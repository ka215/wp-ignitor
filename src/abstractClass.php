<?php
/**
 * Holds the WP Ignitor plugin Abstract class
 *
 * @package WpIgnitor
 * @since 1.0.0
 */
namespace wpIgnitor;

if ( ! class_exists( 'abstractClass' ) ) :

class abstractClass {
    /**
     * Holds singleton objects (=instance)
     *
     * @access private
     * @var array
     */
    private static $objects = [];

    /**
     * Holds options key
     *
     * @access protected
     * @var string
     */
    protected $options_key;

    /**
     * Holds options array
     *
     * Extending classes should explicity define options here
     * or create a method named default_options() which returns
     * an array of options.
     *
     * @access protected
     * @var object
     */
    protected $options = [];

    /**
     * Constructor
     *
     * @access protected
     */
    protected function __construct() {
        $this->load_options();
        $this->load();
    }

    /**
     * Clone
     *
     * @access private
     */
    private function __clone() {}

    /**
     * Returns singleton instance
     *
     * @access public
     *
     * @param string $class Class to instantiate
     * @return object Instance of $class
     */
    public static function get_object( ?string $class = null ): object {
        if ( ! class_exists( $class ) ) {
            $class = get_called_class();
            //return null;
        }

        if ( ! isset( self::$objects[$class] ) )
            self::$objects[$class] = new $class;

        return self::$objects[$class];
    }
    
    /**
     * Called when object is constructed
     *
     * @access protected
     */
    protected function load() {
        // This should be overridden by a child class
    }

    /**
     * Loads options from DB
     *
     * @access public
     *
     * @param array|string
     */
    public function load_options() {
        if ( method_exists( $this, 'default_options' ) )
            $this->options = (array) $this->default_options();

        if ( ! $this->options_key )
            return;

        $options = get_option( $this->options_key, [] );
        $options = wp_parse_args( $options, $this->options );

        $this->options = $options;
    }

    /**
     * Saves options to DB
     *
     * @access public
     */
    public function save_options() {
        if ( $this->options_key )
            update_option( $this->options_key, $this->options );
    }

    /**
     * Retrieves an option
     *
     * @access public
     *
     * @param string|array $option Name of option to retrieve or an array of hierarchy for multidimensional options
     * @param mixed $default Default value to return if $option is not set
     * @return mixed Value of requested option or $default if option is not set
     */
    public function get_option( $option, $default = false ) {
        if ( ! is_array( $option ) )
            $option = [ $option ];
        return self::_get_option( $option, $default, $this->options );
    }

    /**
     * Recursively retrieves a multidimensional option
     *
     * @access private
     *
     * @param array $option Array of hierarchy
     * @param mixed $default Default value to return
     * @param array Options to search
     * @return mixed Value of requested option or $default if option is not set
     */
    private function _get_option( $option, $default, &$options ) {
        $key = array_shift( $option );
        if ( ! isset( $options[$key] ) )
            return $default;
        if ( ! empty( $option ) )
            return self::_get_option( $option, $default, $options[$key] );
        return $options[$key];
    }

    /**
     * Retrieves all options
     *
     * @access public
     *
     * @return array Options
     */
    public function get_options() {
        return $this->options;
    }

    /**
     * Sets an option
     *
     * @access public
     *
     * @param string $option Name of option to set or an array of hierarchy for multidimensional options
     * @param mixed $value Value of new option
     */
    public function set_option( string $option, $value = '' ) {
        if ( ! is_array( $option ) )
            $option = [ $option ];

        self::_set_option( $option, $value, $this->options );
    }

    /**
     * Recursively sets a multidimensional option
     *
     * @access private
     *
     * @param array $option Array of hierarchy
     * @param mixed $value Value of new option
     * @param array $options Options to update
     */
    private function _set_option( array $option, $value, &$options ) {
        $key = array_shift( $option );
        if ( ! empty( $option ) ) {
            if ( ! isset( $options[$key] ) )
                $options[$key] = [];
            return self::_set_option( $option, $value, $options[$key] );
        }
        $options[$key] = $value;
    }

    /**
     * Sets all options
     *
     * @access public
     *
     * @param array $options Options array
     */
    public function set_options( array $options ) {
        $this->options = (array) $options;
    }

    /**
     * Deletes an option
     *
     * @access public
     *
     * @param string $option Name of option to delete
     */
    public function delete_option( string $option ) {
        if ( ! is_array( $option ) )
            $option = [ $option ];

        self::_delete_option( $option, $this->options );
    }

    /**
     * Recursively finds and deletes a multidimensional option
     *
     * @access private
     *
     * @param array $option Array of hierarchy
     * @param array $options Options to update
     */
    private function _delete_option( array $option, &$options ) {
        $key = array_shift( $option );
        if ( ! empty( $option ) )
            return self::_delete_option( $option, $options[$key] );
        unset( $options[$key] );
    }
    

}

endif;// Class exists