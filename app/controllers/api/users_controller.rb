class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      @errors = @user.errors.full_messages
      render json: @errors
    end
  end

  def show
    @user = current_user
    if @user
      render "api/users/show"
    else
      render json: {}
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
