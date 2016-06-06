class Api::ReadingsController < ApplicationController

  def create
    @reading = current_user.readings.new(reading_params)
    if @reading.save
      render "api/readings/show"
    else
      @errors = @reading.errors.full_messages
      render json: @errors
    end
  end

  def index

    if @user = User.find_by(id: params[:user_id])
      @readings = @user.readings.includes(:book)
      render "api/readings/index"
    else
      @errors = ["SOMETHING WENT WRONG"]
      render json: @errors
    end

  end

  def show
    @reading = Reading.find(params[:id])
    render "api/readings/show"
  end

  def destroy

  end

  private
  def reading_params
    params.require(:reading).permit(:book_id, :status, :review)
  end
end
