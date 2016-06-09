class User < ActiveRecord::Base
  validates :username, :session_token, presence: true
  validates :email, uniqueness: true, :allow_nil => true
  validates :password, length: { minimum: 6, allow_nil: true}

  validates :email, :password_digest, presence: true,
                    unless: Proc.new { |user| user.twitter_uid.present? }

  has_attached_file :avatar, default_url: "blank.jpg"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  has_many :readings
  has_many :books, through: :readings
  has_many :shelves


  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.valid_password?(password)
    return user
  end

  def self.find_or_create_by_auth_hash(auth_hash)
    user = User.find_by(twitter_uid: auth_hash[:uid])

    if user.nil?
      user = User.create!(
        twitter_uid: auth_hash[:uid],
        username: auth_hash[:info][:name]
      )
    end

    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end


  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
