

json.array! @books do |book|
  json.partial! 'api/partials/book', book: book
end
