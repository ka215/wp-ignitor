<?php
/**
 * Trait for add filters
 *
 * @package WpIgnitor
 * @since 1.0.0
 */
namespace wpIgnitor;

trait filters {
    //
    public function upload_dir( array $uploads ): array {
        $override_uploads = [
            'path'    => preg_replace( '/(uploads)(.*)$/', '$1/salons', $uploads['path'] ),
            'url'     => preg_replace( '/(uploads)(.*)$/', '$1/salons', $uploads['url'] ),
            'subdir'  => '/salons',
            'basedir' => preg_replace( '/(uploads)(.*)$/', '$1', $uploads['basedir'] ),
            'baseurl' => preg_replace( '/(uploads)(.*)$/', '$1', $uploads['baseurl'] ),
            'error'   => $uploads['error'],
        ];
        return array_merge( $uploads, $override_uploads );
    }

    /**
     * Permission for REST API access by whitelist method
     *
     * @access public
     */
    public function rest_pre_dispatch( $result, $wp_rest_server, $request ) {
        $namespaces = $request->get_route();
        if ( ! is_admin() ) {
            switch ( true ) {
                case strpos( $namespaces, 'oembed/' ) === 1:
                    // oembed
                case strpos( $namespaces, 'jetpack/' ) === 1:
                    // Jetpack
                case strpos( $namespaces, 'contact-form-7/' ) === 1:
                    // Contact Form 7
                case current_user_can( 'edit_posts' ):
                    // BlockEditor
                    return $result;
            }
        }
        return new \WP_Error(
            'rest_no_route', 
            __( 'URL とリクエストメソッドに一致するルートがありません' ), 
            [ 'status' => 404,/* rest_authorization_required_code() 'route' => $namespaces */ ]
        );
    }
}