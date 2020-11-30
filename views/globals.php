<?php
//var_dump( get_defined_vars() );
$add_htaccess = $this->generate_htaccess();
$current_wp_config_path = $this->get_wp_config_path();
$can_move_wp_config = strpos( $current_wp_config_path, ABSPATH ) !== false;
$editable_constant_list = $this->get_editable_constants();
$current_wp_config_options = $this->get_option( 'wp_config_options' ) ?? [];
$default_allowed_hosts = $this->get_remote_hosts();
$allowed_sources = $this->get_option( 'allow_sources' ) ?? [];
$advanced_htaccess_options = $this->get_option( 'advanced_htaccess' ) ?? [];
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
            <code><?= $_SERVER['DOCUMENT_ROOT'] ?></code>
          </li>
          <li>
            <span class="mdi mdi-<?php if ( is_writable( ABSPATH ) ) : ?>check-bold text-success<?php else : ?>close-thick text-denger<?php endif; ?>"></span>
            <span class="mxh fw600"><?= __( 'Install Directory:', IGNITOR ) ?></span>
            <code><?= ABSPATH ?></code>
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
          <input type="text" id="install-path" value="{DOCUMENT_ROOT}/<?= $this->get_wp_install_dir() ?>" class="normal-text code" readonly>
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
            __data-before-show="disableButton"
            __data-shown="disableButton"
            __data-before-hide="test"
            __data-hidden="selfRedirect"
            class="button button-secondary"><?= __( 'Move To', IGNITOR ) ?></button>
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
        <p class="description">
          <span class="mdi mdi-alert-circle-outline text-info"></span>
          <?= __( 'Cannot move to the path of directory that already exists, or to the path of directly document root.', IGNITOR ) ?><br>
          <?= __( 'WP-Ignitor make a new directory before moving.', IGNITOR ) ?><br>
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
          <input type="text" id="current-wp-config-path" value="<?= $this->get_wp_config_path() ?>" class="medium-text code" readonly>
<?php if ( $can_move_wp_config ): ?>
          <span class="gap"><i class="mdi mdi-arrow-right"></i></span>
          <button
            type="button"
            id="btn-move-wp-config"
            data-bind="dialog"
            data-persistent="true"
            __data-foot="dismiss-outside"
            data-content="moveWpConfig"
            data-hidden="selfReload"
            class="button button-secondary"><?= __( 'Move To One Upper Level Path', IGNITOR ) ?></button>
        </div>
        <p class="description text-warn"><span class="mdi mdi-alert-rhombus"></span> <?= __( 'Recommend that you move the file up one level for better security.', IGNITOR ) ?></p>
<?php else : ?>
          <p class="description text-success"><span class="mdi mdi-check-circle-outline"></span> <?= __( 'It has already been placed in the correct position recommended for security.', IGNITOR ) ?></p>
        </div>
<?php endif; ?>
      </td>
    </tr>
    <!-- Update "wp-config.php" -->
    <tr>
      <th scope="row"><label for=""><?= __( 'Update "wp-config.php"', IGNITOR ) ?></label></th>
      <td>
        <p class="description">
          <?= __( 'Enables or disables various functions by constants implemented in WordPress in advance. This settings will be written directly to "wp-config.php".', IGNITOR ) ?><br>
        </p>
        <ul id="wp-option-list">
<?php foreach ( $editable_constant_list as $const_name => $items ): 
        $is_checked_item = array_key_exists( strtoupper( $const_name ), $current_wp_config_options );
?>
          <li class="d-flex-row mbh">
            <label class="mr1"><input type="checkbox" id="chk-<?= $const_name ?>" class="toggle-option mrh"<?php if ( $is_checked_item ): ?> checked="checked"<?php endif; ?>><?= $items['label'] ?>:</label>
<?php   if ( 'toggle' === $items['class'] ): 
          $_checked = $is_checked_item ? $current_wp_config_options[strtoupper( $const_name )] : ( isset( $items['checked'] ) && $items['checked'] );
?>
            <label class="tgl">
              <input type="<?= $items['type'] ?>" id="<?= $const_name ?>" name="wp_config[<?= strtoupper( $const_name ) ?>]" value="<?= $items['value'] ?>"
                <?php if ( $_checked ): ?> checked="checked"<?php endif; ?>
              ><span class="tgl-btn"></span>
            </label>
