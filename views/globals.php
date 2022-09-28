<?php
/**
 * Content body of the globals tab of the plugin settings page.
 *
 * @package WpIgnitor
 * @since 1.0.0 -> 1.1.0
 */
$add_htaccess = $this->generate_htaccess();
$checked_wp_config_path = $this->is_best_wp_config_path();
$editable_constant_list = $this->get_editable_constants();
$current_wp_config_options = $this->get_option( 'wp_config_options' ) ?? [];
$default_allowed_hosts = $this->get_remote_hosts();
$allowed_sources = $this->get_option( 'allow_sources' ) ?? [];
$advanced_htaccess_options = $this->get_option( 'advanced_htaccess' ) ?? [];
$current_new_login = $this->get_option( 'new_login' );
$apache_auth_user_file = $this->get_option( 'apache_auth_user_file' ) ?: $this->default_apache_auth_user_file();
$apache_auth_users = $this->get_option( 'apache_auth_users' ) ?: [];
$apache_auth_type = isset( $advanced_htaccess_options['apache_auth_type'] ) ? $advanced_htaccess_options['apache_auth_type'] : 'basic';
?>
<p><?= __( "This settings section contains settings that have a destructive impact on the entire website. It's risky to do, so it's a good idea to do it before you bring in the content.", IGNITOR ) ?></p>
<table class="form-table" role="presentation">
  <tbody>
    <!-- Status -->
    <tr>
      <th scope="row"><label><?= __( 'File Control Permissions', IGNITOR ) ?></label></th>
      <td>
        <p class="description">
          <?= __( 'It is the state whether each file or directory can be controlled from the WP-Ignitor plug-in. These affect the execution of various operations in this section.', IGNITOR ) ?><br>
        </p>
        <ul style="margin-bottom: 0; margin-left: 10px;">
          <li>
            <span class="mdi mdi-<?php if ( is_writable( $_SERVER['DOCUMENT_ROOT'] ) ) : ?>check-bold text-success<?php else : ?>close-thick text-denger<?php endif; ?>"></span>
            <span class="mxh fw600"><?= __( 'DOCUMENT_ROOT:', IGNITOR ) ?></span>
            <code><?= $this->paths['docroot'] ?></code>
          </li>
          <li>
            <span class="mdi mdi-<?php if ( is_writable( ABSPATH ) ) : ?>check-bold text-success<?php else : ?>close-thick text-denger<?php endif; ?>"></span>
            <span class="mxh fw600"><?= __( 'Install Directory:', IGNITOR ) ?></span>
            <code><?= $this->paths['install_path'] ?></code>
          </li>
          <li>
            <span class="mdi mdi-<?php if ( is_writable( $this->get_wp_config_path() ) ) : ?>check-bold text-success<?php else : ?>close-thick text-denger<?php endif; ?>"></span>
            <span class="mxh fw600"><?= __( '"wp-config.php" File Path:', IGNITOR ) ?></span>
            <code><?= $this->get_wp_config_path() ?></code>
          </li>
          <li>
            <span class="mdi mdi-<?php if ( is_writable( $this->get_htaccess_path() ) ) : ?>check-bold text-success<?php else : ?>close-thick text-denger<?php endif; ?>"></span>
            <span class="mxh fw600"><?= __( '".htaccess" File Path:', IGNITOR ) ?></span>
            <code><?= $this->get_htaccess_path() ?: __( 'None' ) ?></code>
          </li>
        </ul>
      </td>
    </tr>
    <!-- Move installation path -->
    <tr>
      <th scope="row"><label for="install-path"><?= __( 'Move Installation Path', IGNITOR ) ?></label></th>
      <td>
        <div class="d-flex-row">
          <input type="text" id="install-path" value="{DOCUMENT_ROOT}/<?= esc_attr( $this->get_wp_install_dir() ) ?>" class="normal-text code" readonly>
          <span class="surfix"><i class="mdi mdi-arrow-right"></i></span>
          <span class="prefix"><code>{DOCUMENT_ROOT}/</code></span>
          <input type="text" id="new-install-path" name="new_install_path" value="" class="little-text" placeholder="<?= __( 'New Path', IGNITOR ) ?>">
          <button
            type="button"
            id="btn-move-install-path"
            data-bind="dialog"
            data-persistent="true"
            data-title="<?= __( 'Moving files to new install path', IGNITOR ) ?>"
            data-foot="none"
            data-content="moveInstallPath"
            class="button button-primary"><span class="mdi mdi-folder-move-outline"></span> <?= __( 'Move To', IGNITOR ) ?></button>
        </div>
        <div class="d-flex-row myh">
          <label for="without-subdir">
            <input type="checkbox" id="without-subdir" name="without_subdir" value="true" checked="checked" class="mrh"><?php
            _e( 'To use the home URL (site URL) without subdirectory after moving files.', IGNITOR ) ?>
          </label>
          <label for="optimize-htaccess" class="d-flex-row myh">
            <input type="checkbox" id="optimize-htaccess" name="optimize_htaccess" value="true" checked="checked" class="mrh"><?php
            _e( "After moving all files, optimize the \".htaccess\" or create a new one if it doesn't exist.", IGNITOR ) ?>
          </label>
        </div>
        <p class="description info-list">
          <span class="mdi mdi-alert-circle-outline text-info"></span>
          <?= __( 'Cannot move to the path of directory that already exists, or to the path of directly document root.', IGNITOR ) ?><br>
          <?= __( 'WP-Ignitor make a new directory before moving.', IGNITOR ) ?><br>
          <?= __( 'When moving, the "wp-config.php" will be forcibly placed directly under the installation directory.', IGNITOR ) ?><br>
          <?= __( 'Files in the "node_modules", ".cache", and ".git" directories are excluded from the move.', IGNITOR ) ?><br>
          <?= __( 'Also cannot move to the path that is two or more levels deep.', IGNITOR ) ?><br>
          <?= __( 'If you do not have enough permission to operate the file, you cannot move it.', IGNITOR ) ?>
        </p>
      </td>
    </tr>
    <!-- Move "wp-config.php" file -->
    <tr>
      <th scope="row"><label for="current-wp-config-path"><?= __( 'Move "wp-config.php"', IGNITOR ) ?></label></th>
      <td>
        <div class="d-flex-row">
          <input type="text" id="current-wp-config-path" value="<?= esc_attr( $this->get_wp_config_path() ) ?>" class="medium-text code" readonly>
