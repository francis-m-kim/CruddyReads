class Reading < ActiveRecord::Base
  validates :user_id, :book_id, :status, presence: true
  validates :status, inclusion: { in: ["have-read", "reading-now", "will-read"]}
  # validates :book_id, uniqueness: true
  validates :book_id, uniqueness: { scope: :reader }
  belongs_to(
    :reader,
    class_name: "User",
    foreign_key: :user_id
  )

  belongs_to :book

  has_many :shelf_assignments
  has_many :shelves, through: :shelf_assignment

end