<?php    else: 
          $_value = $is_checked_item ? $current_wp_config_options[strtoupper( $const_name )] : $items['value'];
?>
            <input type="<?= $items['type'] ?>" id="<?= $const_name ?>" name="wp_config[<?= strtoupper( $const_name ) ?>]" value="<?= $_value ?>" class="<?= $items['class'] ?>"
              <?php if ( isset( $items['placeholder'] ) ): ?> placeholder="<?= $items['placeholder'] ?>"<?php endif; ?>
              <?php if ( isset( $items['pair'] ) ): ?> data-pair="<?= $items['pair'] ?>" data-docroot="<?= $_SERVER['DOCUMENT_ROOT'] ?>"<?php endif; ?>
            ><?php if ( isset( $items['unit'] ) ): ?><span class="unit"><?= $items['unit'] ?></span><?php endif; ?>
<?php   endif; ?>
          </li>
<?php endforeach; ?>
        </ul>
        <label for="preview-wp-config"><?= __( 'Preview:', IGNITOR ) ?></label>
        <textarea id="preview-wp-config" name="add_config_fulltext" class="large-text code myh" rows="5" readonly></textarea>
        <button
          type="button"
          id="btn-update-wp-config"
          class="button button-secondary"><?= __( 'Update wp-config.php', IGNITOR ) ?></button>
        <p class="description mt1">
          <span class="mdi mdi-alert-circle-outline text-info"></span>
          <?= __( 'The above settings will be inserted into marker (rows) from "BEGIN WP Ignitor" to "END WP Ignitor".', IGNITOR ) ?><br>
          <?= __( 'Only the checked options will be written to wp-config.php. And you can remove the settings by updating with all the unchecked.', IGNITOR ) ?><br>
          <?= __( 'If there is an option already defined in "wp-config.php", that will be applied with priority.', IGNITOR ) ?>
        </p>
      </td>
    </tr>
    <!-- Update ".htaccess" -->
    <tr>
      <th scope="row"><label for="htaccess"><?= __( 'Update ".htaccess"', IGNITOR ) ?></label></th>
      <td>
        <p class="description">
          <?= __( 'Improve the security of your site by preventing access to each WordPress core file from anyone other than the allowed sources.', IGNITOR ) ?><br>
        </p>
        <div class="d-flex-row items-start">
          <label for="allow-host-new" class="fw600 my1 mr1" style="width: 120px;"><?= __( 'Allow Hosts', IGNITOR ) ?></label>
          <div>
            <ul id="allowed-hosts">
<?php foreach( $default_allowed_hosts as $hostname ): ?>
              <li>
                <input type="text" value="<?= $hostname ?>" class="regular-text core" readonly
                ><span class="surfix muted"><?= __( '(Auto Set by System)', IGNITOR ) ?></span>
              </li>
<?php endforeach;
      if ( array_key_exists( 'hosts', $allowed_sources ) && ! empty( $allowed_sources['hosts'] ) ) {
          foreach( $allowed_sources['hosts'] as $_i => $_host ): ?>
              <li>
                <input type="text" id="allow-host-<?= $_i ?>" name="allow_hosts[<?= $_i ?>]" value="<?= $_host ?>" class="regular-text core" readonly
                ><button type="button" id="remove-fluctuation-allow-host-<?= $_i ?>" data-callback="reloadPreviewHtaccess" class="button button-secondary" aria-label="<?= __( 'Remove Host', IGNITOR ) ?>"><i class="mdi mdi-close-thick"></i></button>
              </li>
<?php     endforeach;
      } ?>
            </ul>
            <div>
              <input type="text" id="allow-host-new" value="" class="regular-text core" placeholder="<?= __( 'Add New Hostname', IGNITOR ) ?>" pattern="^[-0-9a-zA-Z_.]+$"
              ><button
                type="button"
                id="add-fluctuation-host"
                data-from-id="allow-host-new"
                data-insert-to="allowed-hosts"
                data-insert-id="allow-host"
                data-insert-name="allow_hosts[%d]"
                data-insert-classes="regular-text core"
                data-callback="reloadPreviewHtaccess"
                class="button button-secondary fluctuation"
                aria-label="<?= __( 'Add New Hostname', IGNITOR ) ?>"><i class="mdi mdi-plus-thick"></i></button>
            </div>
          </div>
        </div>
        <div class="d-flex-row items-start">
          <label for="allow-addr-new" class="fw600 my1 mr1" style="width: 120px;"><?= __( 'Allow Addresses', IGNITOR ) ?></label>
          <div>
            <ul id="allowed-addresses">
              <li>
                <input type="text" value="<?= $this->get_remote_addr() ?>" class="normal-text core" readonly
                ><span class="surfix muted"><?= __( '(Auto Set by System)', IGNITOR ) ?></span>
              </li>
