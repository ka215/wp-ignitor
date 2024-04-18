<?php
/**
 * Trait for utility methods
 *
 * @package WpIgnitor
 * @since 1.0.0
 */
namespace wpIgnitor;

trait utils {
    /**
     * Minify an internal CSS
     *
     * @since 1.0.0
     * @access public
     *
     * @param string $internal_css      An internal CSS that wrapped by `<style></style>`
     */
    public static function minify_css( string $internal_css ): string {
        return preg_replace( [ '@\s*([{}|:;,])\s+|\s*(\!)|/\*.+?\*\/|\R@is', '@;(})@' ], '$1$2', $internal_css );
    }

    /**
     * Minify an internal JavaScript
     *
     * @since 1.1.0
     * @access public
     *
     * @param string $internal_js      An internal JavaScript that wrapped by `<script></script>`
     */
    public static function minify_js( string $internal_js ): string {
        $replacer = [
            '/([(+=])\s*(\/(?:(?!(?<!\\\)\/).)+\/[dgimsuy]*)\s*([)+,.;])/s' => '${1}${2}${3}',
            '/(\/\*[!@].*?\*\/|[(+=]\/(?:(?!(?<!\\\)\/).)+\/[dgimsuy]*[)+,.;]|\"(?:(?!(?<!\\\)\").)*\"|\'(?:(?!(?<!\\\)\').)*\'|\`(?:(?!(?<!\\\)\`).)*\`)|\/\*.*?\*\/|\/\/[^\r\n]+[\r\n]/s' => '${1}',
            '/(\/\*[!@].*?\*\/|[(+=]\/(?:(?!(?<!\\\)\/).)+\/[dgimsuy]*[)+,.;]|\"(?:(?!(?<!\\\)\").)*\"|\'(?:(?!(?<!\\\)\').)*\'|\`(?:(?!(?<!\\\)\`).)*\`)\s*|\s+/s' => '${1} ',
            '/(\/\*[!@].*?\*\/|[(+=]\/(?:(?!(?<!\\\)\/).)+\/[dgimsuy]*[)+,.;]|\"(?:(?!(?<!\\\)\").)*\"|\'(?:(?!(?<!\\\)\').)*\'|\`(?:(?!(?<!\\\)\`).)*\`) | ([!#$%&)*+,\-.\/:;<=>?@\]^_|}~]) | ([!#$%&)*,.\/:;<=>?@\]^_|}~]|\+(?!\+)|-(?!-)|\z)|([!#$%&()*+,\-.\/:;<=>?@\[\]^_{|}~]|\A) /s' => '${1}${2}${3}${4}',
        ];
        return preg_replace( array_keys( $replacer ), array_values( $replacer ), $internal_js );
    }

    /**
     * Search for the template and include the file for this plugin
     *
     * @since 1.0.0
     * @access public
     *
     * @param string $template_name     Template file name to load. Also, omittable an extension of ".php" 
     * @param array  $args              Args passed for the template file.
     * @param string $template_path     Path to templates.
     * @param string $default_path      Default path to template files.
     */ 
    public function get_plugin_template( string $template_name, array $args = [], string $template_path = '', string $default_path = '' ) {
        if ( '.php' !== substr( $template_name, -4 ) ) {
            $template_name .= '.php';
        }

        if ( is_array( $args ) && isset( $args ) ) {
            extract( $args );
        }

        if ( ! $template_path ) {
            $template_path = 'views/';
        }

        if ( ! $default_path ) {
            $default_path = $this->paths['views_dir'];
        }

        $template = locate_template( [
            $this->paths['views_dir'] . $template_name,
            $template_name,
        ]);

        if ( ! $template ) {
            $template = $default_path . $template_name;
        }

        if ( ! file_exists( $template ) ) {
            _doing_it_wrong( __METHOD__, sprintf( __( '<code>%s</code> does not exist.', IGNITOR ), $template ), '5.5.0' );
            return;
        }

        include $template;
    }

    /**
     * Check if the rest namespace exists.
     *
     * @package WpIgnitor
     * @since 1.0.0
     */
    public function rest_namespace_exists( string $namespace ): bool {
        return in_array( $namespace, $this->rest_namespaces, true );
    }

    /**
     * Get remote hosts
     *
     * @since 1.0.0 -> 1.1.2
     * @access public
     */
    public static function get_remote_hosts(): array {
        $remote_hosts = [ php_uname( 'n' ), 'localhost' ];
        if ( ! empty( $_SERVER['HTTP_HOST'] ) ) {
            $remote_hosts[] = $_SERVER['HTTP_HOST'];
        }
        if ( ! empty( $_SERVER['REMOTE_HOST'] ) ) {
            $remote_hosts[] = $_SERVER['REMOTE_HOST'];
        }
        $remote_hosts = array_unique( $remote_hosts, SORT_STRING );
        /**
         * Filter the remote hosts retrieved from system
         * 
         * @since 1.1.2
         * @hook  filter
         */
        return apply_filters( 'wpignitor_get_remote_hosts', $remote_hosts );
    }

