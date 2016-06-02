class Reading < ActiveRecord::Base
  validates :user_id, :book_id, :status, presence: true
  validates :status, inclusion: { in: ["read", "currently-reading", "to-read"]}

  belongs_to(
    :reader,
    class_name: "User",
    foreign_key: :user_id
  )
  belongs_to :book

end
