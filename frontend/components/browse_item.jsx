var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = require('react-router').hashHistory;
var Link = ReactRouter.Link;

var BrowseItem = React.createClass({

  render: function() {
    var book = this.props.book;
    return (
      <div>
        <ul>
          <Link to={"books/" + book.id}><img width="100px" src={book.image_url}/></Link>
          <li>{book.title}</li>
        </ul>
      </div>
    );
  }

});

module.exports = BrowseItem;
