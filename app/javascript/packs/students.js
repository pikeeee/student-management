import $ from 'jquery';
function hello(name) {
  console.log('hello' + name);
}
$(() =>
      $("a.delete-anchor-reason-descs-button").on('click', () =>
        id = that.data('reason-descs-id'),
        $.ajax({
          type: 'DELETE',
          url: '/students/' + id,
          success: $.pike_table.ajax.reload(),
          error:
            console.log('loi')
            })
    )
);
