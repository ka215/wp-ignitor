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
     * Filters domains and URLs for resource hints of relation type.
     *
     * @access public
     * @package WordPress(core)
     * @since 4.6.0
     */
    public function wp_resource_hints( array $urls, ?string $relation_type ): array {
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
        if ( ! empty( $rest_behavior ) && ! is_admin() ) {
            $current_namespace = $request->get_route();
            $current_namespace = '/' === $current_namespace ? $current_namespace : trim( $current_namespace, '/' );
            if ( array_key_exists( $current_namespace, $rest_behavior ) ) {
                switch ( $rest_behavior[$current_namespace]['todo'] ) {
                    case 'allow_all':
                        return $result;
                    case 'allow_self':
                        if ( $this->get_remote_addr() === $_SERVER['SERVER_ADDR'] ) {
                            return $result;
                        }
                        break;
                    case 'allow_jetpack':
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
                        header( 'HTTP/1.0 401 Unauthorized' );
                        exit;
                    case 403:
                        header( 'HTTP/1.0 403 Forbidden' );
                        exit;
                    case 404:
                        header( 'HTTP/1.0 404 Not Found' );
                        exit;
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
     * Filters the array of available endpoints.
     *
     * @access public
     * @package WordPress(core)
     * @since 4.4.0
     */
    public function rest_endpoints( array $endpoints ): array {
        return $endpoints;
    }

    /**
     * Filters the authentication redirect scheme.
     *
     * @access public
     * @package WordPress(core)
     * @since 2.9.0
     */
    public function auth_redirect_scheme( string $scheme ): string {
        //if ( $user_id = wp_validate_auth_cookie( '', $scheme ) ) {
            return $scheme;
        //}

        /*
        global $wp_query;
        $wp_query->set_404();
        get_template_part( 404 );
        exit;
        */
    }

    /**
     * Filters the login URL.
     *
     * @access public
     * @package WordPress(core)
     * @since 2.8.0 -> 4.2.0
     */
    public function login_url( string $login_url, ?string $redirect, ?bool $force_reauth ): string {
        $current_new_login = $this->get_option( 'new_login' );
        if ( ! empty( $current_new_login ) ) {
            $login_url = str_replace( $this->get_wp_install_dir() .'wp-login.php', $current_new_login['path'], $login_url );
        }
        return $login_url;
    }

    /**
     * Filters the logout URL.
     *
     * @access public
     * @package WordPress(core)
     * @since 2.8.0
     */
    public function logout_url( string $logout_url, ?string $redirect ): string {
        $current_new_login = $this->get_option( 'new_login' );
        if ( ! empty( $current_new_login ) ) {
            $logout_url = str_replace( $this->get_wp_install_dir() .'wp-login.php', $current_new_login['path'], $logout_url );
        }
        return $logout_url;
    }

    /**
     * Filters the user registration URL.
     *
     * @access public
     * @package WordPress(core)
     * @since 3.6.0
     */
    public function register_url( string $register ): string {
        $current_new_login = $this->get_option( 'new_login' );
        if ( ! empty( $current_new_login ) ) {
            $register = str_replace( $this->get_wp_install_dir() .'wp-login.php', $current_new_login['path'], $register );
        }
        return $register;
    }

    /**
     * Filters the Lost Password URL.
     *
     * @access public
     * @package WordPress(core)
     * @since 2.8.0
     */
    public function lostpassword_url( string $lostpassword_url, ?string $redirect ): string {
        $current_new_login = $this->get_option( 'new_login' );
        if ( ! empty( $current_new_login ) ) {
            $lostpassword_url = str_replace( $this->get_wp_install_dir() .'wp-login.php', $current_new_login['path'], $lostpassword_url );
        }
        return $lostpassword_url;
    }

    /**
     * Filters the redirect location.
     *
     * @access public
     * @package WordPress(core)
     * @since 2.1.0
     */
    public function wp_redirect( string $location, ?int $status ): string {
        $current_new_login = $this->get_option( 'new_login' );
        if ( ! empty( $current_new_login ) ) {
            if ( strpos( $_SERVER['REQUEST_URI'], $current_new_login['path'] ) !== false ) {
                if ( ! is_user_logged_in() && $current_new_login['orig'] == 200 && strpos( $location, 'wp-login.php' ) !== false ) {
                    $location = home_url();
                }
                $location = str_replace( $this->get_wp_install_dir() .'wp-login.php', $current_new_login['path'], $location );
            }
        }
        return $location;
    }

    /**
     * Filters the site URL.
     *
     * @access public
     * @package WordPress(core)
     * @since 2.7.0
     */
    public function site_url( string $url, ?string $path, ?string $scheme, ?int $blog_id ): string {
        $current_new_login = $this->get_option( 'new_login' );
        if ( ! empty( $current_new_login ) ) {
            if ( $path === 'wp-login.php' ) {
                if ( is_user_logged_in() || strpos( $_SERVER['REQUEST_URI'], $current_new_login['path'] ) !== false ) {
                    $url = str_replace( $this->get_wp_install_dir() .'wp-login.php', $current_new_login['path'], $url );
                }
            } else
            if ( strpos( $path, 'wp-login.php' ) !== false ) {
                // If called "login_form_confirm_admin_email" action when login.
                if ( is_user_logged_in() || strpos( $_SERVER['REQUEST_URI'], $current_new_login['path'] ) !== false ) {
                    $url = str_replace( $this->get_wp_install_dir() .'wp-login.php', $current_new_login['path'], $url );
                }

            }
        }
        return $url;
    }

    /**
     * Filters the admin area URL.
     *
     * @access public
     * @package WordPress(core)
     * @since 2.8.0
     */
    public function admin_url( string $url, ?string $path, ?int $blog_id ): string {
        /*
        $current_new_login = $this->get_option( 'new_login' );
        if ( ! empty( $current_new_login ) ) {
            if ( strpos( $url, 'edit.php' ) !== false ) {
                var_dump( $_SERVER['REQUEST_URI'], $url, $path );
                exit;
                $url = home_url( $_SERVER['REQUEST_URI'] );
            }
        }
        */
        return $url;
    }

	/**
	 * Filters the interval for dismissing the admin email confirmation screen.
	 * If `0` (zero) is returned, the "Remind me later" link will not be displayed.
	 *
     * @access public
     * @package WordPress(core)
	 * @since 5.3.1
	 * @param int $interval Interval time (in seconds). Default is 3 days.
	 */
    public function admin_email_remind_interval( int $interval ): int {
        $interval = 3 * DAY_IN_SECONDS;
        // self::logger( $interval, __METHOD__ );
        // $interval = 1 * MINUTE_IN_SECONDS;
        return $interval;
    }


    /**
     * Do 'all' actions first during `apply_filters()`
     *
     * @access public
     * @package WordPress(core)
     * @since 0.71
     */
    public function debug_all_filters(): void {
        // echo '<p style="color:orange;">'. current_filter() .'</p>';
        /* * /
        switch ( current_filter() ) {
            //case 'replace_editor':
            //case 'site_url':
            //case 'secure_auth_redirect':
            //case 'auth_redirect_scheme':
            //case 'auth_redirect':
            //case 'admin_url':
            case 'wp_redirect':
            //case 'login_url':
            //default:
                ob_start();
                var_dump( $_SERVER['REQUEST_URI'], func_get_args() );
                $buffer = ob_get_contents();
                ob_get_clean();
                self::logger( $buffer );
                break;
        }
        /* */
    }

}