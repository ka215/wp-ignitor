<?php
/**
 * Content body of the Authorizations tab of the plugin settings page.
 *
 * @package WpIgnitor
 * @since 1.0.0
 */
$current_new_login = $this->get_option( 'new_login' );
$allowed_login_ips = $this->get_option( 'allow_login_ips' );
$deny_login_redirect = $this->get_option( 'deny_login_redirect' );
?>
<p>
  <?= __( 'In this section you can control the login page that authenticates WordPress users.', IGNITOR ) ?>
</p>
<table class="form-table" role="presentation">
  <tbody>
    <!-- Enable New Login Page -->
    <tr>
      <th scope="row"><label for="new-login-on"><?= __( 'Enable New Login Page', IGNITOR ) ?></label></th>
      <td>
        <div class="d-flex-row flex-nowrap mbh">
          <input type="hidden" name="new_login_on" value="0">
          <label class="tgl">
            <input type="checkbox" id="new-login-on" name="new_login_on" value="1"<?php if ( ! empty( $current_new_login ) ): ?> checked="checked"<?php endif; ?>>
            <span class="tgl-btn"></span>
          </label>
          <label for="new-login-path" class="mxh"><?= __( 'New Login Path:', IGNITOR ) ?></label>
          <span class="prefix"><code><?= home_url( '/' ) ?></code></span>
          <input type="text" id="new-login-path" name="new_login_path"
            value="<?php if ( isset( $current_new_login['path'] ) && ! empty( $current_new_login['path'] ) ) { echo esc_attr( $current_new_login['path'] ); } ?>"
            class="regular-text" placeholder='e.g. "entrance"'
            data-error-title="<?= __( 'Missing Parameters', IGNITOR ) ?>"
            data-blank-error="<?= __( 'New login path has not been entered.', IGNITOR ) ?>">
        </div>
        <p class="description info-list mt1">
          <span class="mdi mdi-alert-circle-outline text-info"></span>
          <?= __( 'The new login page will not work just by enabling this option.', IGNITOR ) ?>
          <?= sprintf( __( 'You need to update the ".htaccess" file by checking to the corresponding advanced options in the "Update .htaccess" section in the "%sGlobals%s" tab.', IGNITOR ), '<a href="?page='. esc_attr( $query_args['page'] ) .'&tab=globals#option-for-new-login">', '</a>' ) ?>
        </p>
      </td>
    </tr>
    <!-- Origin Login Page Behavior -->
    <tr>
      <th scope="row"><label><?= __( 'Origin Login Page Behavior', IGNITOR ) ?></label></th>
      <td>
        <p class="myh">
          <?= __( 'After enabling the new login page, decides a behavior when is accessed the original login page.', IGNITOR ) ?>
        </p>
        <ul>
          <li><label class="fw600"><input type="radio" name="origin_login_behavior" value="401"
<?php if ( isset( $current_new_login['orig'] ) && $current_new_login['orig'] == 401 ): ?> checked="checked"<?php endif; ?>
            ><?= __( '401 Redirection', IGNITOR ) ?></label></li>
          <li><label class="fw600"><input type="radio" name="origin_login_behavior" value="403"
<?php if ( isset( $current_new_login['orig'] ) && $current_new_login['orig'] == 403 ): ?> checked="checked"<?php endif; ?>
            ><?= __( '403 Redirection', IGNITOR ) ?></label></li>
          <li><label class="fw600"><input type="radio" name="origin_login_behavior" value="404"
<?php if ( isset( $current_new_login['orig'] ) && $current_new_login['orig'] == 404 ): ?> checked="checked"
<?php elseif ( empty( $current_new_login ) ): ?> checked="checked"<?php endif; ?>
            ><?= __( '404 Redirection', IGNITOR ) ?></label></li>
          <li><label class="fw600"><input type="radio" name="origin_login_behavior" value="301"
<?php if ( isset( $current_new_login['orig'] ) && $current_new_login['orig'] == 301 ): ?> checked="checked"<?php endif; ?>
            ><?= __( 'Redirect to new login page', IGNITOR ) ?></label></li>
          <li><label class="fw600"><input type="radio" name="origin_login_behavior" value="200"