<?php if ( 'no-secure' === $checked_wp_config_path ): ?>
          <span class="gap"><i class="mdi mdi-arrow-right"></i></span>
          <button
            type="button"
            id="btn-move-wp-config"
            data-bind="dialog"
            data-persistent="true"
            data-content="moveWpConfig"
            data-hidden="selfReload"
            class="button button-primary"><span class="mdi mdi-file-replace-outline"></span> <?= __( 'Move To One Upper Level Path', IGNITOR ) ?></button>
<?php endif;
      switch( $checked_wp_config_path ) {
        case 'no-secure':
            $_type = 'alert';
            $_icon = 'alert-rhombus-outline';
            $_msg  = __( "No secure because it's same the installed path. Recommend that you move the file up one level for better security.", IGNITOR );
            break;
        case 'better':
            $_type = 'warn';
            $_icon = 'alert-outline';
            $_msg  = __( "It's more appropriate because upper the installed path. However, please note that it is installed under the document root that can be accessed by everyone.", IGNITOR );
            break;
        case 'best':
            $_type = 'success';
            $_icon = 'check-circle-outline';
            $_msg  = __( "It's already in the correct position recommended for security. You will also be better off by paying attention to directory traversal attacks.", IGNITOR );
            break;
      } ?>
          <p class="description text-<?= esc_attr( $_type ) ?>"><span class="mdi mdi-<?= esc_attr( $_icon ) ?>"></span> <?= $_msg ?></p>
        </div>
      </td>
    </tr>
    <!-- Update "wp-config.php" -->
    <tr>
      <th scope="row"><label for="wp-option-list"><?= __( 'Update "wp-config.php"', IGNITOR ) ?></label></th>
      <td>
        <p class="description">
          <?= __( 'Enables or disables various functions by constants implemented in WordPress in advance. This settings will be written directly to "wp-config.php".', IGNITOR ) ?><br>
        </p>
        <div class="expansionable-block" id="wp-config-contents">
          <ul id="wp-option-list">
<?php foreach ( $editable_constant_list as $const_name => $items ): 
        $is_checked_item = $current_wp_config_options ? array_key_exists( strtoupper( $const_name ), $current_wp_config_options ) : false;
