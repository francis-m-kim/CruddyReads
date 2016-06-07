class CreateShelfAssignments < ActiveRecord::Migration
  def change
    create_table :shelf_assignments do |t|
      t.integer :reading_id, null: false
      t.integer :shelf_id, null: false
      t.timestamps null: false
    end
  end
end
