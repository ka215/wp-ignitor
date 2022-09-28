<?php
/**
 * Now you can extend the processing of this plugin.
 * If you want to use it, you need to rename it to the file name "functions.php".
 *
 * For reference, various hook lists prepared exclusively for this plugin
 * @actions:
 * - 
 * @filters:
 * - wpignitor_admin_internal_css( string $internal_css, $pagenow ): string
 * - wpignitor_filter_regex( string $regex, string $target_path ): string
 * - wpignitor_exclude_files_to_move( array $exclude_files, string $target_path ): array
 * - wpignitor_rest_route_redirect( string $redirect_to, array $rest_behavior ): string
 * - wpignitor_omit_comments( bool $do_omit ): bool
 * - wpignitor_logfile_path( string $log_file, array $logs ): string
 * - wpignitor_remote_request_args( array $args, string $get_uri ): array
 * - wpignitor_remote_retrieve_html( string $raw_html, string $get_uri, array|WP_Error $response ): string
 * - wpignitor_emergency_recovery( bool $run_recovery ): bool
 * - wpignitor_apache_auth_user_file_path( string $dist_path ): string
 */

/* Hook implementation example:
add_filter( 'wpignitor_remote_request_args', function( $args, $get_uri ) {
    $args = [
        'sslverify' => false,
    ];
    return $args;
}, 10, 2 );

add_filter( 'wpignitor_emergency_recovery', '__return_true' );
*/
