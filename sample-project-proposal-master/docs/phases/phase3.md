# Phase 3: Shelves (2 days)

## Rails
### Models
* Shelf

### Controllers
* Api::ShelvesController (create, destroy, index, show, update)

### Views
* shelves/index.json.jbuilder
* shelves/show.json.jbuilder

## Flux
### Views (React Components)
* ShelvesIndex
  - ShelvesIndexItem
* ShelfForm

### Stores
* Shelf

### Actions
* ApiActions.receiveAllShelves -> triggered by ApiUtil
* ApiActions.receiveSingleShelf
* ApiActions.deleteShelf
* ShelfActions.fetchAllShelves -> triggers ApiUtil
* ShelfActions.fetchSingleShelf
* ShelfActions.createShelf
* ShelfActions.editShelf
* ShelfActions.destroyShelf

### ApiUtil
* ApiUtil.fetchAllShelves
* ApiUtil.fetchSingleShelf
* ApiUtil.createShelf
* ApiUtil.editShelf
* ApiUtil.destroyShelf

## Gems/Libraries
