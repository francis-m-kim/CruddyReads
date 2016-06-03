var React = require('react')
var ReaderApiUtil = require('../util/reader_api_util');
var ReaderStore = require('../stores/reader_store');
var ReaderBookList = require('./reader_book_list');


var ReaderHomePage = React.createClass({
  getInitialState: function() {
    return {user: ReaderStore.find(this.props.params.id)}
  },

  componentDidMount: function() {
    this.listener = ReaderStore.addListener(this.handleChange);
    ReaderApiUtil.getReader(this.props.params.id);
  },

  handleChange: function() {
    this.setState( {user: ReaderStore.find(this.props.params.id)} )
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },
  componentWillReceiveProps: function(newProps) {
    ReaderApiUtil.getReader(newProps.params.id);
  },

  render: function() {
    var user = this.state.user;
    // debugger;
    if (user) {

      var username = user.username
      var userId = user.id
      delete user.username
      delete user.id
      return (
        <div>
          <h1>{username}</h1>
          <ul>
            {
              Object.keys(user).map(function(attr, i) {
                return <li key={i}>{attr}: {user[attr]}</li>
              })
            }
          </ul>
          <ReaderBookList userId={userId}/>
        </div>
      );
    } else {
      return <div/>
    }
  }

});

module.exports = ReaderHomePage;
