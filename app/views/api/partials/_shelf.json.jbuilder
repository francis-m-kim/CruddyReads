#
#
# json.set! shelf.name do
#   json.array! shelf.readings do |reading|
#     json.partial! 'api/partials/reading', reading: reading
#   end
# end
#
json.name shelf.name
json.books shelf.readings do |reading|
  json.partial! 'api/partials/reading', reading: reading
end