?>
            <li class="d-flex-row mbh">
              <label class="mr1"><input type="checkbox" id="chk-<?= esc_attr( $const_name ) ?>" class="toggle-option mrh"<?php if ( $is_checked_item ): ?> checked="checked"<?php endif; ?>><?= $items['label'] ?>:</label>
<?php   if ( 'toggle' === $items['class'] ): 
          $_checked = $is_checked_item ? $current_wp_config_options[strtoupper( $const_name )] : ( isset( $items['checked'] ) && $items['checked'] );
?>
              <label class="tgl">
                <input type="<?= esc_attr( $items['type'] ) ?>" id="<?= esc_attr( $const_name ) ?>" name="wp_config[<?= strtoupper( esc_attr( $const_name ) ) ?>]" value="<?= esc_attr( $items['value'] ) ?>"
                  <?php if ( $_checked ): ?> checked="checked"<?php endif; ?>
                ><span class="tgl-btn"></span>
              </label>
<?php    else: 
          $_value = $is_checked_item ? $current_wp_config_options[strtoupper( $const_name )] : $items['value'];
?>
              <input type="<?= esc_attr( $items['type'] ) ?>" id="<?= esc_attr( $const_name ) ?>" name="wp_config[<?= strtoupper( esc_attr( $const_name ) ) ?>]" value="<?= esc_attr( $_value ) ?>" class="<?= esc_attr( $items['class'] ) ?>"
                <?php if ( isset( $items['placeholder'] ) ): ?> placeholder="<?= esc_attr( $items['placeholder'] ) ?>"<?php endif; ?>
                <?php if ( isset( $items['pair'] ) ): ?> data-pair="<?= esc_attr( $items['pair'] ) ?>" data-docroot="<?= esc_attr( $_SERVER['DOCUMENT_ROOT'] ) ?>"<?php endif; ?>
              ><?php if ( isset( $items['unit'] ) ): ?><span class="unit"><?= esc_html( $items['unit'] ) ?></span><?php endif; ?>
<?php   endif; ?>
            </li>
<?php endforeach; ?>
          </ul>
          <p class="description info-list my1">
            <span class="mdi mdi-alert-circle-outline text-info"></span>
            <?= sprintf( __( 'Please refer to %sthe official documentation%s for the detailed behavior of each option constant.', IGNITOR ), '<a href="https://wordpress.org/support/article/editing-wp-config-php/" target="_blank">', '</a>' ) ?>
          </p>
          <label for="preview-wp-config"><?= __( 'Preview:', IGNITOR ) ?></label>
          <textarea id="preview-wp-config" name="add_config_fulltext" class="large-text code myh" rows="5" readonly></textarea>
          <button
            type="button"
            id="btn-update-wp-config"
            class="button button-primary mrh"><span class="mdi mdi-file-plus-outline"></span> <?= __( 'Update wp-config.php', IGNITOR ) ?></button>
          <button
            type="button"
            id="btn-restore-wp-config"
            class="button button-secondary"><span class="mdi mdi-file-undo-outline"></span> <?= __( 'Restore wp-config.php', IGNITOR ) ?></button>
          <p class="description info-list mt1">
            <span class="mdi mdi-alert-circle-outline text-info"></span>
            <?= __( 'The above settings will be inserted into marker (rows) from "BEGIN WP Ignitor" to "END WP Ignitor".', IGNITOR ) ?><br>
            <?= __( 'Only the checked options will be written to wp-config.php. And you can remove the settings by updating with all the unchecked.', IGNITOR ) ?><br>
            <?= __( 'If there is an option already defined in "wp-config.php", that will be applied with priority.', IGNITOR ) ?><br>
          </p>
        </div><!-- /.expansionable-block -->
        <div class="drawer-control"
          data-target="wp-config-contents"
          data-shrinked="<?= __( 'Display Details', IGNITOR ) ?>"
          data-stretched="<?= __( 'Shrink Display', IGNITOR ) ?>"
        >
          <i class="mdi mdi-chevron-down chevron-left"></i>
          <div class="drawer-label">
            <i class="mdi mdi-dots-vertical"></i>
            <p class="drawer-label-text"><?= __( 'Display Details', IGNITOR ) ?></p>
          </div>
          <i class="mdi mdi-chevron-down chevron-right"></i>
        </div>
      </td>
    </tr>
    <!-- Update ".htaccess" -->
    <tr>
      <th scope="row"><label for="htaccess"><?= __( 'Update ".htaccess"', IGNITOR ) ?></label></th>
      <td>
        <p class="description">
          <?= __( 'Improve the security of your site by preventing access to each WordPress core file from anyone other than the allowed sources.', IGNITOR ) ?><br>
        </p>
        <div class="expansionable-block" id="htaccess-contents">
          <div class="d-flex-row items-start">
            <label for="allow-host-new" class="fw600 my1 mr1" style="width: 120px;"><?= __( 'Allow Hosts', IGNITOR ) ?></label>
            <div>
              <ul id="allowed-hosts">
