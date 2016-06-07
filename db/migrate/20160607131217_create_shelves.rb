class CreateShelves < ActiveRecord::Migration
  def change
    drop_table :shelves

    create_table :shelves do |t|
      t.integer :user_id, null: false
      t.timestamps null: false
    end
  end
end
