# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Review Cycles

### Reviews API Request Actions

* `fetchAllReviews`
  0. invoked from `ReviewsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/reviews` is called.
  0. `receiveAllReviews` is set as the callback.

* `createReview`
  0. invoked from new note button `onClick`
  0. `POST /api/reviews` is called.
  0. `receiveSingleReview` is set as the callback.

* `fetchSingleReview`
  0. invoked from `ReviewDetail` `didMount`/`willReceiveProps`
  0. `GET /api/reviews/:id` is called.
  0. `receiveSingleReview` is set as the callback.

* `updateReview`
  0. invoked from `ReviewForm` `onSubmit`
  0. `POST /api/reviews` is called.
  0. `receiveSingleReview` is set as the callback.

* `destroyReview`
  0. invoked from delete note button `onClick`
  0. `DELETE /api/reviews/:id` is called.
  0. `removeReview` is set as the callback.

### Reviews API Response Actions

* `receiveAllReviews`
  0. invoked from an API callback.
  0. `Review` store updates `_reviews` and emits change.

* `receiveSingleReview`
  0. invoked from an API callback.
  0. `Review` store updates `_reviews[id]` and emits change.

* `removeReview`
  0. invoked from an API callback.
  0. `Review` store removes `_reviews[id]` and emits change.

### Store Listeners

* `ReviewsIndex` component listens to `Review` store.
* `ReviewDetail` component listens to `Review` store.


## Shelves Cycles

### Shelves API Request Actions

* `fetchAllShelves`
  0. invoked from `ShelvesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/shelves` is called.
  0. `receiveAllShelves` is set as the callback.

* `createShelves`
  0. invoked from new notebook button `onClick`
  0. `POST /api/shelves` is called.
  0. `receiveSingleShelves` is set as the callback.

* `fetchSingleShelves`
  0. invoked from `ShelvesDetail` `didMount`/`willReceiveProps`
  0. `GET /api/shelves/:id` is called.
  0. `receiveSingleShelves` is set as the callback.

* `updateShelves`
  0. invoked from `ShelvesForm` `onSubmit`
  0. `POST /api/shelves` is called.
  0. `receiveSingleShelves` is set as the callback.

* `destroyShelves`
  0. invoked from delete notebook button `onClick`
  0. `DELETE /api/shelves/:id` is called.
  0. `removeShelves` is set as the callback.

### Shelves API Response Actions

* `receiveAllShelves`
  0. invoked from an API callback.
  0. `Shelves` store updates `_shelves` and emits change.

* `receiveSingleShelves`
  0. invoked from an API callback.
  0. `Shelves` store updates `_shelves[id]` and emits change.

* `removeShelves`
  0. invoked from an API callback.
  0. `Shelves` store removes `_shelves[id]` and emits change.

### Store Listeners

* `ShelvesIndex` component listens to `Shelves` store.


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `ReviewSearchBar` `onChange` when there is text
  0. `GET /api/reviews` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `ReviewSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
