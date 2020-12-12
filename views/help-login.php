<?php
/**
 * Authorizations tab content in admin help.
 *
 * @package WpIgnitor
 * @since 1.0.0
 */
?>
<h3><?= __( 'About Authorizations Tab', IGNITOR ) ?></h3>
<p>
  <?= __( 'In this section you can control the login page that authenticates WordPress users.', IGNITOR ) ?><br>
  <?= __( 'The WordPress login page "wp-login.php" is a great target for malicious visitors.', IGNITOR ) ?><br>
  <?= __( 'Therefore, blocking access to this page and setting up a new login page is one of the best ways to protect your site.', IGNITOR ) ?><br>
  <br>
  <?= __( 'Simply specify a new login path instead of the initially bundled "wp-login.php" and your site will have a new entrance to WordPress. Is it too easy?', IGNITOR ) ?><br>
  <?= __( "Oh, but wait a minute. Don't forget to update \".htaccess\" in the Global tab section to open a new entrance and tell WordPress where the new entrance is.", IGNITOR ) ?>
</p>
