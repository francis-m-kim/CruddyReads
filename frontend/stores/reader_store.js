var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;


var ReaderStore = new Store(AppDispatcher);




var _readers = {};

ReaderStore.receiveReader = function(reader) {
  _readers[reader.id] = reader;

};

ReaderStore.find = function(id) {
  return _readers[id]
};

ReaderStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "RECEIVE_READER":
      ReaderStore.receiveReader(payload.reader);
      ReaderStore.__emitChange();
      break;
  };
};

module.exports = ReaderStore;
