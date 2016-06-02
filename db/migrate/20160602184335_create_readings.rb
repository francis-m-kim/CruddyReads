class CreateReadings < ActiveRecord::Migration
  def change
    create_table :readings do |t|

      t.integer :user_id, null: false
      t.integer :book_id, null: false
      t.text :review
      t.string :status, null: false

      t.timestamps null: false
    end
  end
end
