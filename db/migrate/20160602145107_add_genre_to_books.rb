class AddGenreToBooks < ActiveRecord::Migration
  def change
    add_column :books, :genre, :string, default: "genre"
  end
end
