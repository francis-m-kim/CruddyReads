class Api::BooksController < ApplicationController

  def show
    @book = Book.find_by(id: params[:id])
    if @book
      render "api/books/show"
    else
      render json: ["Book not found."]
    end
  end

end
