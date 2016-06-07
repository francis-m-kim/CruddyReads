
json.array! @readings do |reading|
  json.partial! 'api/partials/reading', reading: reading
end

# flattening the JSON output allows readings and books to be treated the same on the other end
