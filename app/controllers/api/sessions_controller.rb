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
      @errors = ["Some generic show error"]
      render json: @errors
    end
  end
end
