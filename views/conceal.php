<?php
/**
 * Content body of the conceals tab of the plugin settings page.
 *
 * @package WpIgnitor
 * @since 1.0.0
 */
$front_index_html = $this->get_frontend_html( '/', 'head', true );
$cleanup_items = $this->get_cleanup_items();
$rest_behavior_options = $this->get_option( 'rest_behavior' );
?>
<p>
  <?= __( 'In this setting section, you can remove the elements that is assumed this site is built by WordPress from the outputting HTML source to keep the site confidential.', IGNITOR ) ?>
</p>
<table class="form-table" role="presentation">
  <tbody>
    <!-- Cleanup Frontend HTML -->
    <tr>
      <th scope="row"><label for="target-page-path"><?= __( 'Cleanup Frontend HTML', IGNITOR ) ?></label></th>
      <td>
        <div>
          <label for="target-page-path" class="fw600"><?= __( 'Target page path to view:', IGNITOR ) ?></label>
          <span class="prefix"><code><?= home_url() ?></code></span>
          <input type="text" id="target-page-path" name="target_page_path" value="/" placeholder="/">
        </div>
        <div class="expansionable-block" id="cleanup-contents">
          <p class="description myh">
            <?= sprintf( __( 'Actual view of the %s tag for the specified page as follows:', IGNITOR ), '<code>&lt;HEAD&gt;</code>' ) ?>
          </p>
          <textarea id="html" class="large-text code" rows="20" readonly><?= esc_textarea( $front_index_html ) ?></textarea>
          <ul id="cleanup-items">
<?php foreach ( $cleanup_items as $name => $items ): ?>
            <li class="d-flex-row mbh">
              <label class="tgl" data-follow-color="inherit"><?= $items['label'] ?>
                <input type="checkbox" id="<?= esc_attr( $name ) ?>" name="cleanup[<?= $name ?>]" value="1"<?php if ( $items['checked'] ): ?> checked="checked"<?php endif; ?>>
                <span class="tgl-btn"></span>
              </label>
            </li>
<?php endforeach; ?>
          </ul>
          <button
            type="button"
            id="btn-commit-to-cleanup"
            class="button button-primary"><i class="mdi mdi-broom"></i> <?= __( 'Commit Settings', IGNITOR ) ?></button>
          <p class="description info-list mt1">
            <span class="mdi mdi-alert-circle-outline text-info"></span>
            <?= __( 'Their committed settings will be reflected immediately in the front end.', IGNITOR ) ?>
          </p>
        </div><!-- /.expansionable-block -->
        <div class="drawer-control"
          data-target="cleanup-contents"
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
    <!-- REST API Routes -->
    <tr>
      <th scope="row"><label for=""><?= __( 'REST API Routes', IGNITOR ) ?></label></th>
      <td>
        <p class="description myh">
          <?= __( 'Choose the behavior for each namespace in the REST API routes.', IGNITOR ) ?>
        </p>
        <ul id="rest-namespaces">
<?php foreach ( $this->rest_namespaces as $namespace ):
        $slug_ns = str_replace( '/', '-', $namespace );
        $todo = null;
        $state = null;
        if ( is_array( $rest_behavior_options ) && array_key_exists( $namespace, $rest_behavior_options ) ) {
            $todo = $rest_behavior_options[$namespace]['todo'];
            $state = $rest_behavior_options[$namespace]['state'];
        }
?>
          <li class="d-flex-row mbh">
            <label for="rest-namespace-<?= $slug_ns ?>" class="mr-1 fw600 normal-text"><i class="mdi mdi-chevron-right muted"></i> <?= $namespace ?></label>
            <select id="rest-namespace-<?= $slug_ns ?>" name="namespaces[<?= $namespace ?>]" class="mr1">
              <option value="allow_all"<?php if ( 'allow_all' === $todo ): ?> selected<?php endif; ?>><?= __( 'Allow All', IGNITOR ) ?></option>
              <option value="allow_self"<?php if ( 'allow_self' === $todo ): ?> selected<?php endif; ?>><?= __( 'Allow Self Only', IGNITOR ) ?></option>
              <option value="allow_jetpack"<?php if ( 'allow_jetpack' === $todo ): ?> selected<?php endif; ?>><?= __( 'Allow Jetpack', IGNITOR ) ?></option>
              <option value="deny_all"<?php if ( 'deny_all' === $todo ): ?> selected<?php endif; ?>><?= __( 'Deny All', IGNITOR ) ?></option>
              <option value="redirect"<?php if ( 'redirect' === $todo ): ?> selected<?php endif; ?>><?= __( 'Redirection', IGNITOR ) ?></option>
            </select>
            <span class="gap muted"><?= __( 'HTTP code if deny:', IGNITOR ) ?></span>
            <select id="http-code-<?= $slug_ns ?>" name="http_code[<?= $namespace ?>]"<?php if ( 'allow_all' === $todo ): ?> disabled<?php endif; ?>>
              <option value="200" hidden> ----- </option>
              <option value="301"<?php if ( 301 == $state ): ?> selected<?php endif; ?>><?= __( '301 Moved Permanently', IGNITOR ) ?></option>
              <option value="302"<?php if ( 302 == $state ): ?> selected<?php endif; ?>><?= __( '302 Found', IGNITOR ) ?></option>
              <option value="401"<?php if ( 401 == $state ): ?> selected<?php endif; ?>><?= __( '401 Unauthorized', IGNITOR ) ?></option>
              <option value="403"<?php if ( 403 == $state ): ?> selected<?php endif; ?>><?= __( '403 Forbidden', IGNITOR ) ?></option>
              <option value="404"<?php if ( 404 == $state ): ?> selected<?php endif; ?>><?= __( '404 Not Found', IGNITOR ) ?></option>
            </select>
          </li>
<?php endforeach; ?>
        </ul>
        <button
          type="button"
          id="btn-save-rest-behavior"
          class="button button-primary"><i class="mdi mdi-routes"></i> <?= __( 'Save Behavior', IGNITOR ) ?></button>
        <p class="description info-list mt1">
          <span class="mdi mdi-alert-circle-outline text-info"></span>
          <?= __( 'Control the behavior of "wp-json/", which is the root of the REST route, in the "/" only namespace.', IGNITOR ) ?>
        </p>
      </td>
    </tr>
  </tbody>
</table>
<div class="inline-row btn-block"></div>
