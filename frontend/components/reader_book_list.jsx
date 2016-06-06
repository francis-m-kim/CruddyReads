var React = require('react');
var BookStore = require('../stores/book_store');
var BookApiUtil = require('../util/book_api_util');
var BookListItem = require('./reader_book_list_item');

var ReaderBookList = React.createClass({
  getInitialState: function() {
    return { books: [] }
  },
  componentDidMount: function() {
    this.listener = BookStore.addListener(this.handleChange);
    BookApiUtil.getUserReadings(this.props.userId);
  },

  handleChange: function() {
    this.setState( {books: BookStore.all()} )
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  componentWillReceiveProps: function(newProps) {

    BookApiUtil.getUserReadings(newProps.userId);

  },

  render: function() {
    // debugger;
    return (
      <div className="book-list">
        <ul>
          {
            this.state.books.map(function(book, i){
              return( <BookListItem key={i} book={book}/> )
            })
          }
        </ul>
      </div>
    );
  }

});

module.exports = ReaderBookList;
