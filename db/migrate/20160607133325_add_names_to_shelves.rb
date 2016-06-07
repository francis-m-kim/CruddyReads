class AddNamesToShelves < ActiveRecord::Migration
  def change
    add_column :shelves, :name, :string
  end
end
