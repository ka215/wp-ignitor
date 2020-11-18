<?php
/*
  Plugin Name: WP Ignitor
  Plugin URI: 
  Description: Now let's hide that we are WordPress and get starting with the strong defensive turn.
  Version: 1.0.0
  Author: Ka2 <ka2@ka2.org>
  Author URI: https://ka2.org/
  License: MIT - http://opensource.org/licenses/mit-license.php
  Text Domain: wp-ignitor
  Domain Path: /langs
*/

/*
Copyright (c) 2020 ka2 (https://ka2.org/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

defined( 'IGNITOR_PLUGIN_VERSION' ) or define( 'IGNITOR_PLUGIN_VERSION', '1.0.0' );
//defined( 'IGNITOR_DB_VERSION' ) or define( 'IGNITOR_DB_VERSION', '1.0.0' );
defined( 'IGNITOR_PLUGIN_DIR' ) or define( 'IGNITOR_PLUGIN_DIR', str_replace( '\\', '/', plugin_dir_path( __FILE__ ) ) );
defined( 'IGNITOR' ) or define( 'IGNITOR', 'wpignitor' );// This plugin domain name

require_once( __DIR__ . '/autoloader.php' );

use wpIgnitor\wpIgnitor;

$class = 'wpIgnitor\wpIgnitor';

if ( class_exists( $class ) ) {
    register_activation_hook( __FILE__, [ $class, 'plugin_activation' ] );
    register_deactivation_hook( __FILE__, [ $class, 'plugin_deactivation' ] );
    
    wpIgnitor::get_object();
} else {
    trigger_error( "Unable to load class: $class", E_USER_WARNING );
    exit;
}

// Allow custom functions file
if ( file_exists( __DIR__ . '/functions.php' ) ) {
    require_once( __DIR__ . '/functions.php' );
}
