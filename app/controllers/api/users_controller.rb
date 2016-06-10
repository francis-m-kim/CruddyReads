class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      @errors = @user.errors.full_messages
      render json: @errors, status: 422
    end
  end

  def index
    @users = User.all
    render "api/users/index"
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render "api/users/show"
    else
      render json: {}
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :image_url)
  end
end
