class RemoveImageUrlsFromUsersAndBooks < ActiveRecord::Migration
  def change
    remove_column :users, :image_url, :string
    remove_column :books, :image_url, :string
  end
end
