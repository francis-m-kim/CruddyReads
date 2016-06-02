var React = require('react');
var BookApiUtil = require('../util/book_api_util');
var ReadingApiUtil = require('../util/reading_api_util');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
var BookStore = require('../stores/book_store');
var CurrentUserState = require("../mixins/current_user_state");



window.BookStore = BookStore;

var BookMainPage = React.createClass({
  getInitialState: function() {

    return { book: BookStore.find(this.props.params.id) }
  },
  componentDidMount: function() {
    this.listener = BookStore.addListener(this.handleChange);
    BookApiUtil.getBook(this.props.params.id);
  },

  handleChange: function() {
    this.setState({ book: BookStore.find(this.props.params.id) });
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  componentWillReceiveProps: function(newProps) {
    BookApiUtil.getBook(newProps.params.id);
  },

  haveRead: function(event) {
    event.preventDefault();
    debugger;
    var reading = {
      user_id: 54,
      book_id: this.props.params.id,
      status: "read",
      review: "IT SUCKED"
    };
    ReadingApiUtil.addReading(reading);
  },

  readingNow: function() {

  },
  willRead: function() {

  },

  render: function() {
    var book = this.state.book;

    if (book) {
      return (
        <div className="book-main-page">
          <img src={book.image_url} width="200px" height="300px"/>
          <h1>{book.title}</h1>
          <br/>
          by {book.author}
          <br/>
          <br/>
          {book.description}
          <br/>
          <br/>
          <button onClick={this.haveRead}>READ</button>
          <button onClick={this.bookReading}>CURRENTLY READING</button>
          <button onClick={this.bookWillRead}>WANT TO READ</button>

        </div>
      );
    } else {
      return (
        <div>No book to display.</div>
      );
    }
  }

});

module.exports = BookMainPage;