    /**
     * Get remote IP address
     *
     * @since 1.0.0 -> 1.1.2
     * @access public
     */
    public static function get_remote_addr(): string {
        if ( ! empty( $_SERVER['HTTP_CLIENT_IP'] ) ) {
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        } elseif ( ! empty( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ) {
            $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $ip = $_SERVER['REMOTE_ADDR'];
        }
        /**
         * Filter the remote addr retrieved from system
         * 
         * @since 1.1.2
         * @hook  filter
         */
        return apply_filters( 'wpignitor_get_remote_addr', $ip );
    }

    /**
     * Get current domain
     *
     * @since 1.0.0 -> 1.1.2
     * @access public
     */
    public static function get_fqdn(): string {
        $urlparts = parse_url( home_url() );
        $fqdn = $urlparts['host'];
        /**
         * Filter the current domain from system
         * 
         * @since 1.1.2
         * @hook  filter
         */
        return apply_filters( 'wpignitor_get_fqdn', $fqdn );
    }

    /**
     * Get the relative directory path from document root that WordPress is installed
     *
     * @since 1.0.0
     * @access public
     */
    public static function get_wp_install_dir(): string {
        $absolute_path = str_replace( DIRECTORY_SEPARATOR, '/', ABSPATH );
        $docroot_path = str_replace( DIRECTORY_SEPARATOR, '/', $_SERVER['DOCUMENT_ROOT'] );
        return ltrim( str_replace( $docroot_path, '', $absolute_path ), '/' );
    }

    /**
     * Get the wp-config.php file path
     *
     * @since 1.0.0
     * @access public
     */
    public static function get_wp_config_path() {
        $absolute_path = str_replace( DIRECTORY_SEPARATOR, '/', ABSPATH );
        if ( file_exists( $absolute_path . 'wp-config.php' ) ) {
            return $absolute_path . 'wp-config.php';
        } elseif ( file_exists( dirname( $absolute_path ) . '/wp-config.php' ) && ! file_exists( dirname( $absolute_path ) . '/wp-settings.php' ) ) {
            return dirname( $absolute_path ) . '/wp-config.php';
        } else {
            // Does not exist in a valid path.
            return false;
        }
    }

    /**
     * Get the .htaccess file path
     *
     * @since 1.0.0
     * @access public
     */
    public static function get_htaccess_path() {
        $absolute_path = str_replace( DIRECTORY_SEPARATOR, '/', ABSPATH );
        if ( file_exists( $absolute_path . '.htaccess' ) ) {
            return $absolute_path . '.htaccess';
        } elseif ( file_exists( dirname( $absolute_path ) . '/.htaccess' ) ) {
            return dirname( $absolute_path ) . '/.htaccess';
        } else {
            // Does not exist in a valid path.
            return false;
        }
    }

    /**
     * Define default basic auth user file path
     *
     * @since 1.1.0
     * @access public
     * /
    public static function default_basic_auth_user_file() {
        $docroot_path = str_replace( DIRECTORY_SEPARATOR, '/', $_SERVER['DOCUMENT_ROOT'] );
        $dist_dir     = '/.'. IGNITOR;
        $dist_file    = '/.htpasswd';
        if ( is_writable( dirname( $docroot_path ) ) ) {
            $dist_path = dirname( $docroot_path ) . $dist_dir . $dist_file;
        } else {
            $dist_path = $docroot_path . $dist_dir . $dist_file;
        }
        */
        /**
         * Filter the HTTP request arguments to give into wp_remote_request()
         *
         * @since 1.0.1
         * @hook  filter
         * /
        $dist_path = apply_filters( 'wpignitor_basic_auth_user_file_path', $dist_path );
        return $dist_path;
    }
    */

    /**
     * Define default authentication user file path
     *
     * @since 1.1.0
     * @access public
     */
    public static function default_apache_auth_user_file() {
        $docroot_path = str_replace( DIRECTORY_SEPARATOR, '/', $_SERVER['DOCUMENT_ROOT'] );
        $dist_dir     = '/.'. IGNITOR;
        // $dist_file    = '/.ht'. $this->get_option( 'apache_auth_type' ) === 'digest' ? 'digest' : 'passwd';
        $dist_file    = '/.htsecret';
        if ( is_writable( dirname( $docroot_path ) ) ) {
            $dist_path = dirname( $docroot_path ) . $dist_dir . $dist_file;
        } else {
            $dist_path = $docroot_path . $dist_dir . $dist_file;
        }
        /**
         * Filter the HTTP request arguments to give into wp_remote_request()
         *
         * @since 1.1.0
         * @hook  filter
         */
        $dist_path = apply_filters( 'wpignitor_apache_auth_user_file_path', $dist_path );
        return $dist_path;
    }

    /**
     * Get frontend HTML
     *
     * @since 1.0.0 -> 1.0.1 -> 1.1.2
     * @access public
     */
    public function get_frontend_html( string $path = '/', string $element = '', bool $to_string = false ): string {
        $get_uri = home_url( $path );
        /**
         * Filter the HTTP request URI to give into wp_remote_request()
         * 
         * @since 1.1.2
         * @hook  filter
         */
        $get_uri = apply_filters( 'wpignitor_remote_request_uri', $get_uri, $path );
        $result = '';
        /**
         * Filter the HTTP request arguments to give into wp_remote_request()
         *
         * @since 1.0.1
         * @hook  filter
         */
        $args = apply_filters( 'wpignitor_remote_request_args', [], $get_uri );
        $response = wp_remote_request( $get_uri, $args );
        $raw_html = wp_remote_retrieve_body( $response );
        /**
         * Filter the retrieved HTML source
         *
         * @since 1.0.1
         * @hook  filter
         */
        $raw_html = apply_filters( 'wpignitor_remote_retrieve_html', $raw_html, $get_uri, $response );
        if ( ! $raw_html ) {
            if ( is_wp_error( $response ) ) {
                return $response->get_error_message();
            }
            if ( $this->debug ) {
                self::logger( __( 'Failed to get the HTML source code by wp_remote_request()', IGNITOR ) );
            }
            return __( 'Could not get the HTML source.', IGNITOR );
        } else {
            $doc = new \DOMDocument();
            libxml_use_internal_errors( true );
            $doc->loadHTML( $raw_html );
            libxml_clear_errors();
            if ( ! empty( $element ) ) {
                $elem_html = $doc->getElementsByTagName( $element );
                if ( $elem_html->length > 0 ) {
                    $result = $doc->saveHTML( $elem_html->item(0) );
                }
            }
            
            if ( $to_string ) {
                $result = preg_replace( '/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F]/', '', $result );
                $result = preg_replace( "/\r\n|\r|\n/", "\n", $result );
                $result = preg_replace( '/(>)(<[^\/])/', "$1\n$2", $result );
                $result = preg_replace( '/<\/(head|body|html)>/', "\n</$1>", $result );
                $result = preg_replace( "/^\n/m", '', $result );
            }
            return $result;
        }
    }

    /**
     * Check if wp-config.php is placed best path.
     *
     * @since 1.0.0
     * @access public
     */
    public function is_best_wp_config_path(): string {
        $current_path = $this->get_wp_config_path();
        $check_path = $this->paths['docroot'] .'/'. $this->get_wp_install_dir();
        if ( strpos( $current_path, $check_path ) !== false ) {
            // No secure because it's same the installed path.
            return 'no-secure';
        } else
        if ( strpos( $current_path, $this->paths['docroot'] ) !== false ) {
            // Better because it's upper the installed path.
            return 'better';
        } else {
            // Best because it's upper the document root.
            return 'best';
        }
    }

    /**
     * Check if your PHP environment supports valid Phar class.
     *
     * @since 1.0.0 -> 1.1.1
     * @access public
     */
    public static function is_valid_phar(): bool {
        $version = \Phar::apiVersion();
        if ( ! version_compare( $version, '1.0.0', '>=' ) ) {
            if ( IGNITOR_DEBUG ) {
                self::logger( sprintf( __( 'The current PHP environment does not support Phar class (%s).', IGNITOR ), $version ) );
            }
            return false;
        } else {
            return true;
        }
    }

    /**
     * Create tarball with zlib via PharData
     *
     * @since 1.0.0
     * @access public
     */
    public function compressTarball( string $target_path ): bool {
        try {
            $tar_path = ABSPATH . IGNITOR . '_temp.tar';
            $phar = new \PharData( $tar_path );
            if ( is_dir( $target_path ) ) {
                /**
                 * Filter the regex of target path for moving the installation path by the wp-ignitor
                 *
                 * @since 1.0.0
                 * @hook  filter
                 */
                $filter_regex = apply_filters( 'wpignitor_filter_regex', '#^(?!.*(node_modules/|\.git/|\.cache/)).*$#', $target_path );
                $phar_map = $phar->buildFromDirectory( $target_path, $filter_regex );
            } elseif ( ! is_link( $target_path ) ) {
                $phar->addFile( $target_path );
                $phar_map = [ $target_path ];
            }
            /**
             * Filter files to exclude when moving the installation path by the wp-ignitor
             *
             * @since 1.0.0
             * @hook  filter
             */
            $excludes = apply_filters( 'wpignitor_exclude_files_to_move', [], $target_path );
            if ( ! empty( $excludes ) && isset( $phar_map ) ) {
                foreach ( $excludes as $_file ) {
                    if ( array_key_exists( $_file, $phar_map ) ) {
                        $phar->delete( $_file );
                        unset( $phar_map[$_file] );
                    }
                }
            }
            $this->compress_file_map = $phar_map;
            return true;
        } catch ( Exception $e ) {
            $this->errors->add( 'failure_to_compress_phar', $e->getMessage() );
            if ( $this->debug ) {
                self::logger( $e->getMessage() );
            }
            return false;
        }
    }

    /**
     * Extract all files in tarball with decompressing
     *
     * @since 1.0.0
     * @access public
     */
    public function extractTarball( string $archive_path, string $target_pathto ): bool {
        $message = '';
        if ( file_exists( $archive_path ) ) {
            try {
                $phar = new \PharData( $archive_path );
                $fp = fopen( $phar->getPath(), 'r' );
                $phar->extractTo( $target_pathto, null, true );
                unset( $phar );
                fclose( $fp );
                \phar::unlinkArchive( $archive_path );
                return true;
            } catch ( Exception $e ) {
                $this->errors->add( 'failure_to_extract_phar', $e->getMessage() );
                if ( $this->debug ) {
                    self::logger( $e->getMessage() );
                }
                return false;
            }
        } else {
            $message = __( 'The specified file does not exist.', IGNITOR );
            $this->errors->add( 'file_does_not_exist', $message, $archive_path );
            if ( $this->debug ) {
                self::logger( $message );
            }
            return false;
        }
    }

    /**
     * Recursively remove there under the specified directory
     *
     * @since 1.0.0
     * @access public
     */
    public static function remove_dir_recursive( string $base_dir, bool $forced = false ) {
        $base_dir = strpos( $base_dir, $_SERVER['DOCUMENT_ROOT'] ) !== 0 ? $_SERVER['DOCUMENT_ROOT'] .'/'. ltrim( $base_dir, '/\\' ) : $base_dir;
        if ( file_exists( $base_dir ) && is_dir( $base_dir ) && ! is_link( $base_dir ) ) {
            array_map( 'self::remove_dir_recursive', glob( $base_dir .'/*', GLOB_ONLYDIR ) );
            if ( $forced ) {
                array_map( 'unlink', glob( $base_dir .'/*' ) );
            }
            @rmdir( $base_dir );
        }
    }

    /**
     * Generate stack setting for .htaccess
     *
     * @since 1.0.0
     * @access public
     */
    public function generate_htaccess( string $subdir = '' ): string {
        $allowed_sources = $this->get_option( 'allow_sources' );
        $allowed_hosts = $this->get_remote_hosts();
        if ( $allowed_sources && is_array( $allowed_sources ) && array_key_exists( 'hosts', $allowed_sources ) && ! empty( $allowed_sources['hosts'] ) ) {
            $allowed_hosts = array_merge( $allowed_hosts, $allowed_sources['hosts'] );
        }
        $allowed_addrs = [ $this->get_remote_addr() ];
        if ( $allowed_sources && is_array( $allowed_sources ) && array_key_exists( 'addrs', $allowed_sources ) && ! empty( $allowed_sources['addrs'] ) ) {
            $allowed_addrs = array_merge( $allowed_addrs, $allowed_sources['addrs'] );
        }
        $allowed_referers = [ 'https?://' . $this->get_fqdn() ];
        if ( $allowed_sources && is_array( $allowed_sources ) && array_key_exists( 'referers', $allowed_sources ) && ! empty( $allowed_sources['referers'] ) ) {
            $allowed_referers = array_merge( $allowed_referers, $allowed_sources['referers'] );
        }
        $_install_dir = preg_quote( empty( $subdir ) ? $this->get_wp_install_dir() : $subdir );
        $advanced_htaccess_options = $this->get_option( 'advanced_htaccess' );
        // self::logger( [ $allowed_hosts, $allowed_addrs, $allowed_referers, $_install_dir, $subdir, $advanced_htaccess_options ], __METHOD__ );
        $_section_number = 1;
        $_stack = [];
        array_unshift( $_stack, '# BEGIN WP Ignitor Rules', '<IfModule mod_rewrite.c>', 'RewriteEngine On', 'RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]' );
        // Set Environment Section
        $_stack[] = '# Environment';
        $_stack[] = '# - Definition of connection sources to allow.';
        $_stack[] = '# - Set "is_allow" to IP and host that allow access:';
        foreach ( $allowed_hosts as $_host ) {
            $_stack[] = 'SetEnvIf Remote_Host "^'. preg_quote( $_host ) .'$" is_allow=true';
        }
        foreach ( $allowed_addrs as $_addr ) {
            $_stack[] = 'SetEnvIf Remote_Addr "^'. preg_quote( $_addr ) .'" is_allow=true';
        }
        $_stack[] = '# - Set "is_allow_referer" to referer URL that allow access:';
        foreach ( $allowed_referers as $_referer ) {
            $_stack[] = 'SetEnvIf Referer "^'. str_replace( '\?', '?', preg_quote( $_referer, '/' ) ) .'" is_allow_referer=true';
        }
        // Static resources rule
        $_stack[] = "# {$_section_number}.";
        $_stack[] = '# - Static resources return a fixed 404 response regardless of the connection source.';
        $_stack[] = 'RewriteRule "(license\.txt|readme\.html)" - [R=404,L]';
        $_section_number++;
        if ( false ) {
            // Protects "wp-admin/" directory
            $_stack[] = "# {$_section_number}.";
            $_stack[] = '# - "wp-admin/" and "wp-login.php" under the document root do not redirect and return';
            $_stack[] = '# - 404 response.';
            $_stack[] = 'RewriteRule "^wp-admin\/(.*)$" - [R=404,L]';
            $_stack[] = 'RewriteRule "^wp-login\.php(.*)$" - [R=404,L]';
            $_section_number++;
        }
        // Protects "wp-config.php" and "wp-cron.php"
        $_stack[] = "# {$_section_number}.";
        $_stack[] = '# - "wp-config.php" and "wp-cron.php" returns 404 response if the connection source is';
        $_stack[] = '# - not the allowed hosts and addresses or the allowed referrers.';
        $_stack[] = 'RewriteCond %{ENV:is_allow} !^true$ [OR]';
        $_stack[] = 'RewriteCond %{ENV:is_allow_referer} !^true$';
        $_stack[] = 'RewriteRule "wp-config\.php$" - [R=404,L]';
        $_stack[] = 'RewriteCond %{ENV:is_allow_referer} !^true$';
        $_stack[] = 'RewriteRule "wp-cron\.php$" - [R=404,L]';
        $_section_number++;
        if ( isset( $advanced_htaccess_options['prevent_php_files'] ) && $advanced_htaccess_options['prevent_php_files'] ) {
            // Restrict access to core PHP files
            $_stack[] = "# {$_section_number}.";
            $_stack[] = '# - Returns 404 response when access to the .php files (exclude the specific files such as';
            $_stack[] = '# - "wp-login.php" or "index.php" or several under "wp-admin/") under the installation';
            $_stack[] = '# - directory if the disallowed connection sources.';
            $_stack[] = 'RewriteCond %{ENV:is_allow} !^true$';
            $_stack[] = 'RewriteCond %{ENV:is_allow_referer} !^true$';
            $_stack[] = 'RewriteCond %{REQUEST_FILENAME} -f';
            $_stack[] = 'RewriteCond %{REQUEST_FILENAME} "!(wp-login|index)\.php$"';
            $_stack[] = 'RewriteCond %{REQUEST_FILENAME} "!wp-admin/(options(|-general)|profile)\.php$"';
            $_stack[] = 'RewriteRule "^'. $_install_dir .'.*?\.php$" - [R=404,L]';
            $_section_number++;
        }
        if ( false ) {
            // Protects directories under the installed path
            $_stack[] = "# {$_section_number}.";
            $_stack[] = '# - Access to each directory directly under the installation directory returns 404';
            $_stack[] = '# - response if the connection source is other than the allowed hosts, addresses or';
            $_stack[] = '# - referrers.';
            $_stack[] = 'RewriteCond %{ENV:is_allow} !^true$';
            $_stack[] = 'RewriteCond %{ENV:is_allow_referer} !^true$';
            $_stack[] = 'RewriteCond %{REQUEST_FILENAME} !-f';
            $_stack[] = 'RewriteCond %{REQUEST_FILENAME} -d';
            $_stack[] = 'RewriteRule "^'. $_install_dir .'.*?/?(.*)$" - [R=404,L]';
            $_section_number++;
        }
        if ( isset( $advanced_htaccess_options['prevent_xmlrpc'] ) && $advanced_htaccess_options['prevent_xmlrpc'] ) {
            // Allows access to "xmlrpc.php" from jetpack only
            $_stack[] = "# {$_section_number}.";
            $_stack[] = '# - An access to "xmlrpc.php" only allow access that has user agent of "Jetpack", and';
            $_stack[] = '# - other accesses redirect to "0.0.0.0" to avoid load.';
            $_stack[] = 'RewriteCond %{HTTP_USER_AGENT} !jetpack';
            $_stack[] = 'RewriteRule "^xmlrpc\.php$" "\/\/0\.0\.0\.0\/" [R=301,L]';
            $_section_number++;
        }
        if ( isset( $advanced_htaccess_options['uniform_login'] ) && $advanced_htaccess_options['uniform_login'] ) {
            // Uniformly prevents access to "wp-login.php"
            $_stack[] = "# {$_section_number}.";
            $_stack[] = '# - Access to "wp-login.php" returns a uniform 404 response regardless of the connection';
            $_stack[] = '# - source.';
            $_stack[] = 'RewriteRule "wp-login\.php(.*)$" - [R=404,L]';
            $_section_number++;
        }
        if ( isset( $advanced_htaccess_options['new_login'] ) && $advanced_htaccess_options['new_login'] ) {
            // Rewrite access to wp-login.php to the new login path and apply the behavior that you are specified to an old login path.
            $current_new_login = $this->get_option( 'new_login' );
            if ( false !== $current_new_login ) {
                $_stack[] = "# {$_section_number}.";
                $_stack[] = '# - Rewrite access to wp-login.php to the new login path and apply the behavior that you';
                $_stack[] = '# - are specified to an old login path.';
                $_stack[] = 'RewriteCond %{REQUEST_URI} ^/'. $current_new_login['path'];
                $_stack[] = 'RewriteRule ^'. $current_new_login['path'] .'(.*)$ /'. $_install_dir .'wp-content/plugins/wp-ignitor/views/entrance\.php$1 [L]';
                switch ( $current_new_login['orig'] ) {
                    case 301:
                        $_stack[] = 'RewriteRule "wp-login\.php(.*)$" /'. $current_new_login['path'] .' [R=301,L]';
                        break;
                    case 200:
                        //$_stack[] = 'RewriteRule "wp-login\.php(.*)$" /'. $_install_dir .'index.php [R=301,L]';
                        $_stack[] = 'RewriteRule "wp-login\.php(.*)$" / [L]';
                        break;
                    default:
                        $_stack[] = 'RewriteRule "wp-login\.php(.*)$" - [R='. $current_new_login['orig'] .',L]';
                        break;
                }
                $_section_number++;
            }
        }
        if ( isset( $advanced_htaccess_options['avoid_author'] ) && $advanced_htaccess_options['avoid_author'] ) {
            // Avoid the discovery of an author's ID
            $_stack[] = "# {$_section_number}.";
            $_stack[] = "# - Avoid the discovery of an author's ID.";
            $_stack[] = 'RewriteCond %{QUERY_STRING} ^author=([0-9]*) [OR]';
            $_stack[] = 'RewriteCond %{REQUEST_URI} ^/author/';
            $_stack[] = 'RewriteRule .* - [F]';
            $_section_number++;
        }
        if ( ! empty( $_install_dir ) && $_install_dir !== '\\/' ) {
            // Make WordPress installed in the subdirectory follow the document root
            global $wp_rewrite;
            if ( got_mod_rewrite() ) {
                $_stack[] = "# {$_section_number}.";
                $_stack[] = '# - Override WordPress rewrite settings if the installation path is a subdirectory';
                $_stack[] = '# - under the document root.';
                /*
                $_stack[] = '# - See: https://wordpress.org/support/article/giving-wordpress-its-own-directory/';
                $_stack[] = 'RewriteRule ^(|/)$ /'. $_install_dir .'index\.php [L]';
                $_stack[] = 'RewriteBase /';
                $_stack[] = 'RewriteRule ^'. $_install_dir .'index\.php$ - [L]';
                $_stack[] = 'RewriteCond %{REQUEST_FILENAME} !-f';
                $_stack[] = 'RewriteCond %{REQUEST_FILENAME} !-d';
                $_stack[] = 'RewriteRule . /'. $_install_dir .'index.php [L]';
                */
                /*
                $_stack[] = 'RewriteCond %{HTTP_HOST} ^'. $_SERVER['HTTP_HOST'] .'$';
                $_stack[] = 'RewriteCond %{REQUEST_URI} !^/'. $_install_dir;
                $_stack[] = 'RewriteCond %{REQUEST_FILENAME} !-f';
                $_stack[] = 'RewriteCond %{REQUEST_FILENAME} !-d';
                $_stack[] = 'RewriteRule ^(.*)$ /'. $_install_dir .'$1';
                */
                $_stack[] = 'RewriteCond %{HTTP_HOST} ^'. $_SERVER['HTTP_HOST'] .'$';
                $_stack[] = 'RewriteRule ^(/)?$ '. $_install_dir .'index.php [L]';
                $_stack[] = '# - Enable routes of WP REST API.';
                $_stack[] = 'RewriteBase /'. $_install_dir;
                $_stack[] = 'RewriteRule ^index\.php$ - [L]';
                $_stack[] = 'RewriteCond %{REQUEST_FILENAME} !-f';
                $_stack[] = 'RewriteCond %{REQUEST_FILENAME} !-d';
                $_stack[] = 'RewriteRule . /'. $_install_dir .'index.php [L]';
            }
        }
        $_stack[] = "</IfModule>";
        if ( isset( $advanced_htaccess_options['apache_auth'] ) && $advanced_htaccess_options['apache_auth'] ) {
            if ( ! empty( $advanced_htaccess_options['apache_auth_user_file'] ) ) {
                if ( isset( $advanced_htaccess_options['apache_auth_type'] ) && 'digest' === $advanced_htaccess_options['apache_auth_type'] ) {
                    $_stack[] = '# AuthDigestAuthoritative Directive';
                    $_stack[] = '<IfModule mod_auth_digest.c>';
                    $_stack[] = 'AuthType Digest';
                    $_stack[] = 'AuthName "'. __( 'Restricted Area', IGNITOR ) .'"';
                    $_stack[] = 'AuthDigestProvider file';
                } else {
                    $_stack[] = '# AuthBasicAuthoritative Directive';
                    $_stack[] = '<IfModule mod_auth_basic.c>';
                    $_stack[] = 'AuthType Basic';
                    $_stack[] = 'AuthName "'. __( 'Restricted Area', IGNITOR ) .'"';
                    $_stack[] = 'AuthBasicProvider file';
                }
                $_stack[] = 'AuthUserfile '. $advanced_htaccess_options['apache_auth_user_file'];
                $_stack[] = 'AuthGroupfile /dev/null';
                $_stack[] = 'require valid-user';
                $_stack[] = '</IfModule>';
            }
        }
        array_push( $_stack, '', '# END WP Ignitor Rules' );
        return implode( "\n", $_stack );
    }

    /**
     * Inserts an array of strings into a file (.htaccess), placing it between BEGIN and END markers.
     * Replaces existing marked info. Retains surrounding data. Creates file if none exists.
     *
     * @since 1.0.0
     * @access public
     * @see /wp-admin/includes/misc.php: insert_with_markers()
     *
     * @param string       $filename  Filename to alter.
     * @param string       $marker    The marker to alter.
     * @param array|string $insertion The new content to insert.
     * @return bool True on write success, false on failure.
     */
    public static function wpignitor_insert_with_markers( string $filename, string $marker, $insertion ): bool {
        if ( ! file_exists( $filename ) ) {
            if ( ! is_writable( dirname( $filename ) ) ) {
                return false;
            }
             if ( ! touch( $filename ) ) {
                return false;
            }
             // Make sure the file is created with a minimum set of permissions.
            $perms = fileperms( $filename );
            if ( $perms ) {
                chmod( $filename, $perms | 0644 );
            }
        } elseif ( ! is_writable( $filename ) ) {
            return false;
        }
        if ( ! is_array( $insertion ) ) {
            $insertion = explode( "\n", $insertion );
        }
        $start_marker  = "# BEGIN {$marker}";
        $end_marker    = "# END {$marker}";
        $wp_marker     = "# BEGIN WordPress";
        $wp_end_marker = "# END WordPress";
        foreach ( $insertion as $i => $line ) {
            if ( false !== strpos( $line, $start_marker ) || false !== strpos( $line, $end_marker ) ) {
                unset( $insertion[$i] );
            }
            /**
             * Filter for shortening by omitting detailed comments.
             *
             * @since 1.0.0
             * @hook  filter
             */
            $omit_htaccess_comments = apply_filters( 'wpignitor_omit_comments', false );
            if ( $omit_htaccess_comments ) {
                if ( preg_match( '/^# - .*/', $line ) === 1 ) {
                    unset( $insertion[$i] );
                }
            }
        }
        $fp = fopen( $filename, 'r+' );
        if ( ! $fp ) {
            return false;
        }
        // Attempt to get a lock. If the filesystem supports locking, this will block until the lock is acquired.
        flock( $fp, LOCK_EX );
        $lines = [];
        while ( ! feof( $fp ) ) {
            $lines[] = rtrim( fgets( $fp ), "\r\n" );
        }
        // Split out the existing file into the preceding lines, and those that appear after the marker.
        $pre_lines           = [];
        $post_lines          = [];
        $existing_lines      = [];
        $before_wp_lines     = [];
        $hereafter_wp_lines  = [];
        $found_marker        = false;
        $found_end_marker    = false;
        $found_wp_marker     = false;
        $found_wp_end_marker = false;
        foreach ( $lines as $line ) {
            if ( ! $found_marker && false !== strpos( $line, $start_marker ) ) {
                $found_marker = true;
                continue;
            } elseif ( ! $found_end_marker && false !== strpos( $line, $end_marker ) ) {
                $found_end_marker = true;
                continue;
            }
            if ( ! $found_marker ) {
                if ( ! $found_wp_marker && false !== strpos( $line, $wp_marker ) ) {
                    $found_wp_marker = true;
                } elseif ( ! $found_wp_end_marker && false !== strpos( $line, $wp_end_marker ) ) {
                    $found_wp_end_marker = true;
                }
                $pre_lines[] = $line;
            } elseif ( $found_marker && $found_end_marker ) {
                $post_lines[] = $line;
            } else {
                $existing_lines[] = $line;
            }
        }
        if ( $found_wp_marker && $found_wp_end_marker ) {
            $found_wp_marker     = false;
            foreach ( $pre_lines as $line ) {
                if ( ! $found_wp_marker && false !== strpos( $line, $wp_marker ) ) {
                    $found_wp_marker = true;
                }
                if ( $found_wp_marker ) {
                    $hereafter_wp_lines[] = $line;
                } else {
                    $before_wp_lines[] = $line;
                }
            }
        }
        if ( ! empty( $before_wp_lines ) ) {
            $pre_lines = $before_wp_lines;
        }
        if ( ! empty( $hereafter_wp_lines ) ) {
            $post_lines = array_merge( $hereafter_wp_lines, $post_lines );
        }
        // Check to see if there was a change.
        if ( $existing_lines === $insertion ) {
            flock( $fp, LOCK_UN );
            fclose( $fp );
            return true;
        }
        // Generate the new file data.
        if ( empty( $existing_lines ) ) {
            $end_markers = [ $end_marker, '' ];
        } else {
            $end_markers = [ $end_marker ];
        }
        $new_file_data = implode(
            "\n",
            array_merge(
                $pre_lines,
                [ $start_marker ],
                $insertion,
                $end_markers,
                $post_lines
            )
        );
        // Replace to all LF
        $new_file_data = strtr( $new_file_data, [ "\r\n" => "\n", "\r" => "\n" ] );
        // Write to the start of the file, and truncate it to that length.
        fseek( $fp, 0 );
        $bytes = fwrite( $fp, $new_file_data );
        if ( $bytes ) {
            ftruncate( $fp, ftell( $fp ) );
        }
        fflush( $fp );
        flock( $fp, LOCK_UN );
        fclose( $fp );
        return (bool) $bytes;
    }

    /**
     * Remove only the rules added by this plugin from ".htaccess".
     *
     * @since 1.0.0
     * @access public
     */
    public static function restore_htaccess(): bool {
        $htaccess_file = self::get_htaccess_path();
        return self::wpignitor_insert_with_markers( $htaccess_file, 'WP Ignitor Rules', '' );
    }

    /**
     * Inserts an array of strings into a file (wp-config.php), placing it between BEGIN and END markers.
     * Replaces existing marked info. Retains surrounding data.
     *
     * @since 1.0.0
     * @access public
     *
     * @param string       $filepath  Filename to alter.
     * @param string       $marker    The marker to alter.
     * @param array|string $insertion The new content to insert.
     * @return bool True on write success, false on failure.
     */
    public static function wpconfig_insert_with_markers( string $filepath, string $marker, $insertion ): bool {
        if ( ! file_exists( $filepath ) || ! is_writable( $filepath ) ) {
            return false;
        }
        if ( ! is_array( $insertion ) ) {
            $insertion = explode( "\n", $insertion );
        }
        $start_marker  = "# BEGIN {$marker}";
        $end_marker    = "# END {$marker}";
        $wp_markers    = [ "/* That's all, stop editing! Happy publishing. */", '/** Absolute path to the WordPress directory.', "if ( ! defined( 'ABSPATH' ) ) {", "'ABSPATH'" ];
        foreach ( $insertion as $i => $line ) {
            if ( false !== strpos( $line, $start_marker ) || false !== strpos( $line, $end_marker ) ) {
                unset( $insertion[$i] );
            }
        }
        $fp = fopen( $filepath, 'r+' );
        if ( ! $fp ) {
            return false;
        }
        // Attempt to get a lock. If the filesystem supports locking, this will block until the lock is acquired.
        flock( $fp, LOCK_EX );
        $lines = [];
        while ( ! feof( $fp ) ) {
            $lines[] = rtrim( fgets( $fp ), "\r\n" );
        }
        // Split out the existing file into the preceding lines, and those that appear after the marker.
        $pre_lines           = [];
        $post_lines          = [];
        $existing_lines      = [];
        $before_wp_lines     = [];
        $hereafter_wp_lines  = [];
        $found_marker        = false;
        $found_end_marker    = false;
        $found_wp_marker     = false;
        foreach ( $lines as $line ) {
            if ( ! $found_marker && false !== strpos( $line, $start_marker ) ) {
                $found_marker = true;
                continue;
            } elseif ( ! $found_end_marker && false !== strpos( $line, $end_marker ) ) {
                $found_end_marker = true;
                continue;
            }
            if ( ! $found_marker ) {
                if ( ! $found_wp_marker ) {
                    foreach ( $wp_markers as $wp_marker ) {
                        if ( false !== strpos( $line, $wp_marker ) ) {
                            $found_wp_marker = true;
                            break;
                        }
                    }
                }
                $pre_lines[] = $line;
            } elseif ( $found_marker && $found_end_marker ) {
                $post_lines[] = $line;
            } else {
                $existing_lines[] = $line;
            }
        }
        if ( $found_wp_marker ) {
            $found_wp_marker     = false;
            foreach ( $pre_lines as $line ) {
                if ( ! $found_wp_marker ) {
                    foreach ( $wp_markers as $wp_marker ) {
                        if ( false !== strpos( $line, $wp_marker ) ) {
                            $found_wp_marker = true;
                            break;
                        }
                    }
                }
                if ( $found_wp_marker ) {
                    $hereafter_wp_lines[] = $line;
                } else {
                    $before_wp_lines[] = $line;
                }
            }
        }
        if ( ! empty( $before_wp_lines ) ) {
            $pre_lines = $before_wp_lines;
        }
        if ( ! empty( $hereafter_wp_lines ) ) {
            $post_lines = array_merge( $hereafter_wp_lines, $post_lines );
        }
        // Check to see if there was a change.
        if ( $existing_lines === $insertion ) {
            flock( $fp, LOCK_UN );
            fclose( $fp );
            return true;
        }
        // Generate the new file data.
        if ( empty( $existing_lines ) ) {
            $end_markers = [ $end_marker, '' ];
        } else {
            $end_markers = [ $end_marker ];
        }
        $new_file_data = implode(
            "\n",
            array_merge(
                $pre_lines,
                [ $start_marker ],
                $insertion,
                $end_markers,
                $post_lines
            )
        );
        // Replace to all LF
        $new_file_data = strtr( $new_file_data, [ "\r\n" => "\n", "\r" => "\n" ] );
        // Write to the start of the file, and truncate it to that length.
        fseek( $fp, 0 );
        $bytes = fwrite( $fp, $new_file_data );
        if ( $bytes ) {
            ftruncate( $fp, ftell( $fp ) );
        }
        fflush( $fp );
        flock( $fp, LOCK_UN );
        fclose( $fp );
        return (bool) $bytes;
    }

    /**
     * Remove only the rules added by this plugin from "wp-config.php".
     *
     * @since 1.0.0
     * @access public
     */
    public static function restore_wpconfig(): bool {
        $wpconfig_path = self::get_wp_config_path();
        return self::wpconfig_insert_with_markers( $wpconfig_path, 'WP Ignitor', '' );
    }

    /**
     * Running this script will remove all the settings saved by the WP Ignitor from the database and
     * the settings written by the plugin from the contents of ".htaccess" and "wp-config.php".
     *
     * @since 1.0.3
     * @access public
     */
    public function emergency_recovery(): void {
        $this->remove_auth_user_file();
        $this->clear_all_options( true );
        $this->restore_htaccess();
        $this->restore_wpconfig();
        $this->emergency_recovery_done = true;
    }

    /**
     * Save the auth user file for basic authentication
     *
     * @since 1.1.0
     * @access public
     */
    public function save_auth_user_file( string $file_path, string $auth_type ): bool {
        $result = false;
        $message = '';
        $auth_users_content = $this->generate_auth_users_content( $auth_type );
        if ( ! empty( $file_path ) && file_exists( $file_path ) && is_writable( $file_path ) ) {
            // Update file
            $result = file_put_contents( $file_path, $auth_users_content, LOCK_EX ) === strlen( $auth_users_content );
            if ( $result ) {
                @chmod( $file_path, '0644' );
                $message = __( 'Updated the apache auth user files.', IGNITOR );
            } else {
                $message = __( 'Not have permission to update the apache auth user file.', IGNITOR );
            }
        } else
        if ( ! empty( $file_path ) ) {
            // Create file
            if ( ! is_dir( dirname( $file_path ) ) ) {
                @mkdir( dirname( $file_path ), '0750', true );
            }
            if ( is_writable( dirname( $file_path ) ) ) {
                $result = file_put_contents( $file_path, $auth_users_content, LOCK_EX ) === strlen( $auth_users_content );
                if ( $result ) {
                    @chmod( $file_path, '0644' );
                    $message = __( 'Created new apache auth user file.', IGNITOR );
                } else {
                    $message = __( 'Failed to save the apache auth user file.', IGNITOR );
                }
            } else {
                $message = __( 'Not have permission to create the apache auth user file.', IGNITOR );
            }
        } else {
            $message = __( 'Failed to save the apache auth user file.', IGNITOR );
        }
        if ( $this->debug && ! empty( $message ) ) {        
            self::logger( $message );
        }
        return $result;
    }

    /**
     * Remove the auth user file
     *
     * @since 1.1.0
     * @access public
     */
    public function remove_auth_user_file(): bool {
        $auth_user_file_path = $this->get_option( 'apache_auth_user_file' ) ?: $this->default_apache_auth_user_file();
        $result = false;
        $message = '';
        if ( file_exists( $auth_user_file_path ) && is_file( $auth_user_file_path ) ) {
            if ( @unlink( $auth_user_file_path ) ) {
                if ( ! $this->dir_is_empty( dirname( $auth_user_file_path ) ) || ! @rmdir( dirname( $auth_user_file_path ) ) ) {
                    $message = sprintf( __( 'Removed the %s file, but could not remove the parent directory.', IGNITOR ), $auth_user_file_path );
                }
                $result = true;
            } else {
                $message = sprintf( __( 'The %s file could not be removed.', IGNITOR ), $auth_user_file_path );
            }
        } else {
            $message = sprintf( __( 'The %s file does not exist.', IGNITOR ), $auth_user_file_path );
        }
        if ( $this->debug && ! empty( $message ) ) {        
            self::logger( $message );
        }
        return $result;
    }

    /**
     * Whether the specified directory is empty or not
     *
     * @since 1.1.0
     * @access public
     */
    public static function dir_is_empty( string $dir_path ): bool {
        if ( ! file_exists( $dir_path ) || ! is_dir( $dir_path ) ) {
            return false;
        }
        $handle = opendir( $dir_path );
        while ( false !== ( $entry = readdir( $handle ) ) ) {
            if ( $entry !== '.' && $entry !== '..' ) {
                closedir( $handle );
                return false;
            }
        }
        closedir( $handle );
        return true;
    }

    /**
     * Generate content for the basic auth user file (as .htpasswd)
     *
     * @since 1.1.0
     * @access public
     */
    public function generate_auth_users_content( string $auth_type ) {
        $apache_version = $this->get_apache_version();
        array_walk( $this->options['apache_auth_users'], function( $_passwd, $_user ) use ( &$lines, &$apache_version, &$auth_type ) {
            if ( 'digest' === $auth_type ) {
                $realm = __( 'Restricted Area', IGNITOR );
                $lines[] = sprintf( '%s:%s:%s', $_user, $realm, md5( sprintf( '%s:%s:%s', $_user, $realm, $_passwd ) ) );
            } else {
                if ( ! $apache_version ) {
                    $password = $this->crypt_apr1_md5( $_passwd );
                } else {
                    if ( version_compare( $apache_version, '2.2.18', '>=' ) ) {
                        $password = $this->crypt_apr1_md5( $_passwd );
                    } else {
                        $password = $this->crypt_md5( $_passwd );
                    }
                }
                $lines[] = $_user .':'. $password;
            }
        } );
        return implode( "\n", $lines ) . "\n";
    }

    /**
     * Get apache version
     *
     * @since 1.1.0
     * @access public
     */
    public function get_apache_version() {
        $command = 'apachectl -v';
        $regex = '/Apache\/(\d{1,2}\.\d{1,2}\.\d{1,2})/';
        switch ( true ) {
            case preg_match( $regex, getenv( 'SERVER_SOFTWARE' ), $matches ):
            case ( function_exists( 'apache_get_version' ) && preg_match( $regex, apache_get_version(), $matches ) ):
            case preg_match( $regex, shell_exec( $command ), $matches ):
                return $matches[1];
            default:
                return false;
        }
    }

    /**
     * Generate hash by using crypt function
     * This is the default algorithm used by Apache 2.2.17 and older
     * This method is same as using the command: `htpasswd -d /path/to/.htpasswd user`
     *
     * @since 1.1.0
     * @access public
     */
    public static function crypt_md5( string $origin ): string {
        return crypt( $origin, base64_encode( $origin ) );
    }

    /**
     * Generate hash by APR1-MD5 encryption method
     * This is the default method since Apache 2.2.18
     * This method is same as using the command: `htpasswd -m /path/to/.htpasswd user`
     *
     * @since 1.1.0
     * @access public
     */
    public static function crypt_apr1_md5( string $origin ): string {
        $salt = substr( str_shuffle( 'abcdefghijklmnopqrstuvwxyz0123456789' ), 0, 8 );
        $len  = strlen( $origin );
        $text = $origin .'$apr1$'. $salt;
        $bin  = pack( 'H32', md5( $origin . $salt . $origin ) );
        for ( $i = $len; $i > 0; $i -= 16 ) {
            $text .= substr( $bin, 0, min( 16, $i ) );
        }
        for ( $i = $len; $i > 0; $i >>= 1 ) {
            $text .= ( $i & 1 ) ? chr( 0 ) : $origin[0];
        }
        $bin = pack( 'H32', md5( $text ) );
        for ( $i = 0; $i < 1000; $i++ ) {
            $new = ( $i & 1 ) ? $origin : $bin;
            if ( $i % 3 ) $new .= $salt;
            if ( $i % 7 ) $new .= $origin;
            $new .= ( $i & 1 ) ? $bin : $origin;
            $bin = pack( 'H32', md5( $new ) );
        }
        $tmp = '';
        for ( $i = 0; $i < 5; $i++ ) {
            $k = $i + 6;
            $j = $i + 12;
            if ( $j == 16 ) $j = 5;
            $tmp = $bin[$i] . $bin[$k] . $bin[$j] . $tmp;
        }
        $tmp = chr( 0 ) . chr( 0 ) . $bin[11] . $tmp;
        $tmp = strtr( strrev( substr( base64_encode( $tmp ), 2 ) ),
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            './0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        );
        return '$'.'apr1'.'$'. $salt .'$'. $tmp;
    }

    /**
     * Logger for this plugin only
     *
     * @since 1.0.0 -> 1.1.2
     * @access public
     *
     * @param mixed     $contents       Log contents.
     * @param string    $identifier     Distinguished name to identify the log.
     * @param string    $log_file       Log file name.
     */ 
    public static function logger( $contents, string $identifier = '', string $log_file = '' ): void {
        if ( ! empty( $contents ) ) {
            switch ( gettype( $contents ) ) {
                case 'integer':
                    $logs = (string) intval( $contents );
                    break;
                case 'double':
                    $logs = (string) floatval( $contents );
                    break;
                case 'boolean':
                    $logs = $contents ? 'TRUE' : 'FALSE';
                    break;
                case 'array':
                case 'object':
                    $logs = json_encode( $contents, JSON_PRETTY_PRINT );
                    break;
                case 'string':
                default:
                    $logs = (string) $contents;
            }
            /*
            // Set the timezone set in WordPress
            $wpTimezone = wp_timezone_string();
            if ( preg_match( '/^([+-])(2[0-3]|[01][0-9]):([0-5][0-9])$/', $wpTimezone, $matches ) ) {
                $timezoneOffsetSecounds = ( $matches[1] === '-' ? -1 : 1 ) * ((int)$matches[2] * 3600 + (int)$matches[3] * 60);
                $isDaylightSavingTime = date( 'I' ) == 1;
                $wpTimezone = timezone_name_from_abbr( '', $timezoneOffsetSecounds, $isDaylightSavingTime );
            }
            if ( empty( $wpTimezone ) ) {
                $wpTimezone = date_default_timezone_get();
            }
            date_default_timezone_set( $wpTimezone );
            */
            $now_date = date_i18n( 'Y-m-d H:i:s' );
            if ( empty( $identifier ) ) {
                $log_line = sprintf( '[%s] %s', $now_date, $logs );
            } else {
                $log_line = sprintf( '[%s] "%s" %s', $now_date, $identifier, $logs );
            }
            if ( empty( $log_file ) ) 
                $log_file = IGNITOR_PLUGIN_DIR . 'wp-ignitor.log';
            /**
             * Filter the output path of the log file for this plugin.
             *
             * @since 1.0.0
             * @hook  filter
             */
            $log_file = apply_filters( 'wpignitor_logfile_path', $log_file, $logs );
            error_log( $log_line . "\n", 3, $log_file );
        }
    }


}