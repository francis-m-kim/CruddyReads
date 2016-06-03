var React = require('react');
var ReadingApiUtil = require('../util/reading_api_util');
var CurrentUserState = require("../mixins/current_user_state");

var ReadingStatusButton = React.createClass({

    mixins: [CurrentUserState],

    haveRead: function(event) {
      event.preventDefault();
      var reading = {
        user_id: this.state.currentUser.user_id,
        book_id: this.props.book_id,
        status: "have-read"

      };
      ReadingApiUtil.addReading(reading);
    },

    readingNow: function(event) {
      event.preventDefault();
      var reading = {
        user_id: this.state.currentUser.user_id,
        book_id: this.props.book_id,
        status: "reading-now"
      };
      ReadingApiUtil.addReading(reading);
    },

    willRead: function(event) {
      event.preventDefault();
      var reading = {
        user_id: this.state.currentUser.user_id,
        book_id: this.props.book_id,
        status: "will-read"
      };
      ReadingApiUtil.addReading(reading);
    },

  render: function() {
    return (
      <div>
        <button onClick={this.haveRead}>HAVE READ</button>
        <button onClick={this.readingNow}>READING NOW</button>
        <button onClick={this.willRead}>WILL READ</button>
      </div>
    );
  }

});

module.exports = ReadingStatusButton;
