var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = require('react-router').hashHistory;
var Link = ReactRouter.Link;

var ReaderBookListItem = React.createClass({

  render: function() {
    var book = this.props.book;
    var nameSpan;
    if (book.review) {
      nameSpan = <span>{this.props.username} says:</span>
    } else {
      nameSpan = <span>{this.props.username} hasn't written anything yet.</span>
    }
    return (
      <div className="book-list-item group">
        <li>
          <Link to={"books/" + book.id}><img src={book.image_url} width="100px"/></Link>
          <div className="book-list-item-details">
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
            {nameSpan}
            <div className="review"> {book.review}</div>
          </div>
        </li>

      </div>


    );
  }

});

module.exports = ReaderBookListItem;
