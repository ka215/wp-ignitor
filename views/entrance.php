<?php
/**
 * Wrapper for new login page as an alternative to "wp-login.php"
 *
 * @package WpIgnitor
 * @since 1.0.0
 */
$_docroot = str_replace( DIRECTORY_SEPARATOR, '/', $_SERVER['DOCUMENT_ROOT'] );
define( 'WPIGNITOR_LOGIN_PAGE_DIR', str_replace( DIRECTORY_SEPARATOR, '/', dirname( __FILE__ ) ) );
define( 'WPIGNITOR_LOGIN_PAGE_FILE', basename( $_SERVER['SCRIPT_FILENAME'] ) );
define( 'WPIGNITOR_LOGIN_PAGE_URL', str_replace( $_docroot, '', WPIGNITOR_LOGIN_PAGE_DIR ) .'/'. WPIGNITOR_LOGIN_PAGE_FILE );
define( 'WPIGNITOR_LOGIN_CREDENTIAL', hash( 'sha512', 'wp-ignitor@'. $_SERVER['HTTP_HOST'] .':'. WPIGNITOR_LOGIN_PAGE_DIR .'/'. WPIGNITOR_LOGIN_PAGE_FILE ) );
$matches = glob( $_docroot .'/*/wp-lo{ad,gin}.php', GLOB_BRACE );
$core_files = [];
foreach ( $matches as $file_path ) {
    if ( in_array( basename( $file_path ), [ 'wp-load.php', 'wp-login.php' ], true ) ) {
        $core_files[basename( $file_path )] = str_replace( DIRECTORY_SEPARATOR, '/', $file_path );
    }
}
if ( ! empty( $core_files ) && isset( $core_files['wp-login.php'] ) ) {
    $origin_login_file = str_replace( DIRECTORY_SEPARATOR, '/', $matches[0] );
    require_once $core_files['wp-login.php'];
} else {
    require_once $core_files['wp-load.php'];
    global $wp_query;
    $wp_query->set_404();
    status_header( '404' );
    nocache_headers();
    include( get_query_template( '404' ) );
    exit;
}
