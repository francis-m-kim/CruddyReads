class Shelf < ActiveRecord::Base
  validates :user_id, :name, presence: true
  before_destroy :destroy


  belongs_to :user
  has_many :shelf_assignments
  has_many :readings, through: :shelf_assignments
end


#
# before_destroy :destroy_coupon_codes
#
#    private
#
#    def destroy_coupon_codes
#      self.coupon_codes.delete_all
#    end