<?php foreach( $default_allowed_hosts as $hostname ): ?>
                <li>
                  <input type="text" value="<?= esc_attr( $hostname ) ?>" class="regular-text core" readonly
                  ><span class="surfix muted"><?= __( '(Auto Set by System)', IGNITOR ) ?></span>
                </li>
<?php endforeach;
      if ( $allowed_sources && array_key_exists( 'hosts', $allowed_sources ) && ! empty( $allowed_sources['hosts'] ) ) {
          foreach( $allowed_sources['hosts'] as $_i => $_host ): ?>
                <li>
                  <input type="text" id="allow-host-<?= $_i ?>" name="allow_hosts[<?= $_i ?>]" value="<?= esc_attr( $_host ) ?>" class="regular-text core" readonly
                  ><button
                    type="button"
                    id="remove-fluctuation-allow-host-<?= $_i ?>"
                    data-callback="reloadPreviewHtaccess"
                    class="button button-secondary"
                    aria-label="<?= __( 'Remove Host', IGNITOR ) ?>"><i class="mdi mdi-close"></i></button>
                </li>
<?php     endforeach;
      } ?>
              </ul>
              <div>
                <input type="text" id="allow-host-new" value="" class="regular-text core" placeholder="<?= __( 'Add New Hostname', IGNITOR ) ?>" pattern="^[-0-9a-zA-Z_.]+$"
                data-invalid-text="<?= __( 'Allowed characters: A-z0-9 - _ and colon only', IGNITOR ) ?>"><button
                  type="button"
                  id="add-fluctuation-host"
                  data-from-id="allow-host-new"
                  data-insert-to="allowed-hosts"
                  data-insert-id="allow-host"
                  data-insert-name="allow_hosts[%d]"
                  data-insert-classes="regular-text core"
                  data-callback="reloadPreviewHtaccess"
                  class="button button-secondary fluctuation"
                  aria-label="<?= __( 'Add New Hostname', IGNITOR ) ?>"><i class="mdi mdi-plus"></i></button>
              </div>
            </div>
          </div>
          <div class="d-flex-row items-start">
            <label for="allow-addr-new" class="fw600 my1 mr1" style="width: 120px;"><?= __( 'Allow Addresses', IGNITOR ) ?></label>
            <div>
              <ul id="allowed-addresses">
                <li>
                  <input type="text" value="<?= esc_attr( $this->get_remote_addr() ) ?>" class="normal-text core" readonly
                  ><span class="surfix muted"><?= __( '(Auto Set by System)', IGNITOR ) ?></span>
                </li>
<?php if ( $allowed_sources && array_key_exists( 'addrs', $allowed_sources ) && ! empty( $allowed_sources['addrs'] ) ) {
          foreach( $allowed_sources['addrs'] as $_i => $_addr ): ?>
                <li>
                  <input type="text" id="allow-addr-<?= $_i ?>" name="allow_addrs[<?= $_i ?>]" value="<?= esc_attr( $_addr ) ?>" class="normal-text core" readonly
                  ><button
                    type="button"
                    id="remove-fluctuation-allow-addr-<?= $_i ?>"
                    data-callback="reloadPreviewHtaccess"
                    class="button button-secondary"
                    aria-label="<?= __( 'Remove Address', IGNITOR ) ?>"><i class="mdi mdi-close"></i></button>
                </li>
<?php     endforeach;
      } ?>
              </ul>
              <div>
                <input type="text" id="allow-addr-new" value="" class="normal-text core" placeholder="<?= __( 'Add New Address', IGNITOR ) ?>" pattern="^[0-9.]+$"
                data-invalid-text="<?= __( 'Allowed characters: 0-9 and colons only', IGNITOR ) ?>"><button
                  type="button"
                  id="add-fluctuation-addr"
                  data-from-id="allow-addr-new"
                  data-insert-to="allowed-addresses"
                  data-insert-id="allow-addr"
                  data-insert-name="allow_addrs[%d]"
                  data-insert-classes="normal-text core"
                  data-callback="reloadPreviewHtaccess"
                  class="button button-secondary fluctuation"
                  aria-label="<?= __( 'Add New Address', IGNITOR ) ?>"><i class="mdi mdi-plus"></i></button>
              </div>
            </div>
          </div>
          <div class="d-flex-row items-start">
            <label for="allow-referer-new" class="fw600 my1 mr1" style="width: 120px;"><?= __( 'Allow Referers', IGNITOR ) ?></label>
            <div>
              <ul id="allowed-referers">
                <li>
                  <input type="text" value="https?://<?= esc_attr( $this->get_fqdn() ) ?>" class="medium-text core" readonly
                  ><span class="surfix muted"><?= __( '(Auto Set by System)', IGNITOR ) ?></span>
                </li>
