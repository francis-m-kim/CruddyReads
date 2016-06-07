class ShelfAssignment < ActiveRecord::Base

  validates :reading_id, :shelf_id, presence: true
  belongs_to :shelf
  belongs_to :reading

end
