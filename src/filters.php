<?php
/**
 * Trait for add filters
 *
 * @package WpIgnitor
 * @since 1.0.0
 */
namespace wpIgnitor;

trait filters {
    /**
     * Filters the uploads directory data.
     *
     * @access public
     * @package WordPress(core)
     * @since 2.0.0
     * /
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
    */



    /**
     * Filters domains and URLs for resource hints of relation type.
     *
     * @access public
     * @package WordPress(core)
     * @since 4.6.0
     */
    public function wp_resource_hints( array $urls, string $relation_type ): array {
        $cleanup_options = $this->get_option( 'cleanup_html' );
        if ( isset( $cleanup_options['prefetch'] ) && $cleanup_options['prefetch'] && 'dns-prefetch' === $relation_type && ! is_admin() ) {
            return array_diff( wp_dependencies_unique_hosts(), $urls );
        }
        return $urls;
    }

    /**
     * Filters REST authentication errors.
     *
     * @access public
     * @package WordPress(core)
     * @since 4.4.0
     */
    public function rest_authentication_errors( $errors = null ) {
        /*
        $disabled_rest = $this->get_option( 'disabled_rest' );
        if ( $disabled_rest ) {
            return new WP_Error( 'disabled', [ 'status' => rest_authorization_required_code() ] );
        }
        */
    }

    /**
     * Filters the pre-calculated result of a REST dispatch request.
     * (Permission for REST API access by whitelist method)
     *
     * @access public
     * @package WordPress(core)
     * @since 4.4.0
     * @param mixed           $result  Response to replace the requested version with. Can be anything
     *                                 a normal endpoint can return, or null to not hijack the request.
     * @param WP_REST_Server  $server  Server instance.
     * @param WP_REST_Request $request Request used to generate the response.
     */
    public function rest_pre_dispatch( $result, $server, $request ) {
        $rest_behavior = $this->get_option( 'rest_behavior' );
        if ( ! empty( $rest_behavior ) ) {
            $current_namespace = $request->get_route();
            $current_namespace = '/' === $current_namespace ? $current_namespace : trim( $current_namespace, '/' );
            // var_dump( $rest_behavior, $current_namespace );
            if ( array_key_exists( $current_namespace, $rest_behavior ) ) {
                switch ( $rest_behavior[$current_namespace]['todo'] ) {
                    case 'allow_all':
                        return $result;
                    case 'allow_self':
                        //var_dump( $this->get_remote_addr(), $_SERVER['SERVER_ADDR'] );
                        if ( $this->get_remote_addr() === $_SERVER['SERVER_ADDR'] ) {
                            return $result;
                        }
                        break;
                    case 'allow_jetpack':
                        //var_dump( $_SERVER['HTTP_USER_AGENT'] );
                        if ( strpos( strtolower( $_SERVER['HTTP_USER_AGENT'] ), 'jetpack' ) !== false ) {
                            return $result;
                        }
                        break;
                    case 'deny_all':
                    case 'redirect':
                        break;
                }
                switch ( $rest_behavior[$current_namespace]['state'] ) {
                    case 301:
                    case 302:
                        /**
                         * Filters the redirect process
                         *
                         * @package WpIgnitor
                         * @since 1.0.0
                         *
                         * @param string $redirect_to   An redirect URL
                         * @param array  $rest_behavior Behavior on the namespace of the current REST route
                         */
                        $redirect_to = apply_filters( 'wpignitor_rest_route_redirect', home_url( '/' ), $rest_behavior[$current_namespace] );
                        wp_safe_redirect( $redirect_to, $rest_behavior[$current_namespace]['state'] );
                        exit;
                    case 401:
                        /*
                        $err_code = 'unauthorized';
                        $err_message = __( '401 Unauthorized', IGNITOR );
                        $code = 401;
                        if ( 'redirect' === $rest_behavior[$current_namespace]['todo'] ) {
                        */
                            header( 'HTTP/1.0 401 Unauthorized' );
                            exit;
                        //}
                        break;
                    case 403:
                        /*
                        $err_code = 'forbidden';
                        $err_message = __( '403 Forbidden', IGNITOR );
                        $code = 403;
                        if ( 'redirect' === $rest_behavior[$current_namespace]['todo'] ) {
                        */
                            header( 'HTTP/1.0 403 Forbidden' );
                            exit;
                        //}
                        break;
                    case 404:
                        /*
                        $err_code = 'not_found';
                        $err_message = __( '404 Not Found', IGNITOR );
                        $code = 404;
                        if ( 'redirect' === $rest_behavior[$current_namespace]['todo'] ) {
                        */
                            header( 'HTTP/1.0 404 Not Found' );
                            exit;
                        //}
                        break;
                    default:
                        $err_code = 'rest_no_route';
                        $err_message = __( 'No route matching URL and request method.', IGNITOR );
                        $code = rest_authorization_required_code();
                        break;
                }
                return new \WP_Error( $err_code, $err_message, [ 'status' => $code, ] );
            }
        } else {
            return $result;
        }
    }

    /**
     *
     */
    public function rest_endpoints( array $endpoints ): array {
        //var_dump( __METHOD__, $endpoints );
        return $endpoints;
    }

}