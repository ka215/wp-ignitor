<?php
//var_dump( get_defined_vars() );
$add_htaccess = $this->generate_htaccess();
$current_wp_config_path = $this->get_wp_config_path();
$can_move_wp_config = strpos( $current_wp_config_path, ABSPATH ) !== false;

// $this->compressTarball( ABSPATH, [ '.htaccess', 'wp-config.php' ] );
// $this->extractTarball( 'C:\\xampp\\htdocs\\dev.ka2.org\\wpignitor_temp.tgz', 'C:\\xampp\\htdocs\\dev.ka2.org\\' );
//$this->is_valid_phar();
//$this->moveto_new_install_path( $_SERVER['DOCUMENT_ROOT'] . '/new/' );
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
          <li><span class="mdi mdi-<?php if ( is_writable( $_SERVER['DOCUMENT_ROOT'] ) ) : ?>check-bold text-success<?php else : ?>close-thick text-denger<?php endif; ?>"></span> DOCUMENT_ROOT: <code><?= $_SERVER['DOCUMENT_ROOT'] ?></code></li>
          <li><span class="mdi mdi-<?php if ( is_writable( ABSPATH ) ) : ?>check-bold text-success<?php else : ?>close-thick text-denger<?php endif; ?>"></span> Install Directory: <code><?= ABSPATH ?></code></li>
          <li><span class="mdi mdi-<?php if ( is_writable( $this->get_wp_config_path() ) ) : ?>check-bold text-success<?php else : ?>close-thick text-denger<?php endif; ?>"></span> wp-config.php: <code><?= $this->get_wp_config_path() ?></code></li>
          <li><span class="mdi mdi-<?php if ( is_writable( $this->get_htaccess_path() ) ) : ?>check-bold text-success<?php else : ?>close-thick text-denger<?php endif; ?>"></span> .htaccess: <code><?= $this->get_htaccess_path() ?: __( 'None' ) ?></code></li>
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
      <th scope="row"><label for="current-wp-config-path"><?= __( 'Move "wp-config.php" file', IGNITOR ) ?></label></th>
      <td>
        <div class="d-flex-row">
          <input type="text" id="current-wp-config-path" value="<?= $this->get_wp_config_path() ?>" class="medium-text code" readonly>
<?php if ( $can_move_wp_config ) : ?>
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
          <?= __( 'Enables or disables various functions by constants implemented in WordPress in advance. This settings will be overwritten directly to "wp-config.php".', IGNITOR ) ?>
        </p>
        <button
          type="button"
          id="btn-update-wp-config"
          class="button button-secondary"><?= __( 'Update wp-config.php', IGNITOR ) ?></button>
      </td>
    </tr>
    <!-- Update ".htaccess" -->
    <tr>
      <th scope="row"><label for="htaccess" class="required"><?= __( 'Update ".htaccess"', IGNITOR ) ?></label></th>
      <td>
        <p class="description">
          <?= __( 'Improve the security of your site by deterring access to each WordPress core file from anyone other than the allowed sources.', IGNITOR ) ?><br>
        </p>
        <textarea name="htaccess" id="htaccess" class="large-text code myh" rows="20" readonly><?= $add_htaccess ?></textarea>
        <div class="d-flex-row">
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
<div class="inline-row btn-block">
  <?php /* submit_button( __( 'Save Changes', IGNITOR ), 'primary', null, false ); */ ?>
</div>
