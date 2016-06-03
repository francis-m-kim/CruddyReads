# json.array! @readings do |reading|
#   json.id reading.id
#   json.book do
#     json.partial! 'api/partials/book', book: reading.book
#   end
#   json.status reading.status
# end


json.array! @readings do |reading|
  json.reading_id reading.id
  json.partial! 'api/partials/book', book: reading.book
  json.status reading.status
end

# flattening the JSON output allows readings and books to be treated the same on the other end
