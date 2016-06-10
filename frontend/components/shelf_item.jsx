var React = require('react');
var ReactRouter = require('react-router');
var ShelfApiUtil = require('../util/shelf_api_util');
var StatusButtons = require('./reading_status_button');
var SessionStore = require('../stores/session_store');
var Link = ReactRouter.Link;


var ShelfItem = React.createClass({

  render: function() {
    var reading = this.props.reading;
    return (
      <div className="shelf-item group">

        <div className="item-image-column">
          <Link to={"books/" + reading.id}>
            <img className="item-image" src={reading.image_url}/>
          </Link>
        </div>

        <div className="item-info-column">
          <li className="item-title">{reading.title}</li>
          <li className="item-author">{reading.author}</li>
          <li className="item-review">{reading.review}</li>
        </div>

        <div className="float-status-buttons">
          <StatusButtons book_id={reading.id} user={SessionStore.currentUser()}/>
        </div>
      </div>
    );
  }

});

module.exports = ShelfItem;
