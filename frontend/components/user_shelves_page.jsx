var React = require('react');
var NavBar = require('./nav_bar');
var Shelf = require('./shelf');
var ShelfStore = require('../stores/shelf_store');
var CurrentUserState = require("../mixins/current_user_state");
var ShelfApiUtil = require('../util/shelf_api_util');
var BookApiUtil = require('../util/book_api_util');
var ReadingsApiUtil = require('../util/readings_api_util');


var SessionStore = require('../stores/session_store');
var BookStore = require('../stores/book_store');

var UserShelvesPage = React.createClass({
  getInitialState: function() {
    return {shelves: [], shelfToAdd: "", readings:[]}
  },

  componentDidMount: function() {
    this.shelfListener = ShelfStore.addListener(this.handleShelfChange);
    ShelfApiUtil.getShelves(SessionStore.currentUser().id);
    // debugger;

    this.bookListener = BookStore.addListener(this.handleBookChange);
    BookApiUtil.getUserReadings(SessionStore.currentUser().id);
  },

  handleShelfChange: function() {
    this.setState({shelves: ShelfStore.all()})
    console.log("shelfchange");
  },
  handleBookChange: function() {
    this.setState({readings: BookStore.allReadings()})
    console.log("bookchange");
  },

  componentWillUnmount: function () {
    this.shelfListener.remove();
    this.bookListener.remove();
  },

  newShelfChange: function(event) {
    this.setState({shelfToAdd: event.target.value})
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var shelf = {
      user_id: SessionStore.currentUser().id,
      name: this.state.shelfToAdd
    };
    this.setState( {shelfToAdd: ""} )
    ShelfApiUtil.addShelf(shelf);
  },

  getReadingsByStatus: function(status) {
    BookApiUtil.getUserReadings(status);
  },

  render: function() {
    var shelves = this.state.shelves
    return (
      <div>
        <NavBar/>
        <div className="shelves-label-column">
          <h1>My CRUD</h1>
          <ul className="shelf-labels">
            <li onClick={this.getReadingsByStatus.bind(this, "all")}>All books</li>
            <li onClick={this.getReadingsByStatus.bind(this, "have-read")}>Have read</li>
            <li onClick={this.getReadingsByStatus.bind(this, "reading-now")}>Reading now</li>
            <li onClick={this.getReadingsByStatus.bind(this, "will-read")}>Will read</li>
            {
              shelves.map(function(shelf, i){
                shelf.name.length >= 27 ?
                  shelfname = shelf.name.substring(0, 27) + "…":
                  shelfname = shelf.name
                return <li key={i}>{shelfname}</li>
              })
            }
          </ul>
        </div>

        Add a shelf:
        <input type="text" value={this.state.shelfToAdd} onChange={this.newShelfChange}/>
        <input type="submit" onClick={this.handleSubmit}/>

        <br/> <Shelf readings={this.state.readings}/>
      </div>
    );
  }

});

module.exports = UserShelvesPage;
