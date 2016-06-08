class Api::ReadingsController < ApplicationController

  def create


    if find_existing_reading(reading_params)
      @reading = update_existing_reading(reading_params)
    else
      @reading = current_user.readings.new(reading_params)
    end

    if @reading.save
      render "api/readings/show"
    else
      @errors = @reading.errors.full_messages
      render json: @errors, status: 422
    end
  end

  def find_existing_reading(reading_params)
    Reading.where(book_id: reading_params[:book_id], user_id: current_user.id)[0]
  end

  def update_existing_reading(reading_params)
    reading = Reading.where(book_id: reading_params[:book_id], user_id: current_user.id)[0]
    reading.status = reading_params[:status]
    reading
  end

  def index

    if @user = User.find_by(id: params[:user_id])
      @readings = @user.readings.includes(:book)
      render "api/readings/index"
    else
      @errors = ["SOMETHING WENT WRONG"]
      render json: @errors, status: 422
    end

  end

  def show
    @reading = Reading.find(params[:id])
    render "api/readings/show"
  end

  def readings_by_status
    @readings = Reading.where(user_id: current_user.id, status: params[:status])
    render "api/readings/index"
  end

  def destroy

  end

  private
  def reading_params
    params.require(:reading).permit(:book_id, :status, :review)
  end
end