<?php if ( array_key_exists( 'addrs', $allowed_sources ) && ! empty( $allowed_sources['addrs'] ) ) {
          foreach( $allowed_sources['addrs'] as $_i => $_addr ): ?>
              <li>
                <input type="text" id="allow-addr-<?= $_i ?>" name="allow_addrs[<?= $_i ?>]" value="<?= $_addr ?>" class="normal-text core" readonly
                ><button type="button" id="remove-fluctuation-allow-addr-<?= $_i ?>" data-callback="reloadPreviewHtaccess" class="button button-secondary" aria-label="<?= __( 'Remove Address', IGNITOR ) ?>"><i class="mdi mdi-close-thick"></i></button>
              </li>
<?php     endforeach;
      } ?>
            </ul>
            <div>
              <input type="text" id="allow-addr-new" value="" class="normal-text core" placeholder="<?= __( 'Add New Address', IGNITOR ) ?>" pattern="^[0-9.]+$"
              ><button
                type="button"
                id="add-fluctuation-addr"
                data-from-id="allow-addr-new"
                data-insert-to="allowed-addresses"
                data-insert-id="allow-addr"
                data-insert-name="allow_addrs[%d]"
                data-insert-classes="normal-text core"
                data-callback="reloadPreviewHtaccess"
                class="button button-secondary fluctuation"
                aria-label="<?= __( 'Add New Address', IGNITOR ) ?>"><i class="mdi mdi-plus-thick"></i></button>
            </div>
          </div>
        </div>
        <div class="d-flex-row items-start">
          <label for="allow-referer-new" class="fw600 my1 mr1" style="width: 120px;"><?= __( 'Allow Referers', IGNITOR ) ?></label>
          <div>
            <ul id="allowed-referers">
              <li>
                <input type="text" value="https?://<?= $this->get_fqdn() ?>" class="medium-text core" readonly
                ><span class="surfix muted"><?= __( '(Auto Set by System)', IGNITOR ) ?></span>
              </li>
<?php if ( array_key_exists( 'referers', $allowed_sources ) && ! empty( $allowed_sources['referers'] ) ) {
          foreach( $allowed_sources['referers'] as $_i => $_referer ): ?>
              <li>
                <input type="text" id="allow-referer-<?= $_i ?>" name="allow_referers[<?= $_i ?>]" value="<?= $_referer ?>" class="medium-text core" readonly
                ><button type="button" id="remove-fluctuation-allow-referer-<?= $_i ?>" data-callback="reloadPreviewHtaccess" class="button button-secondary" aria-label="<?= __( 'Remove Referer', IGNITOR ) ?>"><i class="mdi mdi-close-thick"></i></button>
              </li>
<?php     endforeach;
      } ?>
            </ul>
            <div>
              <input type="text" id="allow-referer-new" value="" class="medium-text core" placeholder="<?= __( 'Add New Address', IGNITOR ) ?>"
              ><button
                type="button"
                id="add-fluctuation-referer"
                data-from-id="allow-referer-new"
                data-insert-to="allowed-referers"
                data-insert-id="allow-referer"
                data-insert-name="allow_referers[%d]"
                data-insert-classes="medium-text core"
                data-callback="reloadPreviewHtaccess"
                class="button button-secondary fluctuation"
                aria-label="<?= __( 'Add New Referer', IGNITOR ) ?>"><i class="mdi mdi-plus-thick"></i></button>
            </div>
          </div>
        </div>
        <label for="preview-htaccess"><?= __( 'Preview:', IGNITOR ) ?></label>
        <textarea name="htaccess" id="htaccess" class="large-text code myh" rows="20" readonly><?= $add_htaccess ?></textarea>
        <label class="fw600"><?= __( 'Advanced Settings:', IGNITOR ) ?></label>
        <ul id="advanced-htaccess-options">
           <li class="d-flex-row flex-nowrap items-start mbh">
              <input type="hidden" name="advanced_htaccess[prevent_xmlrpc]" value="0">
              <input type="checkbox" id="advanced-option-1" name="advanced_htaccess[prevent_xmlrpc]" value="1" class="prefix-toggle"