<?php if ( $allowed_sources && array_key_exists( 'referers', $allowed_sources ) && ! empty( $allowed_sources['referers'] ) ) {
          foreach( $allowed_sources['referers'] as $_i => $_referer ): ?>
                <li>
                  <input type="text" id="allow-referer-<?= $_i ?>" name="allow_referers[<?= $_i ?>]" value="<?= esc_attr( $_referer ) ?>" class="medium-text core" readonly
                  ><button
                    type="button"
                    id="remove-fluctuation-allow-referer-<?= $_i ?>"
                    data-callback="reloadPreviewHtaccess"
                    class="button button-secondary"
                    aria-label="<?= __( 'Remove Referer', IGNITOR ) ?>"><i class="mdi mdi-close"></i></button>
                </li>
<?php     endforeach;
      } ?>
              </ul>
              <div>
                <input type="text" id="allow-referer-new" value="" class="medium-text core" placeholder="<?= __( 'Add New Referer', IGNITOR ) ?>" pattern="^https?://[\w/:%#\$&\?\(\)~\.=\+\-]+"
                data-invalid-text="<?= __( 'Incorrect format of inputted', IGNITOR ) ?>"><button
                  type="button"
                  id="add-fluctuation-referer"
                  data-from-id="allow-referer-new"
                  data-insert-to="allowed-referers"
                  data-insert-id="allow-referer"
                  data-insert-name="allow_referers[%d]"
                  data-insert-classes="medium-text core"
                  data-callback="reloadPreviewHtaccess"
                  class="button button-secondary fluctuation"
                  aria-label="<?= __( 'Add New Referer', IGNITOR ) ?>"><i class="mdi mdi-plus"></i></button>
              </div>
            </div>
          </div>
          <label for="preview-htaccess"><?= __( 'Preview:', IGNITOR ) ?></label>
          <textarea name="htaccess" id="htaccess" class="large-text code myh" rows="20" readonly><?= esc_textarea( $add_htaccess ) ?></textarea>
          <label class="fw600"><?= __( 'Advanced Settings:', IGNITOR ) ?></label>
          <ul id="advanced-htaccess-options">
            <li class="d-flex-row flex-nowrap items-start mbh">
              <input type="hidden" name="advanced_htaccess[prevent_php_files]" value="0">
              <input type="checkbox" id="advanced-option-1" name="advanced_htaccess[prevent_php_files]" value="1" class="prefix-toggle"
<?php if ( isset( $advanced_htaccess_options['prevent_php_files'] ) && $advanced_htaccess_options['prevent_php_files'] ): ?> checked="checked"<?php endif; ?>
              ><label for="advanced-option-1" class="plh">
                <?= __( 'Restrict access to core PHP files under the WordPress installation directory from anyone other than the allowed sources.', IGNITOR ) ?>
              </label>
            </li>
            <li class="d-flex-row flex-nowrap items-start mbh">
              <input type="hidden" name="advanced_htaccess[prevent_xmlrpc]" value="0">
              <input type="checkbox" id="advanced-option-2" name="advanced_htaccess[prevent_xmlrpc]" value="1" class="prefix-toggle"
<?php if ( isset( $advanced_htaccess_options['prevent_xmlrpc'] ) && $advanced_htaccess_options['prevent_xmlrpc'] ): ?> checked="checked"<?php endif; ?>
              ><label for="advanced-option-2" class="plh">
                <?= __( 'An access to "xmlrpc.php" only allow access that has user agent of "Jetpack", and other accesses redirect to "0.0.0.0" to avoid load.', IGNITOR ) ?>
              </label>
            </li>
            <li class="d-flex-row flex-nowrap items-start mbh">
              <input type="hidden" name="advanced_htaccess[uniform_login]" value="0">
              <input type="checkbox" id="advanced-option-3" name="advanced_htaccess[uniform_login]" value="1" class="prefix-toggle"
