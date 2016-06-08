var React = require('react');
var SessionStore = require('../stores/session_store');
var ReadingsApiUtil = require('../util/readings_api_util');
var BookApiUtil = require('../util/book_api_util');
var ShelfApiUtil = require('../util/shelf_api_util');
var CurrentUserState = require("../mixins/current_user_state");
var BookStore = require('../stores/book_store');
var ShelfStore = require('../stores/shelf_store');
var AddToShelfButton = require('./add_to_shelf_button');

var ReadingStatusButton = React.createClass({

  mixins: [CurrentUserState],

  getInitialState: function() {
    return {reading: {}, readingStatus: "Will Read", shelves: []}
  },

  componentDidMount: function() {
    this.bookListener = BookStore.addListener(this.handleChange);
    BookApiUtil.getUserReadings(this.props.user.id);

    this.shelfListener = ShelfStore.addListener(this.handleShelfChange);
    ShelfApiUtil.getShelves(SessionStore.currentUser().id);
  },

  handleChange: function() {
    var reading = BookStore.findReading(this.props.book_id);
    if (reading) {
      this.setState( {reading: reading} )
    }
    var status = BookStore.findReading(this.props.book_id).status
    if (status) {
      this.setState( {readingStatus: status} )
    }
  },

  handleShelfChange: function() {
    this.setState({shelves: ShelfStore.all()})
  },

  componentWillUnmount: function() {
    this.bookListener.remove();
    this.shelfListener.remove();
  },

  updateStatus: function(newStatus) {
    event.preventDefault();
    var reading = {
      book_id: this.props.book_id,
      status: newStatus

    };

    ReadingsApiUtil.addReading(reading);
  },

  toggleShelf: function(shelfName) {
    event.preventDefault();
    console.log("TOGGLE", shelfName);
  },

  checkClick: function() {

  },

  otherButtons: function() {

    var statuses = ["Have Read", "Reading Now", "Will Read"];
    var removeIdx = statuses.indexOf(this.state.readingStatus)
    if (removeIdx > -1) {
      statuses.splice(removeIdx, 1);
    }
    var shelves = this.state.shelves;
    var reading = this.state.reading;

    // var shelveIdsWithReading = ShelfStore.dsfadsfajsd;klja ser(reading.id)
    return (
      <div>
        {
          statuses.map(function(status, i){
            return <button key={i} onClick={this.updateStatus.bind(this, status)}>{status}</button>
          }.bind(this))
        }
        <ul>
          {
            shelves.map(function(shelf, i) {
              
              return <AddToShelfButton key={i} shelf={shelf} reading={reading} />
            }.bind(this))
          }
        </ul>
      </div>
    )
  },

  render: function() {
    return (

      <div className="group">
        <button className="reading-status"><em>{this.state.readingStatus}</em></button>
        <div className="dropdown">
          <button className="drop-button">&darr;</button>
          <div className="drop-content">
            {this.otherButtons()}
          </div>
        </div>
      </div>
    );
  }

});

module.exports = ReadingStatusButton;


// <button onClick={this.updateStatus.bind(this, "Have Read")}>Have Read</button>
// <button onClick={this.updateStatus.bind(this, "Reading Now")}>Reading Now</button>
// <button onClick={this.updateStatus.bind(this, "will-read")}>Will Read</button>
