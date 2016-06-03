var React = require('react');
var BookStore = require('../stores/book_store');
var BookApiUtil = require('../util/book_api_util');

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

  render: function() {
    return (
      <div>
        <ul>
          {
            this.state.books.map(function(book){
              <li>{book.title}</li>
            })
          }
        </ul>
      </div>
    );
  }

});

module.exports = ReaderBookList;
