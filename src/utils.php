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
            _doing_it_wrong( __METHOD__, sprintf( '<code>%s</code> does not exist.', $template ), '5.5.0' );
            return;
        }

        include $template;
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
        $absolute_path = str_replace( '\\', '/', ABSPATH );
        return ltrim( str_replace( $_SERVER['DOCUMENT_ROOT'], '', $absolute_path ), '/' );
    }

    /**
     * Get the wp-config.php file path
     *
     * @since 1.0.0
     * @access public
     */
    public static function get_wp_config_path() {
        if ( file_exists( ABSPATH . 'wp-config.php' ) ) {
            return ABSPATH . 'wp-config.php';
        } elseif ( file_exists( dirname( ABSPATH ) . '/wp-config.php' ) && ! file_exists( dirname( ABSPATH ) . '/wp-settings.php' ) ) {
            return dirname( ABSPATH ) . '/wp-config.php';
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
        if ( file_exists( ABSPATH . '.htaccess' ) ) {
            return ABSPATH . '.htaccess';
        } elseif ( file_exists( dirname( ABSPATH ) . '/.htaccess' ) ) {
            return dirname( ABSPATH ) . '/.htaccess';
        } else {
            // Does not exist in a valid path.
            return false;
        }
    }

    /**
     * Get frontend HTML
     *
     * @since 1.0.0
     * @access public
     */
    public function get_frontend_html( string $element = '', bool $to_string = false ): string {
        $result = '';
        $raw_html = @file_get_contents( 'http://test.ka2.org/' );// home_url( '/' )
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
        
        return $to_string ? preg_replace( '/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F]/', '', $result ) : $result;
    }

    /**
     * Check if your PHP environment supports valid Phar class
     *
     * @since 1.0.0
     * @access public
     */
    public static function is_valid_phar(): bool {
        $version = \Phar::apiVersion();
        if ( ! version_compare( $version, '1.0.0', '>=' ) ) {
            self::logger( __( 'The current PHP environment does not support Phar class ('. $version .').', IGNITOR ) );
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
            } else {
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
        if ( @file_exists( $archive_path ) ) {
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
        if ( @file_exists( $base_dir ) && is_dir( $base_dir ) && ! is_link( $base_dir ) ) {
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
        $_host = preg_quote( php_uname( 'n' ), '/' );
        $_remote_addr = preg_quote( $this->get_remote_addr(), '/' );
        $_fqdn = preg_quote( $this->get_fqdn(), '/' );
        $_install_dir = preg_quote( empty( $subdir ) ? $this->get_wp_install_dir() : $subdir, '/' );
        $_stack = [];
        array_unshift( $_stack, '# BEGIN WP Ignitor Rules', '<IfModule mod_rewrite.c>', 'RewriteEngine On' );
        $_stack[] = '# Environment';
        $_stack[] = '# - Definition of connection sources to allow.';
        $_stack[] = '# - Set "is_allow" to IP and host that allow access:';
        $_stack[] = 'SetEnvIf Remote_Host "^'. $_fqdn .'$" is_allow=true';
        $_stack[] = 'SetEnvIf Remote_Host "^'. $_host .'$" is_allow=true';
        if ( $_host !== 'localhost' ) {
            $_stack[] = 'SetEnvIf Remote_Host ^localhost$ is_allow=true';
        }
        $_stack[] = 'SetEnvIf Remote_Addr "^'. $_remote_addr .'" is_allow=true';
        $_stack[] = '# - Set "is_allow_referer" to referer URL that allow access:';
        $_stack[] = 'SetEnvIf Referer "^https?://'. $_fqdn .'/" is_allow_referer=true';
        $_num = 1;
        $_stack[] = "# {$_num}.";
        $_stack[] = '# - Static resources return a fixed 404 response regardless of the connection source.';
        $_stack[] = 'RewriteRule "^(license\.txt|readme\.html)$" - [R=404,L]';
        $_num++;
        $_stack[] = "# {$_num}.";
        $_stack[] = '# - "wp-admin/" and "wp-login.php" under the document root do not redirect and return';
        $_stack[] = '# - 404 response.';
        $_stack[] = 'RewriteRule "^wp-admin\/(.*)$" - [R=404,L]';
        $_stack[] = 'RewriteRule "^wp-login\.php(.*)$" - [R=404,L]';
        $_num++;
        $_stack[] = "# {$_num}.";
        $_stack[] = '# - "wp-config.php" and "wp-cron.php" returns 404 response if the connection source is';
        $_stack[] = '# - not an allowed host.';
        $_stack[] = 'RewriteCond %{ENV:is_allow} !^true$';
        $_stack[] = 'RewriteRule "wp-(config|cron)\.php$" - [R=404,L]';
        $_num++;
        $_stack[] = "# {$_num}.";
        $_stack[] = '# - Access to the .php files (exclude the specific files such as "wp-login.php" or';
        $_stack[] = '# - "xmlrpc.php") directly under the installation directory returns 404 response if the';
        $_stack[] = '# - connection source is other than the allowed host or referrer.';
        $_stack[] = 'RewriteCond %{ENV:is_allow} !^true$';
        $_stack[] = 'RewriteCond %{ENV:is_allow_referer} !^true$';
        $_stack[] = 'RewriteCond %{REQUEST_FILENAME} -f';
        $_stack[] = 'RewriteCond %{REQUEST_FILENAME} "!(wp-login|xmlrpc)\.php$"';
        $_stack[] = 'RewriteCond %{REQUEST_FILENAME} "!wp-admin/(options(|-general)|profile)\.php$"';
        $_stack[] = 'RewriteRule "^'. $_install_dir .'.*?\.php$" - [R=404,L]';
        $_num++;
        $_stack[] = "# {$_num}.";
        $_stack[] = '# - Access to each directory directly under the installation directory returns 404';
        $_stack[] = '# - response if the connection source is other than the allowed host and referrer.';
        $_stack[] = 'RewriteCond %{ENV:is_allow} !^true$';
        $_stack[] = 'RewriteCond %{ENV:is_allow_referer} !^true$';
        $_stack[] = 'RewriteCond %{REQUEST_FILENAME} !-f';
        $_stack[] = 'RewriteCond %{REQUEST_FILENAME} -d';
        $_stack[] = 'RewriteRule "^'. $_install_dir .'.*?/?(.*)$" - [R=404,L]';
        $_num++;
        $_stack[] = "# {$_num}.";
        $_stack[] = '# - An access to "xmlrpc.php" only allow access that has user agent of "Jetpack", and';
        $_stack[] = '# - other accesses redirect to "0.0.0.0" to avoid load.';
        $_stack[] = 'RewriteCond %{HTTP_USER_AGENT} !jetpack';
        $_stack[] = 'RewriteRule "^xmlrpc\.php$" "\/\/0\.0\.0\.0\/" [R=301,L]';
        //$_stack[] = 'RewriteRule "^xmlrpc\.php$" - [R=403,L]';
        $_num++;
        if ( false ) {
            $_stack[] = "# {$_num}.";
            $_stack[] = '# - Access to "wp-login.php" returns a uniform 404 response regardless of the connection';
            $_stack[] = '# - source.';
            $_stack[] = 'RewriteRule "wp-login\.php(.*)$" - [R=404,L]';
            $_num++;
        }
        $_stack[] = "# {$_num}.";
        $_stack[] = "# - Avoid the discovery of an author's ID.";
        $_stack[] = 'RewriteCond %{QUERY_STRING} ^author=([0-9]*)';
        $_stack[] = 'RewriteRule .* - [F]';
        $_num++;
        if ( ! empty( $_install_dir ) && $_install_dir !== '\\/' ) {
            global $wp_rewrite;
            if ( got_mod_rewrite() ) {
                // $origin_rr = explode( "\n", $wp_rewrite->mod_rewrite_rules() );
                $_stack[] = "# {$_num}.";
                $_stack[] = '# - Override WordPress rewrite settings if the installation path is a subdirectory';
                $_stack[] = '# - under the document root.';
                //$_stack[] = '# - See: https://wordpress.org/support/article/giving-wordpress-its-own-directory/';
                //$_stack[] = 'RewriteRule ^(|/)$ /'. $_install_dir .'index\.php [L]';
                //$_stack[] = 'RewriteBase /';
                //$_stack[] = 'RewriteRule ^'. $_install_dir .'index\.php$ - [L]';
                //$_stack[] = 'RewriteCond %{REQUEST_FILENAME} !-f';
                //$_stack[] = 'RewriteCond %{REQUEST_FILENAME} !-d';
                //$_stack[] = 'RewriteRule . /'. $_install_dir .'index.php [L]';
                $_stack[] = 'RewriteCond %{HTTP_HOST} ^'. $_SERVER['HTTP_HOST'] .'$';
                $_stack[] = 'RewriteCond %{REQUEST_URI} !^/'. $_install_dir;
                $_stack[] = 'RewriteCond %{REQUEST_FILENAME} !-f';
                $_stack[] = 'RewriteCond %{REQUEST_FILENAME} !-d';
                $_stack[] = 'RewriteRule ^(.*)$ /'. $_install_dir .'$1';
                $_stack[] = 'RewriteCond %{HTTP_HOST} ^'. $_SERVER['HTTP_HOST'] .'$';
                $_stack[] = 'RewriteRule ^(/)?$ '. $_install_dir .'index.php [L]';
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
     * @see /wp-admin/includes/misc.php: insert_with_markers()
     *
     * @param string       $filename  Filename to alter.
     * @param string       $marker    The marker to alter.
     * @param array|string $insertion The new content to insert.
     * @return bool True on write success, false on failure.
     */
    function wpignitor_insert_with_markers( string $filename, string $marker, $insertion ): bool {
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
            if ( preg_match( '/^# - .*/', $line ) === 1 ) {
                unset( $insertion[$i] );
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
        $new_file_data = implode(
            "\n",
            array_merge(
                $pre_lines,
                array( $start_marker ),
                $insertion,
                array( $end_marker, '' ),
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
     * Logger for this plugin only
     *
     * @since 1.0.0
     * @access public
     *
     * @param array|string  $logs      Array of log lines or string as one line
     * @param string        $log_file  Log file name. Defaults to "wp-ignitor.log"
     */ 
    public static function logger( $logs, string $log_file = 'wp-ignitor.log' ) {
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
        }
        error_log( implode( "\n", $logs ) . "\n", 3, IGNITOR_PLUGIN_DIR . $log_file );
    }



    /**
     * Generate unique filename that has uploaded
     *
     * @since 1.0.0
     * @access public
     *
     * @param string $dir     The directory path to place upload file.
     * @param string $name    The file name of upload file.
     * @param string $ext     An extension of upload file.
     * @return string         The generated new file name.
     */ 
    public function unique_uploaded_filename( string $dir, string $name, string $ext ): string {
        $_prefix = $this->current_salon_id . '_';
        $_hash = md5( $dir .'/'. $name .':'. microtime( true ) );
        return $_prefix.$_hash.$ext;
    }

    /**
     * Delete unused salon images
     *
     * @since 1.0.0
     * @access public
     *
     * @param int   $salon_id     
     * @param array $salon_images 
     * @return void
     */
    public function cleanup_images( $salon_id, $salon_images ) {
        $upload_dir = wp_upload_dir();
        $files = glob( $upload_dir['path'] . '/*' );
        $salon_images_bn = array_map( function ( $elm ) { return basename( $elm ); }, $salon_images );
        foreach ( $files as $_file ) {
            $basefile = basename( $_file );
            if ( strpos( $basefile, $salon_id . '_' ) === 0 ) {
                if ( in_array( $basefile, $salon_images_bn, true ) ) {
                    continue;
                } else {
                    @unlink( $upload_dir['path'] .'/'. $basefile );
                }
            }
        }
        
    }


    /**
     * Edit term of private custom taxonomy
     *
     * @since 1.0.0
     * @access public
     *
     * @param array  $data
     * @param string $taxonomy
     * @param string $taxonomy_label
     * @return boolean
     */ 
    public function edit_term( $data, $taxonomy, $taxonomy_label ) {
        if ( ! taxonomy_exists( $taxonomy ) ) {
            $this->errors->add( 'taxonomy_not_found', "That '$taxonomy' taxonomy does not exist." );
            return false;
        }
        $current_terms = get_terms( $taxonomy, [ 'orderby' => 'id', 'order' => 'ASC', 'hide_empty' => false, 'fields' => 'id=>name' ] );
        //var_dump( '<br>Upsert or delete: ', $data, '<br>' );
        foreach ( $data as $_id => $_value ) {
            $_value = wp_strip_all_tags( $_value );
            if ( array_key_exists( $_id, $current_terms ) ) {
                if ( $_value !== $current_terms[$_id] ) {
                    //var_dump( "Update: {$current_terms[$_id]} -> $_value <br>" );
                    if ( is_wp_error( wp_update_term( $_id, $taxonomy, [ 'name' => $_value ] ) ) ) {
                        $this->errors->add( 'update_term_failure', "{$taxonomy_label}「{$_value}」の変更に失敗しました。" );
                    }
                }
            } else {
                //var_dump( "Insert: new -> $_value <br>" );
                if ( is_wp_error( wp_insert_term( $_value, $taxonomy ) ) ) {
                    $this->errors->add( 'insert_term_failure', "{$taxonomy_label}に「{$_value}」を追加できませんでした。" );
                }
            }
        }
        $remove_terms = array_diff_key( $current_terms, $data );
        if ( ! empty( $remove_terms ) ) {
            foreach ( $remove_terms as $_id => $_value ) {
                $_value = wp_strip_all_tags( $_value );
                //var_dump( "Remove: [{$_id}]{$_value} <br>" );
                if ( is_wp_error( wp_delete_term( $_id, $taxonomy ) ) ) {
                    $this->errors->add( 'delete_term_failure', "{$taxonomy_label}「{$_value}」の削除に失敗しました。" );
                }
            }
        }
        return is_wp_error( $this->errors );
    }

    /**
     * Check if the specified measure name exists
     *
     * @since 1.0.0
     * @access public
     *
     * @param string $measure_name
     * @return boolean
     */ 
    public function measure_name_exists( $measure_name ) {
        $term = term_exists( $measure_name, 'measure' );
        return ( $term !== 0 && $term !== null );
    }

    /**
     * Set default value for seeds
     *
     * @since 1.0.0
     * @access public
     *
     * @param array  $items (required)
     * @return mixed
     */
    public function set_seed( $items ) {
        $randNumber = function( $type = null ) {
            switch( $type ) {
                case 'zipcode':
                    return sprintf( '%03d-%04d', mt_rand( 1, 999 ), mt_rand( 1, 9999 ) );
                case 'phone_number':
                    $pattern = [
                        [ '0%d-%04d-%04d', 9, 9999, 9999 ],
                        [ '0%02d-%03d-%04d', 99, 999, 9999 ],
                        [ '0%03d-%02d-%04d', 999, 99, 9999 ],
                    ];
                    $tmpl = $pattern[array_rand( $pattern )];
                    return sprintf( $tmpl[0], mt_rand( 1, $tmpl[1] ), mt_rand( 1, $tmpl[2] ), mt_rand( 1, $tmpl[3] ) );
                default:
                    return '';
            }
        };
        $randString = function( $type, $with_empty = false, $percent_empty = 25, $memo = null ) {
            if ( $with_empty && mt_rand( 1, 100 ) <= (int) $percent_empty ) {
                return '';
            } else {
                switch ( $type ) {
                    case 'name':
                        $prefix = [ '', '', '', 'サロン', 'エステティック', 'メディカル', 'リラクゼーションサロン', 'RELAXATION SALON', 'スパ', 'ビューティサロン' ];
                        $append = [ '', '家', '苑', '庵', '治療院', '診療所' ];
                        $surfix = [ '', 'クリニック', 'サロン', '美容室', '専門店', 'Salon', 'ハウス', '%s店', '%s店', '%s店', '%s店', '%s店', '%s店' ];
                        $name = [ $this->faker->randomElement( $prefix ) ];
                        if ( mt_rand( 0, 1 ) == 1 ) {
                            $_kana = mb_str_split( 'ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヲンヴ' );
                            $_main = [ $this->faker->lastName, implode( '', $this->faker->randomElements( $_kana, mt_rand( 2, 6 ) ) ) ];
                            $name[] = $this->faker->randomElement( $_main ) . $this->faker->randomElement( $append );
                        } else {
                            $name[] = mt_rand( 0, 1 ) == 1 ? strtoupper( $this->faker->word ) : ucfirst( $this->faker->word );
                        }
                        $_sf = $this->faker->randomElement( $surfix );
                        if ( '%s店' === $_sf ) {
                            $_sf = sprintf( $_sf, str_replace( '駅', '', $this->faker->randomElement( $memo ) ) );
                        }
                        $name[] = $_sf;
                        return implode( ' ', $name );
                    case 'city':
                    case 'streetAddress':
                    case 'url':
                        return (string) $this->faker->{$type};
                    case 'latitude':
                    case 'longitude':
                        $value = (float) $this->faker->{$type};
                        return $value == 0 ? '' : $value;
                    case 'services':
                        return $this->faker->sentences( mt_rand( 1, 6 ), false );
                    default:
                        return $this->faker->text( mt_rand( 100, 200 ) );
                }
            }
        };
        $randRating = function() {
            $_arr = range( 0, 50, 5 );
            return (float)($_arr[array_rand( $_arr )] / 10);
        };
        $randChoose = function( $_array, $values = false ) {
            $choosen = [];
            $_keys = array_rand( $_array, mt_rand( 1, count( $_array ) ) );
            if ( $values ) {
                foreach ( (array) $_keys as $_key ) {
                    $choosen[] = $_array[$_key];
                }
                return $choosen;
            } else {
                return $_keys;
            }
        };
        $_area = $items['areas'][array_rand( $items['areas'] )];
        $_stations = $items['stations'][$_area];
        return [
            'id' => null,
            'salon_image' => null,
            'main_image' => null,
            'name' => $randString( 'name', false, 25, $_stations ),
            'area' => $_area,
            'rating' => $randRating(),
            'standard_price' => $randString( 'standard_price' ),
            'business_hours' => $randString( 'business_hours' ),
            'regular_holiday' => $randString( 'regular_holiday' ),
            'note' => $randString( 'note' ),
            'zipcode' => $randNumber( 'zipcode' ),
            'prefecture' => 13,
            'city' => $randString( 'city' ),
            'address' => $randString( 'streetAddress' ),
            'latitude' => $randString( 'latitude', true, 50 ),
            'longitude' => $randString( 'longitude', true, 50 ),
            'phone_number' => $randNumber( 'phone_number' ),
            'reservation_url' => $randString( 'url', true, 33 ),
            'movie' => $randString( 'url', true, 66 ),
            'service_details' => $randString( 'services' ),
            'guidance' => $randString( 'guidance' ),
            'measure' => $randChoose( $items['measures'], true ),
            'detail' => $randChoose( $items['details'], true ),
            'station' => $randChoose( $_stations, true ),
            'treatment' => $randChoose( $items['treatments'] ),
            'spec' => $randChoose( $items['specs'] ),
            'payment' => $randChoose( $items['payments'] ),
            'status' => mt_rand( 0, 1 ) == 1 ? true : false,
        ];
    }


}