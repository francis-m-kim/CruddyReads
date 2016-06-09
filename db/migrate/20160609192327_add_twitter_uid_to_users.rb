class AddTwitterUidToUsers < ActiveRecord::Migration
  def change
    add_column :users, :twitter_uid, :string
    remove_column :users, :password_digest, :string
    remove_column :users, :email

    add_column :users, :password_digest, :string
    add_column :users, :email, :string
  end
end
