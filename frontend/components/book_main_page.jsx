var React = require('react');
var BookApiUtil = require('../util/book_api_util');
var ReadingApiUtil = require('../util/reading_api_util');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

var BookStore = require('../stores/book_store');
var SessionStore = require("../stores/session_store")
var CurrentUserState = require("../mixins/current_user_state");

var ReadingStatusButton = require('./reading_status_button.jsx');


var BookMainPage = React.createClass({
  mixins: [CurrentUserState],
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



  render: function() {
    var book = this.state.book;
    var readingStatusButton = SessionStore.isUserLoggedIn() ?
        <ReadingStatusButton book_id={this.props.params.id}/> :
        ""
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

          {readingStatusButton}

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
