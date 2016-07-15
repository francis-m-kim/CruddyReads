
json.name shelf.name
json.id shelf.id
json.books shelf.readings do |reading|
  json.partial! 'api/partials/reading', reading: reading
end
