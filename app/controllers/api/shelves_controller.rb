class Api::ShelvesController < ApplicationController

  def create
    @shelf = current_user.shelves.new(shelf_params)
    if @shelf.save
      render "api/shelves/show"
    else
      @errors = @shelf.errors.full_messages
      render json: @errors
    end
  end


  def index

    if @user = User.find_by(id: params[:user_id])
      @shelves = @user.shelves
      render "api/shelves/index"
    else
      @errors = ["Couldn't find that shelf"]
      render json: @errors, status: 404
    end

  end

  def shelf_readings
    @shelf = Shelf.find(params[:id])
    @readings = @shelf.readings
    render "api/readings/index"
  end

  def shelf_title
    @shelf_title = Shelf.find(params[:id]).name
    render json: [@shelf_title]
  end

  def show
    @shelf = Shelf.find(params[:id])
    render "api/shelves/show"
  end

  def destroy

  end



  private
  def shelf_params
    params.require(:shelf).permit(:user_id, :name)
  end


end
