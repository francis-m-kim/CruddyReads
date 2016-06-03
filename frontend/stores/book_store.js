var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;


var BookStore = new Store(AppDispatcher);




var _books = {};

BookStore.receiveBook = function(book) {
  _books[book.id] = book;
};

BookStore.receiveBooks = function(books) {
  reset();
  books.forEach(function(book){
    _books[book.id] = book;
  })
};

BookStore.all = function() {
  return Object.keys(_books).map(function(bookId) {
    return _books[bookId];
  });
};

BookStore.find = function(id) {
  return _books[id]
};

var reset = function() {
  _books = {};
};



BookStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "RECEIVE_BOOK":
      BookStore.receiveBook(payload.book);
      BookStore.__emitChange();
      break;
    case "RECEIVE_BOOKS":
      BookStore.receiveBooks(payload.books);
      BookStore.__emitChange();
      break;
  };
};

module.exports = BookStore;
