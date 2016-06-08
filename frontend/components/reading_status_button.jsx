var React = require('react');
var ReadingsApiUtil = require('../util/readings_api_util');
var BookApiUtil = require('../util/book_api_util');
var CurrentUserState = require("../mixins/current_user_state");
var BookStore = require('../stores/book_store');


var ReadingStatusButton = React.createClass({

  mixins: [CurrentUserState],

  getInitialState: function() {
    return {readingStatus: "Will Read"}
  },

  componentDidMount: function() {
    this.listener = BookStore.addListener(this.handleChange);
    BookApiUtil.getUserReadings(this.props.user.id);
  },

  handleChange: function() {
    var status = BookStore.findReading(this.props.book_id).status

    if (status) {
      this.setState( {readingStatus: status} )
    }
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  updateStatus: function(newStatus) {
    event.preventDefault();
    var reading = {
      book_id: this.props.book_id,
      status: newStatus

    };

    ReadingsApiUtil.addReading(reading);
  },

  otherStatusButtons: function() {
    var statuses = ["Have Read", "Reading Now", "Will Read"];
    var removeIdx = statuses.indexOf(this.state.readingStatus)
    if (removeIdx > -1) {
      statuses.splice(removeIdx, 1);
    }
    return statuses.map(function(status, i){
      return <button key={i} onClick={this.updateStatus.bind(this, status)}>{status}</button>
    }.bind(this))
  },

  render: function() {
    return (

      <div>
        <button className="reading-status"><em>{this.state.readingStatus}</em></button>
        {this.otherStatusButtons()}
      </div>
    );
  }

});

module.exports = ReadingStatusButton;



// <button onClick={this.updateStatus.bind(this, "Have Read")}>Have Read</button>
// <button onClick={this.updateStatus.bind(this, "Reading Now")}>Reading Now</button>
// <button onClick={this.updateStatus.bind(this, "will-read")}>Will Read</button>
