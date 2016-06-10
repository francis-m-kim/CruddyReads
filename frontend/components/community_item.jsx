var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = require('react-router').hashHistory;
var Link = ReactRouter.Link;


var CommunityItem = React.createClass({

  render: function() {
    var reader = this.props.reader;
    return (
      <div className="community-item">
        <Link to={"users/" + reader.id}><img className="community-item-image" src={reader.image_url}/></Link>
        <div className="community-username">{reader.username}</div>
      </div>
    );
  }

});

module.exports = CommunityItem;
