json.array! @readings do |reading|
  json.id reading.id
  json.book do
    json.partial! 'books/book', book: reading.book
  end
  json.status reading.status
end
