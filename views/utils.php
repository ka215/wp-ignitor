<?php
/**
 * Content body of the utilities tab of the plugin settings page.
 *
 * @package WpIgnitor
 * @since 1.0.0
 */
?>
<table class="form-table" role="presentation">
  <tbody>
    <!-- Unlock Core Updater -->
    <tr>
      <th scope="row"><label for="btn-unlock-core-updater"><?= __( 'Unlock Core Updater', IGNITOR ) ?></label></th>
      <td>
        <p class="description myh">
          <?= __( 'If you are in a waiting state where the "Another update is currently in progress." is notified due likes to accidental page transition while updating WordPress, use this option to able to unlock before the waiting time of 15 minutes elapses.', IGNITOR ) ?><br>
        </p>
        <button
          type="button"
          id="btn-unlock-core-updater"
          class="button button-primary"
        ><i class="mdi mdi-lock-open-variant-outline"></i> <?= __( 'Unlock', IGNITOR ) ?></button>
      </td>
    </tr>
<?php /*
    <!-- Utility Option -->
    <tr>
      <th scope="row"><label for=""><?= __( 'Utility Option', IGNITOR ) ?></label></th>
      <td>
        Utility Content
      </td>
    </tr>
*/ ?>
  </tbody>
</table>
<div class="inline-row btn-block"><?php /* submit_button( __( 'Save Changes', IGNITOR ), 'primary', null, false ); */ ?></div>
