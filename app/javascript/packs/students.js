import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import swal from 'sweetalert';
import jquery from 'jquery';

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
      {data: "id" , render : function ( data, type, row, meta ) {
        var image = $(".student_image").map(function() {
          return $(this).text();
        }).get();
        $("#pike_test").val(image);
        return '<div>' +
        $(image) +
        '</div>'
      }},
      {"data": "birthday"},
      {"data": "class_name"},
      {data: "id" , render : function ( data, type, row, meta ) {
        return '<div>' + 
        '<a href="/students/'+row.id+'/edit" class="buttons edit-button"><button>Edit</button></a>' + 
        '<button id="delete-button" data-student-id="'+row.id+'">Delete</button>' + 
        '</div>'

      }}
    ]
  // pagingType is optional, if you want full pagination controls.
  // Check dataTables documentation to learn more about
  // available options.
});
  jQuery(document).on('click','#delete-button', function () {
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
  jQuery(document).on('click','#create-student', function(){
    $.ajax({
      method: 'POST',
      url: '/students/new',
      data: $('#create_for').serialize(),
      headers:{
        "X-CSRF-Token": $('meta[name="csrf-token"]').attr('content')
      },
      success: function(returnData){

      }
    })
  });
  var tbl = $('#pike_table');
  var test = $('#user_current').val();
  // Work with column 2
  if(test == false){
  tbl.DataTable().column(4).visible(false);
  $.tbl.ajax.reload(null, false)
  }
});
