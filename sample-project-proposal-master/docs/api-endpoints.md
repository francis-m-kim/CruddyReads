# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Notes

- `GET /api/reviews`
- `POST /api/reviews`
- `GET /api/reviews/:id`
- `PATCH /api/reviews/:id`
- `DELETE /api/reviews/:id`

### Notebooks

- `GET /api/shelves`
- `POST /api/shelves`
- `GET /api/shelves/:id`
- `PATCH /api/shelves/:id`
- `DELETE /api/shelves/:id`
- `GET /api/shelves/:id/reviews`
  - index of all reviews from a particular shelf
  - accepts pagination params (if I get there)
