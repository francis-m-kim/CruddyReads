class Reading < ActiveRecord::Base
  validates :user_id, :book_id, :status, presence: true
  validates :book_id, uniqueness: true
  validates :status, inclusion: { in: ["have-read", "reading-now", "will-read"]}

  belongs_to(
    :reader,
    class_name: "User",
    foreign_key: :user_id
  )
  
  belongs_to :book

end