<?php if ( isset( $advanced_htaccess_options['uniform_login'] ) && $advanced_htaccess_options['uniform_login'] ): ?> checked="checked"<?php endif; ?>
              ><label for="advanced-option-3" class="plh">
                <?= __( 'Access to "wp-login.php" returns a uniform 404 response regardless of the connection source.', IGNITOR ) ?>
              </label>
            </li>
<?php if ( ! empty( $current_new_login ) ): ?>
            <li id="option-for-new-login" class="d-flex-row flex-nowrap items-start mbh">
              <input type="hidden" name="advanced_htaccess[new_login]" value="0">
              <input type="checkbox" id="advanced-option-4" name="advanced_htaccess[new_login]" value="1" class="prefix-toggle"
<?php if ( isset( $advanced_htaccess_options['new_login'] ) && $advanced_htaccess_options['new_login'] ): ?> checked="checked"<?php endif; ?>
              ><label for="advanced-option-4" class="plh">
                <?= sprintf( __( 'Close direct access to "wp-login.php" and set up a new login URL (%s).', IGNITOR ), '<code>'. home_url( $current_new_login['path'] ) .'</code>') ?>
                <?= sprintf( __( 'Detailed settings for the new login URL can be made in the relevant section of the "%sAuthorizations%s" tab.', IGNITOR ), '<a href="?page='. esc_attr( $query_args['page'] ) .'&tab=login">', '</a>' ) ?>
              </label>
            </li>
<?php else: ?>
            <input type="hidden" name="advanced_htaccess[new_login]" value="0">
<?php endif; ?>
            <li class="d-flex-row flex-nowrap items-start mbh">
              <input type="hidden" name="advanced_htaccess[avoid_author]" value="0">
              <input type="checkbox" id="advanced-option-5" name="advanced_htaccess[avoid_author]" value="1" class="prefix-toggle"
<?php if ( isset( $advanced_htaccess_options['avoid_author'] ) && $advanced_htaccess_options['avoid_author'] ): ?> checked="checked"<?php endif; ?>
              ><label for="advanced-option-5" class="plh">
                <?= __( "Avoid the discovery of an author's ID.", IGNITOR ) ?>
              </label>
            </li>
            <li class="d-flex-row items-start mbh">
              <input type="hidden" name="advanced_htaccess[apache_auth]" value="0">
              <input type="checkbox" id="advanced-option-6" name="advanced_htaccess[apache_auth]" value="1" class="prefix-toggle" style="margin-top:0.7em !important;"
<?php if ( isset( $advanced_htaccess_options['apache_auth'] ) && $advanced_htaccess_options['apache_auth'] ): ?> checked="checked"<?php endif; ?>
              ><label for="advanced-option-6" class="plh" style="margin-top: 0.5em; width: calc(100% - 28px);">
                <?= __( 'Set up apache authentication (Basic or Digest auth.) for this site URL.', IGNITOR ) ?>
                <?= sprintf( __( 'You can change the path of an authentication user file by using "%swpignitor_apache_auth_user_file_path%s" filter.', IGNITOR ), '<code>', '</code>' ) ?>
              </label>
              <div class="d-flex-row flex-nowrap items-start mth" style="width: 100%; padding-left: 24px; justify-content: space-between;">
                <label for="advanced-option-6-1" class="plh"><span class="fw600"><?= __( 'Authentication Type:', IGNITOR ) ?></span>
                  <select id="advanced-option-6-1" name="advanced_htaccess[apache_auth_type]">
                    <option value="basic" <?php selected( $apache_auth_type, 'basic' ) ?>><?= __( 'Basic Auth.', IGNITOR )  ?></option>
                    <option value="digest" <?php selected( $apache_auth_type, 'digest' ) ?>><?= __( 'Digest Auth.', IGNITOR ) ?></option>
                  </select>
                </label>
                <label for="advanced-option-6-2" class="plh"><?= __( 'AuthUserFile Path:', IGNITOR ) ?>
                  <input type="text" id="advanced-option-6-2" name="advanced_htaccess[apache_auth_user_file]" placeholder="<?= __( 'AuthUserFile Path', IGNITOR ) ?>" value="<?= $apache_auth_user_file ?>" class="regular-text" readonly>
                </label>
              </div>
              <div id="auth-accounts-wrapper" class="d-flex-row items-start" style="width: 100%; padding-left: 2.5em;">
                <label for="auth-id-new" class="fw600 my1 mr1 pth" style="width: 140px;"><?= __( 'Auth User Accounts', IGNITOR ) ?></label>
                <div class="my1">
                  <ul id="auth-accounts">
                    <li id="fluctuation-auth-account-pair" style="display: none;" hidden>
                      <input type="text" id="auth-id-%d" name="apache_auth_ids[%d]" value="" class="normal-text" readonly>
                      <i class="mdi mdi-slash-forward"></i>
                      <input type="password" id="auth-password-%d" name="apache_auth_passwords[%d]" value="" class="normal-text password-field" readonly>
                      <i class="mdi mdi-eye-outline field-toggle" data-on="mdi-eye-outline" data-off="mdi-eye-off-outline"></i
                      ><button
                        type="button"
                        id="remove-fluctuation-auth-account-%d"
                        class="button button-secondary"
                        aria-label="<?= __( 'Remove Account', IGNITOR ) ?>"><i class="mdi mdi-close"></i></button>
                    </li>
