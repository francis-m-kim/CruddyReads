class Book < ActiveRecord::Base
  validates :title, :author_id, presence: true

  # has_attached_file :image, default_url: "/images/:style/missing.png"
  # validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :author
  has_many :readings
  has_many :readers, :through => :readings, :source => :reader
end
