json.reading_id reading.id
json.partial! 'api/partials/book', book: reading.book
json.status reading.status
json.review reading.review
