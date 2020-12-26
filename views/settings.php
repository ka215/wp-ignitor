<?php
/**
 * Container template for plugin settings page.
 *
 * @package WpIgnitor
 * @since 1.0.0
 */
$tab_content_path = __DIR__ .'/'. $current_tab .'.php';
?>
<div class="wrap" data-fixed-backdrop="true">
  <h1 class="wp-heading-inline"
  ><img src="<?= esc_url( $this->paths['assets_dir_url'] ) ?>images/icon.svg" height="26" class="prefix-logo"
  ><?= __( 'WP Ignitor Settings', IGNITOR ) ?></h1>
<?php if ( isset( $message ) && isset( $state ) ) :
    $_classes = [ 'notice', 'notice-' . esc_attr( $state ), 'is-dismissible' ];
?>
  <div class="<?= esc_attr( implode( ' ', $_classes ) ) ?>" >
    <p><?= $message ?></p>
  </div>
<?php else : ?>
  <hr class="wp-header-end">
<?php endif; ?>
  <form method="post" id="wpignitor-form" action="<?= esc_url( $self_url ) ?>" enctype="multipart/form-data">
  <?php wp_nonce_field( $nonce_key ); ?>
  <input type="hidden" name="tab" value="<?= esc_attr( $current_tab ) ?>">
  <input type="hidden" name="method" value="">
  <!-- Navigation Tabs -->
  <nav class="nav-tab-wrapper">
<?php foreach ( $tabs as $_name => $_data ) : 
    $to_link = sprintf( '?page=%s&tab=%s', $query_args['page'], $_name );
    $active  = $_name === $current_tab ? ' nav-tab-active' : '';
?>
    <a href="<?= esc_attr( $to_link ) ?>" class="nav-tab<?= esc_attr( $active ) ?>"><i class="mdi <?= esc_attr( $_data['icon'] ) ?>"></i> <?= esc_html( $_data['label'] ) ?></a>
<?php endforeach; ?>
  </nav>
  <!-- Tab Content -->
  <div class="tab-content" data-tab-name="<?= esc_attr( $current_tab ) ?>">
<?php
if ( file_exists( $tab_content_path ) ) {
    include $tab_content_path;
} else {
    printf( '<p>%s</p>', __( 'Failed to load tab content.', IGNITOR ) );
}
?>
  </div><!-- /.tab-content -->
  </form>
  <br class="clear">
</div>