var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;

var _shelves = {};
var ShelfStore = new Store(AppDispatcher);

ShelfStore.receiveShelves = function(shelves) {
  _shelves = {};
  shelves.forEach(function(shelf) {
    _shelves[shelf.name] = shelf;
  })
}
ShelfStore.receiveShelf = function(shelf) {
  _shelves[shelf.name] = shelf;
}

ShelfStore.all = function() {
  return Object.keys(_shelves).map(function(shelfName) {
    return _shelves[shelfName];
  })
}

ShelfStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "RECEIVE_SHELVES":
      ShelfStore.receiveShelves(payload.shelves);
      ShelfStore.__emitChange();
      break;
    case "RECEIVE_SHELF":
      ShelfStore.receiveShelf(payload.shelf);
      ShelfStore.__emitChange();
      break;
  };
};


module.exports = ShelfStore;
