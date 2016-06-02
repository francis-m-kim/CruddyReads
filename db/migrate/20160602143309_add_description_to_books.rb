class AddDescriptionToBooks < ActiveRecord::Migration
  def change
    add_column :books, :description, :text, default: "N/A"
  end
end
