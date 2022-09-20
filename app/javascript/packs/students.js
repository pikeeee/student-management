import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import swal from 'sweetalert';

jQuery(document).ready(function() {
  $('#pike_table').dataTable({
    "processing": true,
    "serverSide": true,
    "ajax": {
      "url": $('#pike_table').data('source')
    },
    "pagingType": "full_numbers",
    "columns": [
      {"data": "id"},
      {"data": "name"},
      {"data": "birthday"},
      {"data": "class_name"},
      {data: "id" , render : function ( data, type, row, meta ) {
            return type === 'display'  ?
              '<button id="greet-user-button">Show</button>' :
              data;
      }},
      {data: "id" , render : function ( data, type, row, meta ) {
        return '<a href="/students/'+row.id+'/edit" class="buttons edit-button">Edit</a>'

      }},
      {data: "id" , render : function ( data, type, row, meta ) {
            return type === 'display'  ?
              '<button id="delete-button" data-student-id="'+row.id+'">Delete</button>' :
              data;
      }},
    ]
  // pagingType is optional, if you want full pagination controls.
  // Check dataTables documentation to learn more about
  // available options.
});
  jQuery(document).on('click','#delete-button', function () {
    debugger
      var id = $(this).data('student-id');
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          (function() {
            $.ajax({
              method: 'DELETE',
              url: '/students',
              data: {
                id: id
              },
              headers: {
                "X-CSRF-Token": $('meta[name="csrf-token"]').attr('content')
              },
              success: function(returnData) {
                swal({
                  text: returnData.msg,
                  icon: "success",
                  timer: 1500,
                  buttons: false
                });
                return $.table.ajax.reload(null, false);
              },
              error: function(error) {
                if (error.responseJSON) {
                  return swal("Error", error.responseJSON.msg, "error");
                }
              }
            });
          
          }).call(this);
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    });
  jQuery(document).on('click','#edit-button', function () {
    debugger
      var id = $(this).data('student-id');
      r
    });
});
