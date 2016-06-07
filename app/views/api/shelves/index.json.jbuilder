json.array! @shelves do |shelf|
  json.partial! 'api/partials/shelf', shelf: shelf
end
