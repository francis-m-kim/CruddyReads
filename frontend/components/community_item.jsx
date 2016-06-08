var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = require('react-router').hashHistory;
var Link = ReactRouter.Link;


var CommunityItem = React.createClass({

  render: function() {
    var reader = this.props.reader;
    return (
      <div>
        <Link to={"users/" + reader.id}><img width="50px" src={reader.image_url}/></Link>
        {reader.username}
      </div>
    );
  }

});

module.exports = CommunityItem;