<?php if ( isset( $current_new_login['orig'] ) && $current_new_login['orig'] == 200 ): ?> checked="checked"<?php endif; ?>
            ><?= __( 'Redirect to home', IGNITOR ) ?></label></li>
        </ul>
        <p class="description info-list mt1">
          <span class="mdi mdi-alert-circle-outline text-info"></span>
          <?= __( 'If it accesses "wp-admin/" when we are not logged in, an auto redirect to the login page will be the same behavior too.', IGNITOR ) ?>
          <?= sprintf( __( 'As with the previous option, this setting will be applied after updating ".htaccess" in the "%sGlobals%s" tab.', IGNITOR ), '<a href="?page='. esc_attr( $query_args['page'] ) .'&tab=globals#option-for-new-login">', '</a>' ) ?>
        </p>
      </td>
    </tr>
    <!-- Set Login Permission -->
    <tr>
      <th scope="row"><label><?= __( 'Set Login Permission', IGNITOR ) ?></label></th>
      <td>
        <p class="myh">
          <?= __( 'Set the IP addresses of connection source that is allowed access to the login page.', IGNITOR ) ?><br>
          <?= sprintf( __( 'This setting is executed by the %slogin_init%s action on the login page, so if you have a restriction in ".htaccess", that will take precedence.', IGNITOR ), '<code>', '</code>' ) ?>
        </p>
        <div class="well pth">
          <label class="fw600"><?= __( 'Allowed Sources:', IGNITOR ) ?></label>
          <ul id="allowed-login-ips">
<?php if ( $allowed_login_ips && ! empty( $allowed_login_ips ) ) {
        foreach ( $allowed_login_ips as $_i => $_allowed_ip ) : ?>
            <li>
              <input type="text" id="allow-login-ip-<?= $_i ?>" name="allow_login_ips[<?= $_i ?>]" value="<?= esc_attr( $_allowed_ip ) ?>" class="normal-text core" readonly
              ><button
                type="button"
                id="remove-fluctuation-allow-login-ips-<?= $_i ?>"
                class="button button-secondary"
                aria-label="<?= __( 'Remove Source', IGNITOR ) ?>"><i class="mdi mdi-close"></i></button>
            </li>
<?php   endforeach;
      } ?>
          </ul>
          <div class="d-flex-row">
            <input type="text" id="allow-login-ips-new" value="" class="normal-text core" placeholder="<?= __( 'Add New IP Address', IGNITOR ) ?>" pattern="^[0-9.]+$"
            data-invalid-text="<?= __( 'Allowed characters: 0-9 and colons only', IGNITOR ) ?>"><button
              type="button"
              id="add-fluctuation-login-ip"
              data-from-id="allow-login-ips-new"
              data-insert-to="allowed-login-ips"
              data-insert-id="allow-login-ip"
              data-insert-name="allow_login_ips[%d]"
              data-insert-classes="normal-text core"
              class="button button-secondary fluctuation"
              aria-label="<?= __( 'Add New IP Address', IGNITOR ) ?>"><i class="mdi mdi-plus"></i></button>
          </div>
        </div>
        <div class="mt1">
          <label class="fw600"><?= __( 'Unauthorized connections redirect to:', IGNITOR ) ?></label>
          <select id="deny-redirect" name="deny_login_redirect">
            <?php if ( ! $deny_login_redirect ): ?><option value="">-----</option><?php endif; ?>
            <option value="401"<?php if ( $deny_login_redirect && ! empty( $deny_login_redirect ) && (int) $deny_login_redirect == 401 ): ?> selected="selected"<?php endif; ?>><?= __( '401 Redirection', IGNITOR ) ?></option>
            <option value="403"<?php if ( $deny_login_redirect && ! empty( $deny_login_redirect ) && (int) $deny_login_redirect == 403 ): ?> selected="selected"<?php endif; ?>><?= __( '403 Redirection', IGNITOR ) ?></option>
            <option value="404"<?php if ( $deny_login_redirect && ! empty( $deny_login_redirect ) && (int) $deny_login_redirect == 404 ): ?> selected="selected"<?php endif; ?>><?= __( '404 Redirection', IGNITOR ) ?></option>
          </select>
          <p class="description info-list mt1">
            <span class="mdi mdi-alert-circle-outline text-info"></span>
            <?= __( 'The permission IP address settings for the login page apply regardless of whether the new login page is enabled or disabled.', IGNITOR ) ?><br>
            <?= __( 'If you do not set anything, all visitors can access the login page.', IGNITOR ) ?>
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>
<div class="inline-row btn-block">
  <button type="button" id="btn-commit-login-settings" class="button button-primary"><?= __( 'Commit Changes', IGNITOR ) ?></button>
</div>
