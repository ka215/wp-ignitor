<?php
/**
 * Conceals tab content in admin help.
 *
 * @package WpIgnitor
 * @since 1.0.0
 */
?>
<h3><?= __( 'About Conceals Tab', IGNITOR ) ?></h3>
<p>
  <?= __( 'In this setting section, you can remove the elements that is assumed this site is built by WordPress from the outputting HTML source to keep the site confidential.', IGNITOR ) ?>
  <?= __( 'Concealing that your site is built by WordPress is very important in protecting your site from attackers.', IGNITOR ) ?>
  <?= __( "In addition, by eliminating unnecessary output elements it will improve your site's performance.", IGNITOR ) ?><br>
  <br>
  <?= __( "WordPress produces HTML output that is not detrimental to anyone in order to maintain its versatility as a CMS. But that can often be unnecessary for our site. WP Ignitor makes it easy to switch outputs that we don't need.", IGNITOR ) ?><br>
  <br>
  <?= __( 'The WP REST API is a very useful feature, but it also runs the risk of being a point of contact for leaking information on our website. We should properly control the REST API path for self-defense.', IGNITOR ) ?><br>
</p>