<?php if ( isset( $advanced_htaccess_options['prevent_xmlrpc'] ) && $advanced_htaccess_options['prevent_xmlrpc'] ): ?> checked="checked"<?php endif; ?>
              ><label for="advanced-option-1" class="plh">
                <?= __( 'An access to "xmlrpc.php" only allow access that has user agent of "Jetpack", and other accesses redirect to "0.0.0.0" to avoid load.', IGNITOR ) ?>
              </label>
           </li>
           <li class="d-flex-row flex-nowrap items-start mbh">
              <input type="hidden" name="advanced_htaccess[uniform_login]" value="0">
              <input type="checkbox" id="advanced-option-2" name="advanced_htaccess[uniform_login]" value="1" class="prefix-toggle"
<?php if ( isset( $advanced_htaccess_options['uniform_login'] ) && $advanced_htaccess_options['uniform_login'] ): ?> checked="checked"<?php endif; ?>
<?php if ( isset( $advanced_htaccess_options['new_login'] ) && $advanced_htaccess_options['new_login'] ): ?> readonly disabled<?php endif; ?>
              ><label for="advanced-option-2" class="plh">
                <?= __( 'Access to "wp-login.php" returns a uniform 404 response regardless of the connection source.', IGNITOR ) ?>
              </label>
           </li>
           <li class="d-flex-row flex-nowrap items-start mbh">
              <input type="hidden" name="advanced_htaccess[new_login]" value="0">
              <input type="checkbox" id="advanced-option-3" name="advanced_htaccess[new_login]" value="1" class="prefix-toggle"
<?php if ( isset( $advanced_htaccess_options['new_login'] ) && $advanced_htaccess_options['new_login'] ): ?> checked="checked"<?php endif; ?>
<?php if ( isset( $advanced_htaccess_options['uniform_login'] ) && $advanced_htaccess_options['uniform_login'] ): ?> readonly disabled<?php endif; ?>
              ><label for="advanced-option-3" class="plh muted"
<?php if ( isset( $advanced_htaccess_options['uniform_login'] ) && $advanced_htaccess_options['uniform_login'] ): ?> disabled<?php endif; ?>>
                <?= sprintf( __( 'Close direct access to "wp-login.php" and set up a new login URL (%s).', IGNITOR ), '<code>'. home_url( 'entrance/' ) .'</code>') ?>
                <?= sprintf( __( 'Detailed settings for the new login URL can be made in the relevant section of the "%sAuthorizations%s" tab.', IGNITOR ), '<a href="?page='. esc_attr( $query_args['page'] ) .'&tab=login">', '</a>' ) ?>
              </label>
           </li>
           <li class="d-flex-row flex-nowrap items-start mbh">
              <input type="hidden" name="advanced_htaccess[avoid_author]" value="0">
              <input type="checkbox" id="advanced-option-4" name="advanced_htaccess[avoid_author]" value="1" class="prefix-toggle"
<?php if ( isset( $advanced_htaccess_options['avoid_author'] ) && $advanced_htaccess_options['avoid_author'] ): ?> checked="checked"<?php endif; ?>
              ><label for="advanced-option-4" class="plh">
                <?= __( "Avoid the discovery of an author's ID.", IGNITOR ) ?>
              </label>
           </li>
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
            class="button button-secondary"><?= __( 'Insert above configure to .htaccess', IGNITOR ) ?></button>
          <a href="https://timmehosting.de/htaccess-converter" target="_blank" class="ml2"><i class="mdi mdi-dock-window"></i> <?= __( 'Please convert to the config for Nginx here.', IGNITOR ) ?></a>
        </div>
        <p class="description mt1">
          <span class="mdi mdi-alert-circle-outline text-info"></span>
          <?= __( 'The directive (lines) from "BEGIN WP Ignitor Rules" to "END WP Ignitor Rules" are inserted before the directive (lines) from "BEGIN WordPress" to "END WordPress".', IGNITOR ) ?><br>
        </p>
      </td>
    </tr>
  </tbody>
</table>
<div class="inline-row btn-block"></div>
