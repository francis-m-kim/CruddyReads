class Api::ShelfAssignmentsController < ApplicationController
  def create
    @shelf_assignment = ShelfAssignment.new(shelf_params)
    if @shelf_assignment.save
      render json: ["hello"]
    else
      @errors = @shelf_assignment.errors.full_messages
      render json: @errors, status: 422
    end
  end

  def find_and_destroy
    @shelf_assignment = ShelfAssignment.find_by(shelf_params)
    @shelf_assignment.destroy
    render json: @shelf_assignment
  end

  private
  def shelf_params
    params.require(:shelf_assignment).permit(:shelf_id, :reading_id)
  end
end


def readings_by_status
  @readings = Reading.where(user_id: current_user.id, status: params[:status])
  render "api/readings/index"
end
