var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;


var BookStore = new Store(AppDispatcher);




var _books = {};

BookStore.receiveBook = function(book) {
  _books[book.id] = book;
};

BookStore.find = function(id) {
  return _books[id]
};

BookStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "RECEIVE_BOOK":
      BookStore.receiveBook(payload.book);
      break;
  };
  BookStore.__emitChange();
};

module.exports = BookStore;
