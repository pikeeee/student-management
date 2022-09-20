class StudentDatatable < AjaxDatatablesRails::ActiveRecord

  def view_columns
    # Declare strings in this format: ModelName.column_name
    # or in aliased_join_table.column_name format
    @view_columns ||= {
      id:         { source: "Student.id" },
      name: { source: "Student.name" },
      birthday:  { source: "Student.birthday" },
      class_name:      { source: "Student.class_name"},
    }
  end

  def data
    records.map do |record|
      {
        id:         record.id,
        name:       record.name,
        birthday:   record.birthday,
        class_name: record.class_name,
        DT_RowId:   record.id, # This will automagically set the id attribute on the corresponding <tr> in the datatable
      }
    end
  end

  def get_raw_records
    Student.all
  end

end
