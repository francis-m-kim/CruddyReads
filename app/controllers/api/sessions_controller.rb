class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      render json: @user
    else
      @errors = ["Sorry couldn't find you!"]
      render json: @errors, status: 401
    end
  end

  def create_with_twitter
    @user = User.find_or_create_by_auth_hash(auth_hash)
    if @user
      login(@user)
      redirect_to "/#browse"
    else
      @errors = ["Sorry couldn't find you!"]
      render json: @errors, status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: @user
    else
      @errors = ["You weren't logged in!"]
      render json: @errors
    end
  end

  def show
    if current_user
      @user = current_user
      render "api/users/show"
    else
      @errors = ["Not logged in"]
      render json: @errors
    end
  end

  private
  def auth_hash
    request.env['omniauth.auth']
  end
end





#
# class User < ActiveRecord::Base
#   validates :session_token, presence: true
#
#   after_initialize :ensure_session_token
#
#   def self.generate_session_token
#     loop do
#       token = SecureRandom::urlsafe_base64
#
#       return token unless User.where(session_token: token).exists?
#     end
#   end
#
#   def reset_session_token!
#     self.session_token ||= SecureRandom::urlsafe_base64
#     save!
#   end
#
#   def self.find_or_create_by_auth_hash(auth_hash)
#     user = User.find_by(twitter_uid: auth_hash[:uid])
#
#     if user.nil?
#       user = User.create!(
#         twitter_uid: auth_hash[:uid],
#         name: auth_hash[:info][:name]
#       )
#     end
#
#     user
#   end
#
#   private
#
#     def ensure_session_token
#       self.session_token ||= SecureRandom::urlsafe_base64
#     end
# end
