var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = require('react-router').hashHistory;
var SessionStore = require('../stores/session_store')
var Link = ReactRouter.Link;

var StatusButtons = require('./reading_status_button');


var BrowseItem = React.createClass({
  isEmpty: function(obj) {
    for (var x in obj) { return false; }
    return true;
  },

  render: function() {
    var user = SessionStore.currentUser();
    var book = this.props.book;

    if (this.isEmpty(user) || user[0] == "Not logged in") {
      var shouldThereBeStatusButtons = <LoginForm/>
    } else {
      var shouldThereBeStatusButtons = (
        <StatusButtons book_id={book.id} user={user}/>
      )
    }


    return (
      <div className="browse-item group">
        <Link className="link" to={"books/" + book.id}><img src={book.image_url}/></Link>
        <div className="info group">
          <h1 className="title">{book.title}</h1>
          <h2 className="author">{book.author}</h2>
          <div className = "description">{book.description}</div>
        </div>
        <div className="status-buttons">
          {shouldThereBeStatusButtons}
        </div>
      </div>
    );
  }

});

module.exports = BrowseItem;
