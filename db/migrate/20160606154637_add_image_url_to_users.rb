class AddImageUrlToUsers < ActiveRecord::Migration
  def change
    add_column :users, :image_url, :string, default: "http://www.jadepixeldoll.com/images/ref_head/hdd04_blank.jpg"
  end
end
