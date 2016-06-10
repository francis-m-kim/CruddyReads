var React = require('react');

var ReaderStore = require('../stores/reader_store');
var ReaderApiUtil = require('../util/reader_api_util');

var NavBar = require('./nav_bar');
var CommunityItem = require('./community_item');

var CommunityPage = React.createClass({
  getInitialState: function() {
    return {readers: []}
  },

  componentDidMount: function() {
    this.listener = ReaderStore.addListener(this.handleChange);
    ReaderApiUtil.getAllReaders();
  },

  handleChange: function() {
    this.setState( {readers: ReaderStore.all()} )
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },
  render: function() {
    var readers = this.state.readers;
    return (
      <div>
        <NavBar/>
        <ul className="community-items">
          {
            readers.map(function(reader, i) {
              return <CommunityItem key={i} reader={reader}/>
            })
          }
        </ul>
      </div>
    );
  }

});

module.exports = CommunityPage;
