var React = require('react');
var BookApiUtil = require('../util/book_api_util');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

var BookStore = require('../stores/book_store');
var SessionStore = require("../stores/session_store")
var CurrentUserState = require("../mixins/current_user_state");

var NavBar = require('./nav_bar');
var ReadingStatusButton = require('./reading_status_button.jsx');


var BookHomePage = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function() {
    // debugger;
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
    if (book) {
      var readingStatusButton = SessionStore.isUserLoggedIn() ?
      <ReadingStatusButton user={SessionStore.currentUser()} book_id={this.state.book.id}/> :
        ""
      return (
        <div>
          <NavBar/>
          <div className="group book-info">
            <div className="image-column">
              <img src={book.image_url}/>
              {readingStatusButton}
            </div>
            <div className="book-details">
              <h1>{book.title}</h1>
              <div className="author"> {book.author} </div>
              <div className="description"> {book.description}</div>
            </div>
          </div>

        </div>
      );
    } else {
      return (
        <div>No book to display.</div>
      );
    }
  }

});

module.exports = BookHomePage;
