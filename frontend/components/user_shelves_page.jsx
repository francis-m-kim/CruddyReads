var React = require('react');
var NavBar = require('./nav_bar');
var Shelf = require('./shelf');
var ShelfLabel = require('./shelf_label');

var ShelfStore = require('../stores/shelf_store');
var CurrentUserState = require("../mixins/current_user_state");
var ShelfApiUtil = require('../util/shelf_api_util');
var BookApiUtil = require('../util/book_api_util');
var ReadingsApiUtil = require('../util/readings_api_util');

var SessionStore = require('../stores/session_store');
var BookStore = require('../stores/book_store');

var Lifecycle = require('react-router').Lifecycle;



var UserShelvesPage = React.createClass({
  getInitialState: function() {
    return {shelfName: "All Books", shelves: [], shelfToAdd: "", readings:[]}
  },

  componentDidMount: function() {
    this.shelfListener = ShelfStore.addListener(this.handleShelfChange);
    ShelfApiUtil.getShelves(SessionStore.currentUser().id);

    this.bookListener = BookStore.addListener(this.handleBookChange);
    BookApiUtil.getUserReadings(SessionStore.currentUser().id);
  },

  handleShelfChange: function() {
    this.setState({shelves: ShelfStore.all()})
    if (!ShelfStore.shelfTitle() == "") {
      this.setState({shelfName: ShelfStore.shelfTitle()})
      ShelfStore.flushTitle();
    }
  },

  mixins: [ Lifecycle ],
  routerWillLeave(nextLocation) {
    ShelfStore.flushTitle();
  },

  handleBookChange: function() {
    this.setState({readings: BookStore.allReadings()})
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
    if (status==="All") {
      BookApiUtil.getUserReadings(SessionStore.currentUser().id);
      this.setState({shelfName: "All Books"})
    } else {
      ReadingsApiUtil.getReadingsByStatus(status);
      this.setState({shelfName: status})
    }
  },

  render: function() {
    var shelves = this.state.shelves
    var shelfName = this.state.shelfName
    return (
      <div>
        <NavBar/>
        <div className="all-shelf-info group">
          <div className="shelves-label-column">
            <h1>My CRUD</h1>

            <ul className="labels">
              <div className="status-labels">

                  <li onClick={this.getReadingsByStatus.bind(this, "All")}>All Books</li>
                  <li onClick={this.getReadingsByStatus.bind(this, "Have Read")}>Have Read</li>
                  <li onClick={this.getReadingsByStatus.bind(this, "Reading Now")}>Reading Now</li>
                  <li onClick={this.getReadingsByStatus.bind(this, "Will Read")}>Will Read</li>

              </div>

                {
                  shelves.map(function(shelf, i) {
                    shelf.name.length >= 27 ?
                      shelfname = shelf.name.substring(0, 27) + "…":
                      shelfname = shelf.name
                    return <ShelfLabel key={i} shelfId={shelf.id} name={shelfname}/>
                  })
                }
            </ul>


            <em>Add a shelf:</em>
            <input type="text" value={this.state.shelfToAdd} onChange={this.newShelfChange}/>
            <input type="submit" onClick={this.handleSubmit}/>

          </div>
          <Shelf shelfname={this.state.shelfName} readings={this.state.readings}/>
        </div>

      </div>
    );
  }

});

module.exports = UserShelvesPage;
