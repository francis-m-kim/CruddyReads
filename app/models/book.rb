class Book < ActiveRecord::Base
  validates :title, :author_id, presence: true
  belongs_to :author
  has_many :readings
  has_many :readers, :through => :readings, :source => :reader
end
