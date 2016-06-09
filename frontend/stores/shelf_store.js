var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;

var _shelves = {};
var _shelfTitle = "";
var ShelfStore = new Store(AppDispatcher);

ShelfStore.receiveShelves = function(shelves) {
  _shelves = {};
  shelves.forEach(function(shelf) {
    _shelves[shelf.id] = shelf;
  });
};

ShelfStore.receiveShelf = function(shelf) {
  _shelves[shelf.id] = shelf;
};
ShelfStore.removeShelf = function(shelf) {
  delete _shelves[shelf.id];
};

ShelfStore.receiveShelfTitle = function(shelfTitle) {
  _shelfTitle = shelfTitle;
};

ShelfStore.all = function() {
  return Object.keys(_shelves).map(function(shelfName) {
    return _shelves[shelfName];
  });
};

ShelfStore.shelfTitle = function() {
  return _shelfTitle;
};

ShelfStore.flushTitle = function() {
  _shelfTitle = "";
};

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
    case "RECEIVE_SHELF_TITLE":
      ShelfStore.receiveShelfTitle(payload.shelfTitle);
      ShelfStore.__emitChange();
      break;
    case "REMOVE_SHELF":
      ShelfStore.removeShelf(payload.shelf);
      ShelfStore.__emitChange();
      break;
  }
};


module.exports = ShelfStore;
