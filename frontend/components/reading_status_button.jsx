var React = require('react');
var SessionStore = require('../stores/session_store');
var ReadingsApiUtil = require('../util/readings_api_util');
var BookApiUtil = require('../util/book_api_util');
var ShelfApiUtil = require('../util/shelf_api_util');
var CurrentUserState = require("../mixins/current_user_state");
var BookStore = require('../stores/book_store');
var ShelfStore = require('../stores/shelf_store');
var AddToShelfButton = require('./add_to_shelf_button');

var Modal = require('react-modal');

var customStyles = {
  overlay : {
   position        : 'fixed',
   top             : 0,
   left            : 0,
   right           : 0,
   bottom          : 0,
   backgroundColor : 'rgba(252, 215, 146, 0.9)'
 },
 content : {
   position        : 'fixed',
   top             : '60px',
   left            : '150px',
   right           : '150px',
   bottom          : '100px',
   border          : '1px solid #ccc',
   padding         : '20px',
 }
};


var ReadingStatusButton = React.createClass({

  mixins: [CurrentUserState],

  getInitialState: function() {
    // readingState = BookStore.findReading(this.props.book_id).status || "Will Read"
    // readingStatus = BookStore.findReading(this.props.book_id).status
    var readingStatus = "Will Read";
    if (BookStore.findReading(this.props.book_id) && BookStore.findReading(this.props.book_id).status) {
      readingStatus = BookStore.findReading(this.props.book_id).status
    }
    return {reading: {}, readingStatus: readingStatus, shelves: [], review: "", reviewModalIsOpen: false}
  },

  componentDidMount: function() {
    this.bookListener = BookStore.addListener(this.handleChange);
    BookApiUtil.getUserReadings(this.props.user.id);

    this.shelfListener = ShelfStore.addListener(this.handleShelfChange);
    ShelfApiUtil.getShelves(SessionStore.currentUser().id);
  },

  componentWillMount: function() {
    Modal.setAppElement('body');
  },

  componentWillReceiveProps: function(newProps) {

  },

  handleChange: function() {
    var reading = BookStore.findReading(this.props.book_id);
    if (reading) {
      this.setState( {reading: reading} )
      this.reviewAlreadyExists();
    }

    // var status = BookStore.findReading(this.props.book_id).status
    var status = (BookStore.findReading(this.props.book_id)) ? BookStore.findReading(this.props.book_id).status : undefined

    if (status) {
      this.setState( {readingStatus: status} )
    }
  },

  reviewAlreadyExists: function() {
    var review = this.state.reading.review
    review ? this.setState({review: review}) : this.setState({review: ""})
  },

  handleShelfChange: function() {
    this.setState({shelves: ShelfStore.all()})
  },

  componentWillUnmount: function() {
    this.bookListener.remove();
    this.shelfListener.remove();
  },

  updateStatus: function(newStatus) {
    event.preventDefault();
    var reading = {
      book_id: this.props.book_id,
      status: newStatus

    };

    ReadingsApiUtil.addReading(reading);
  },

  initialStatusClick: function(event) {
    event.preventDefault();
    var reading = {
      book_id: this.props.book_id,
      status: this.state.readingStatus

    };
    ReadingsApiUtil.addReading(reading);
  },

  openModal: function() {
    this.setState({reviewModalIsOpen: true});
  },

  closeModal: function() {
    this.setState({reviewModalIsOpen: false});
  },

  updateReview: function(event) {
    this.setState({review: event.target.value});
  },

  addReview: function(event) {
    event.preventDefault();

    var readingId = this.state.reading.reading_id
    var review = this.state.review
    ReadingsApiUtil.addReviewToReading(readingId, review);
    this.closeModal();
    this.setState({review: ""})
  },

  otherButtons: function() {

    var statuses = ["Have Read", "Reading Now", "Will Read"];
    var removeIdx = statuses.indexOf(this.state.readingStatus)
    if (removeIdx > -1) {
      statuses.splice(removeIdx, 1);
    }
    var shelves = this.state.shelves;
    var reading = this.state.reading;

    var isEmpty = function(obj) {
      for (var x in obj) { return false; }
      return true;
    }

    return (
      <div>
        {
          statuses.map(function(status, i){
            return <button className="status-button hover-hand" key={i} onClick={this.updateStatus.bind(this, status)}>{status}</button>
          }.bind(this))
        }
        <ul>
          {
            shelves.map(function(shelf, i) {
              if (! isEmpty(reading)) {
                return <AddToShelfButton key={i} shelf={shelf} reading={reading} />
              }
            }.bind(this))
          }
        </ul>
      </div>
    )
  },

  render: function() {
    var isEmpty = function(obj) {
      for (var x in obj) { return false; }
      return true;
    }
    var reading = this.state.reading;
    var reviewButton = isEmpty(reading) ? "" : <button className="review-button" onClick={this.openModal}>Add/Edit Review</button>

    return (

      <div className="group status-buttons">
        <div className="fix-width">
          <button className="current-reading-status hover-hand" onClick={this.initialStatusClick}>{this.state.readingStatus}</button>
        </div>
        <div className="dropdown">
          <button className="dropdown-button hover-hand">&#x21E9;</button>
          <div className="dropdown-content">

            {this.otherButtons()}

            {reviewButton}

      <Modal
          isOpen={this.state.reviewModalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} >



          <form className="group">
            <div className="thumbnail-column">
              <img src={reading.image_url} width="100px"/>
            </div>
            <div className="text-column">
              Your review of
            <div className="book-reviewed-title">{reading.title}</div>
            <div className="book-reviewed-author">{reading.author}</div>
            <div className="your-opinion">What did you think?</div>
            <textarea className="review-text-box" name="textarea" onChange={this.updateReview} value={this.state.review} placeholder="Enter your review." rows="10" cols="50" />


            <input className="save-button hover-hand" type="submit" onClick={this.addReview} value="Save"/>

            </div>
          </form>
        </Modal>

          </div>
        </div>
      </div>
    );
  }

});

module.exports = ReadingStatusButton;