<?php if ( ! empty( $apache_auth_users ) ) {
          $_account_index = 0;
          foreach( $apache_auth_users as $_user => $_password ): ?>
                    <li>
                      <input type="text" id="auth-id-<?= $_account_index ?>" name="apache_auth_ids[<?= $_account_index ?>]" value="<?= esc_attr( $_user ) ?>" class="normal-text" readonly>
                      <i class="mdi mdi-slash-forward"></i>
                      <input type="password" id="auth-password-<?= $_account_index ?>" name="apache_auth_passwords[<?= $_account_index ?>]" value="<?= esc_attr( $_password ) ?>" class="normal-text password-field" readonly>
                      <i class="mdi mdi-eye-outline field-toggle" data-on="mdi-eye-outline" data-off="mdi-eye-off-outline"></i
                      ><button
                        type="button"
                        id="remove-fluctuation-auth-account-<?= $_account_index ?>"
                        class="button button-secondary"
                        aria-label="<?= __( 'Remove Account', IGNITOR ) ?>"><i class="mdi mdi-close"></i></button>
                    </li>
<?php         $_account_index++;
          endforeach;
      } ?>
                  </ul>
                  <div>
                    <input type="text" id="auth-id-new" value="" class="normal-text" placeholder="<?= __( 'Add New Auth ID', IGNITOR ) ?>" pattern=".{1,}">
                    <i class="mdi mdi-slash-forward"></i>
                    <input type="password" id="auth-password-new" value="" class="normal-text password-field" placeholder="<?= __( 'Add New Password', IGNITOR ) ?>" pattern=".{1,}">
                    <i class="mdi mdi-eye-outline field-toggle" data-on="mdi-eye-outline" data-off="mdi-eye-off-outline"></i
                    ><button
                      type="button"
                      id="add-fluctuation-auth-account"
                      data-template-id="fluctuation-auth-account-pair"
                      data-from-id="auth-id-new,auth-password-new"
                      data-insert-to="auth-accounts"
                      data-insert-id="auth-id,auth-password"
                      class="button button-secondary fluctuation-template"
                      aria-label="<?= __( 'Add New Account', IGNITOR ) ?>"><i class="mdi mdi-plus"></i></button>
                  </div>
                </div>
              </div>
            </li>
            <!-- /*
            <li class="d-flex-row flex-nowrap items-start mbh" style="line-height:30px;">
              <input type="hidden" name="advanced_htaccess[rewrite_plugins_dir]" value="0">
              <input type="checkbox" id="advanced-option7" name="advanced_htaccess[rewrite_plugins_dir]" value="1" class="prefix-toggle" style="margin-top:0.7em !important;"
<?php if ( isset( $advanced_htaccess_options['rewrite_plugins_dir'] ) && $advanced_htaccess_options['rewrite_plugins_dir'] ): ?> checked="checked"<?php endif; ?>
              ><label for="advanced-option-7" class="plh">
                <?= __( 'Rewrite URL path of the plugins directory.', IGNITOR ) ?>
              </label>
              <label for="advanced-option-7-1" class="plh"><?= __( 'New destination:', IGNITOR ) ?><code>{DOCUMENT_ROOT}/</code>
                <input type="text" id="advanced-option-7-1" name="advanced_htaccess[new_plugins_dest]" placeholder="<?= __( 'New Path', IGNITOR ) ?>" value="">
              </label>
            </li>
            <li class="d-flex-row flex-nowrap items-start mbh" style="line-height:30px;">
              <input type="hidden" name="advanced_htaccess[rewrite_themes_dir]" value="0">
              <input type="checkbox" id="advanced-option-8" name="advanced_htaccess[rewrite_themes_dir]" value="1" class="prefix-toggle" style="margin-top:0.7em !important;"
<?php if ( isset( $advanced_htaccess_options['rewrite_themes_dir'] ) && $advanced_htaccess_options['rewrite_themes_dir'] ): ?> checked="checked"<?php endif; ?>
              ><label for="advanced-option-8" class="plh">
                <?= __( 'Rewrite URL path of the themes directory.', IGNITOR ) ?>
              </label>
              <label for="advanced-option-8-1" class="plh"><?= __( 'New destination:', IGNITOR ) ?><code>{DOCUMENT_ROOT}/</code>
                <input type="text" id="advanced-option-8-1" name="advanced_htaccess[new_themes_dest]" placeholder="<?= __( 'New Path', IGNITOR ) ?>" value="">
              </label>
            </li>
            */ -->
          </ul>
          <div class="d-flex-row mt1">
            <button
              type="button"
              id="btn-reload-preview-htaccess"
              class="button hidden"
              hidden
            ></button>
            <button
              type="button"
              id="btn-update-htaccess"
              class="button button-primary mr1"><i class="mdi mdi-text-box-plus-outline"></i> <?= __( 'Insert Above Settings', IGNITOR ) ?></button>
            <button
              type="button"
              id="btn-restore-htaccess"
              class="button button-secondary"><i class="mdi mdi-text-box-remove-outline"></i> <?= __( 'Withdraw Above Settings', IGNITOR ) ?></button>
            <a href="https://timmehosting.de/htaccess-converter" target="_blank" class="ml2"><i class="mdi mdi-dock-window"></i> <?= __( 'Refer to configure for Nginx', IGNITOR ) ?></a>
          </div>
          <p class="description info-list mt1">
            <span class="mdi mdi-alert-circle-outline text-info"></span>
            <?= __( 'The directive (lines) from "BEGIN WP Ignitor Rules" to "END WP Ignitor Rules" are inserted before the directive (lines) from "BEGIN WordPress" to "END WordPress".', IGNITOR ) ?><br>
          </p>
        </div><!-- /.expansionable-block -->
        <div class="drawer-control"
          data-target="htaccess-contents"
          data-shrinked="<?= __( 'Display Details', IGNITOR ) ?>"
          data-stretched="<?= __( 'Shrink Display', IGNITOR ) ?>"
        >
          <i class="mdi mdi-chevron-down chevron-left"></i>
          <div class="drawer-label">
            <i class="mdi mdi-dots-vertical"></i>
            <p class="drawer-label-text"><?= __( 'Display Details', IGNITOR ) ?></p>
          </div>
          <i class="mdi mdi-chevron-down chevron-right"></i>
        </div>
      </td>
    </tr>
    <!-- Clear saved all settings -->
    <tr>
      <th scope="row"><label for="htaccess"><?= __( 'Clear All Settings', IGNITOR ) ?></label></th>
      <td>
        <button
          type="button"
          id="btn-clear-all-settings"
          class="button button-secondary"
        ><i class="mdi mdi-redo-variant"></i> <?= __( 'Clear All Saved Settings Of This Plugin', IGNITOR ) ?></button>
        <p class="description info-list mt1">
          <span class="mdi mdi-alert-circle-outline text-info"></span>
          <?= __( 'Clearing all saved settings will reset all options for this plugin. However, moved files and updated files will not be restored to the state before such executing.', IGNITOR ) ?><br>
          <?= sprintf( __( 'If you want to recover all updated files (not including files on the moved installation path), use the "%swpignitor_emergency_recovery%s" filter hook.', IGNITOR ), '<code>', '</code>' ) ?>
        </p>
      </td>
    </tr>
  </tbody>
</table>
<div class="inline-row btn-block"></div>
