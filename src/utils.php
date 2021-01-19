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
     * @since 1.0.0
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
        return array_unique( $remote_hosts, SORT_STRING );
    }

    /**
     * Get remote IP address
     *
     * @since 1.0.0
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
        return $ip;
    }

    /**
     * Get current domain
     *
     * @since 1.0.0
     * @access public
     */
    public static function get_fqdn(): string {
        $urlparts = parse_url( home_url() );
        $fqdn = $urlparts['host'];
        // $fqdn == $_SERVER['HTTP_HOST']
        return $fqdn;
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
     * Get frontend HTML
     *
     * @since 1.0.0 -> 1.0.1
     * @access public
     */
    public function get_frontend_html( string $path = '/', string $element = '', bool $to_string = false ): string {
        $get_uri = home_url( $path );
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
     * @since 1.0.0
     * @access public
     */
    public static function is_valid_phar(): bool {
        $version = \Phar::apiVersion();
        if ( ! version_compare( $version, '1.0.0', '>=' ) ) {
            self::logger( sprintf( __( 'The current PHP environment does not support Phar class (%s).', IGNITOR ), $version ) );
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
            $this->logger( $e->getMessage() );
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
                $this->logger( $e->getMessage() );
                return false;
            }
        } else {
            $message = __( 'The specified file does not exist.', IGNITOR );
            $this->errors->add( 'file_does_not_exist', $message, $archive_path );
            $this->logger( $message );
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
        //var_dump( $allowed_hosts, $allowed_addrs, $allowed_referers, $_install_dir, $subdir, $advanced_htaccess_options );

        $_section_number = 1;
        $_stack = [];
        array_unshift( $_stack, '# BEGIN WP Ignitor Rules', '<IfModule mod_rewrite.c>', 'RewriteEngine On' );
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
        $_stack[] = '# - not the allowed hosts and addresses.';
        $_stack[] = 'RewriteCond %{ENV:is_allow} !^true$';
        $_stack[] = 'RewriteRule "wp-(config|cron)\.php$" - [R=404,L]';
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
            $_stack[] = '# - referers.';
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
        array_push( $_stack, '', '</IfModule>', '# END WP Ignitor Rules' );
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
     * Logger for this plugin only
     *
     * @since 1.0.0
     * @access public
     *
     * @param array|string  $logs      Array of log lines or string as one line
     * @param string        $log_file  Log file name.
     */ 
    public static function logger( $logs, string $log_file = '' ): void {
        if ( ! is_array( $logs ) ) 
            $logs = (array) $logs;
        if ( ! empty( $logs ) ) {
            $now_date = '['. date( 'Y-m-d H:i:s' ) .'] ';
            foreach ( $logs as $_i => $_line ) {
                if ( $_i == 0 ) {
                    $logs[$_i] = $now_date . $_line;
                } else {
                    $logs[$_i] = str_repeat( ' ', strlen( $now_date ) ) . $_line;
                }
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
            error_log( implode( "\n", $logs ) . "\n", 3, $log_file );
        }
    }


}