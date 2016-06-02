class ChangeIsbnTypetoStringInBooks < ActiveRecord::Migration
  def change
    remove_column :books, :isbn
    add_column :books, :isbn, :string
  end
end
