class AddImageUrlToBooks < ActiveRecord::Migration
  def change
    add_column :books, :image_url, :string, default: "LINK TO IMAGE"
  end
end
