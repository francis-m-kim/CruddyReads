var React = require('react');

var BookStore = require('../stores/book_store');
var BookApiUtil = require('../util/book_api_util');

var NavBar = require('./nav_bar');
var BrowseItem = require('./browse_item');

var BrowsePage = React.createClass({
  getInitialState: function() {
    return {books: []}
  },

  componentDidMount: function() {
    this.listener = BookStore.addListener(this.handleChange);
    BookApiUtil.getAllBooks();
  },

  handleChange: function() {
    this.setState( {books: BookStore.all()} )
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },
  render: function() {
    var books = this.state.books;
    return (
      <div>
        <NavBar/>
        <ul>
          {
            books.map(function(book, i) {
              return <BrowseItem key={i} book={book}/>
            })
          }
        </ul>
      </div>
    );
  }

});

module.exports = BrowsePage;
