# json.array! @readings do |reading|
#   json.reading_id reading.id
#   json.partial! 'api/partials/book', book: reading.book
#   json.status reading.status
# end

json.reading_id reading.id
json.partial! 'api/partials/book', book: reading.book
json.status reading.status
