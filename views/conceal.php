<?php
//var_dump( get_defined_vars() );
$front_index_html = $this->get_frontend_html( 'head', true );
?>
<p></p>
<table class="form-table" role="presentation">
  <tbody>
    <!-- Update HTML Header -->
    <tr>
      <th scope="row"><label for="html" class="required"><?= __( 'Frontend HTML header', IGNITOR ) ?></label></th>
      <td>
        <textarea name="html" id="html" class="large-text code" rows="20" readonly><?= $front_index_html ?></textarea>
      </td>
    </tr>
  </tbody>
</table>
<div class="inline-row btn-block"></div>
