<?php
/**
 * WP Ignitor
 *
 * @package           WpIgnitor
 * @author            Ka2
 * @copyright         2020 Ka2
 * @license           GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:       WP Ignitor
 * Plugin URI:        https://ka2.org/wp-ignitor
 * Description:       Now let's ignition to your site, with conceal that we are WordPress and get starting with the stronger defensive turn.
 * Version:           1.1.2
 * Requires at least: 5.2.9
 * Requires PHP:      7.4
 * Author:            Ka2
 * Author URI:        https://ka2.org
 * Text Domain:       wpignitor
 * Domain Path:       /languages/
 * License:           GPL v2 or later
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 */
/*
WP Ignitor is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.
 
WP Ignitor is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
 
You should have received a copy of the GNU General Public License
along with WP Ignitor. If not, see http://www.gnu.org/licenses/gpl-2.0.txt.
*/

defined( 'IGNITOR_PLUGIN_VERSION' ) or define( 'IGNITOR_PLUGIN_VERSION', '1.1.2' );
defined( 'IGNITOR_PLUGIN_DIR' ) or define( 'IGNITOR_PLUGIN_DIR', str_replace( '\\', '/', plugin_dir_path( __FILE__ ) ) );
defined( 'IGNITOR' ) or define( 'IGNITOR', 'wpignitor' );// This plugin's Text Domain
defined( 'IGNITOR_DEBUG' ) or define( 'IGNITOR_DEBUG', false );

require_once( __DIR__ . '/autoloader.php' );

use wpIgnitor\wpIgnitor;

$class = 'wpIgnitor\wpIgnitor';

if ( class_exists( $class ) ) {
    register_activation_hook( __FILE__, [ $class, 'plugin_activation' ] );
    register_deactivation_hook( __FILE__, [ $class, 'plugin_deactivation' ] );
    register_uninstall_hook( __FILE__, [ $class, 'plugin_uninstall' ] );
    
    wpIgnitor::get_object();
} else {
    trigger_error( "Unable to load class: $class", E_USER_WARNING );
    exit;
}

// Allow custom functions file
if ( file_exists( __DIR__ . '/functions.php' ) ) {
    require_once( __DIR__ . '/functions.php' );
}
