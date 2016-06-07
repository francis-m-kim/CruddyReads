var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;


var BookStore = new Store(AppDispatcher);




var _books = {};
var _readings = {};

BookStore.receiveBook = function(book) {
  // debugger;
  _books[book.id] = book;
};

BookStore.receiveBooks = function(books) {
  reset();
  books.forEach(function(book){
    _books[book.id] = book;
  })
};

BookStore.receiveReadings = function(readings) {
  resetReadings();
  // debugger;
  readings.forEach(function(reading){
    _readings[reading.id] = reading;
    // _books[reading.id] = reading;
  })
};



BookStore.all = function() {
  return Object.keys(_books).map(function(bookId) {
    return _books[bookId];
  });
};
BookStore.allReadings = function() {
  return Object.keys(_readings).map(function(bookId) {
    return _readings[bookId];
  });
};

BookStore.find = function(id) {
  return _books[id]
};

BookStore.findReading = function(id) {
  return _readings[id]
};

var reset = function() {
  _books = {};
};
var resetReadings = function() {
  _readings = {};
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
    case "RECEIVE_READINGS":
      BookStore.receiveReadings(payload.readings);
      BookStore.__emitChange();
      break;
  };
};

module.exports = BookStore;
