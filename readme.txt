=== WP Ignitor ===
Contributors: Ka2
Tags: management
Requires at least: 5.2.9
Tested up to: 5.6.1
Stable tag: 1.0.3
Text Domain: wpignitor
Domain Path: /languages/
License: GPL v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.txt
Requires PHP: 7.2
Donate link: https://github.com/sponsors/ka215

Now let's ignition to your site, with conceal that we are WordPress and get starting with the stronger defensive turn.

== Description ==

All sites created with WordPress have the same file and directory structure, and the database table structure is simple. So it's easy to imagine that it's a website that is fairly easy to attack from the attacker.
This plugin doesn't easily make visitors aware that your site is written in WordPress and provides robust performance in terms of security. In addition, it retains the versatility of being able to track updates such as cores and plugins as usual.

By using this plugin, we can easily perform troublesome server-side access restrictions and maintenance of various configuration files as likes above from the admin panel.

**Main plugin features:**

* Move WordPress installation directory
* Update and move `wp-config.php`
* `.htaccess` maintenance
* Cleanup HTML that output by WordPress
* Control behavior each route of WP REST API
* Set up a new login page URL
* Restricted access to login page

Let's get rid of our tedious configuration work right away and ignite the launch of the site!


== Installation ==

1. From the WP admin panel, click "Plugins" -> "Add new".
2. In the browser input box, type "WP Ignitor".
3. Select the "WP Ignitor" plugin and click “Install”.

1, 2, 3: You're done!


== Frequently asked questions ==

= I failed to set up this plugin and can't log in to WordPress =

You can use the filter hook "wpignitor_emergency_recovery" added since version 1.0.3.
By enabling this filter hook, you can remove all the settings saved by the WP Ignitor and revert the updated ".htaccess" and "wp-config.php" files.
Prepare functions.php in the plugin directory and add it as shown below.

`
add_filter( 'wpignitor_emergency_recovery', '__return_true' );
`

After the filter hook enabled, accessing the site will perform an emergency recovery.
If you continue to use the WP Ignitor, please disable the filter hook for emergency recovery.

= Source code does not appear in "Cleanup Frontend HTML" on the "Conceals" tab =

You can use the "wpignitor_remote_request_args" filter added since version 1.0.1 to control the request behavior of the WP_Http API.
If you have problems with SSL communication such as "SSL certificate problem", please add the following filter hook to functions.php.

`
add_filter( 'wpignitor_remote_request_args', function( $args, $get_uri ) {
    $args = [
        'sslverify' => false,
    ];
    return $args;
}, 10, 2 );
`

Refer to [WP_Http::request()](https://developer.wordpress.org/reference/classes/WP_Http/request/) for details on the optional arguments that can be given when requesting by WP_Http API.

== Screenshots ==

1. The globals section can have an overwhelming impact on your entire website.
2. The Conceals section can have a securely conceal your website.
3. The authorizations section can have a customize the URL of WordPress login page.
4. The utilities section contains useful features for site management.

== Changelog ==

= 1.0.3 =
Bump to version - February 22, 2021

* Fixed a bug that the context helper tab of the management screen does not open.
* Added the recovery script to reset all the plugin settings when can't log in to WordPress, such as when the plugin settings fail.

= 1.0.2 =
Bump to version - January 19, 2021

* Minor fixes in the settings page UI.
* Added translation template and Japanese translation files.
* Introduced a workflow for releasing packages to the SVN repository in sync with GitHub tag additions.

= 1.0.1 =
Bump to version - December 26, 2020

* Fixed some minor UI bugs
* Added filter hooks for "wpignitor_remote_request_args" and "wpignitor_remote_retrieve_html".
* Changed "functions.php" for bundled plugin extension to sample file.

= 1.0.0 =
Bump an publish version - December 24, 2020



== Upgrade notice ==

Not yet.


