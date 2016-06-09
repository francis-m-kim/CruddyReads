var React = require('react');
var ReactRouter = require('react-router');
var ShelfApiUtil = require('../util/shelf_api_util');
var Link = ReactRouter.Link;


var ShelfItem = React.createClass({

  render: function() {
    var reading = this.props.reading;
    return (
      <div>
        <Link to={"books/" + reading.id}><img src={reading.image_url} width="100"/></Link>
        <li><em>{reading.title}</em></li>
        <li>{reading.author}</li>
        <li>{reading.review}</li>
      </div>
    );
  }

});

module.exports = ShelfItem;
