class Shelf < ActiveRecord::Base
  validates :user_id, :name, presence: true


  belongs_to :user
  has_many :shelf_assignments
  has_many :readings, through: :shelf_assignments
end
