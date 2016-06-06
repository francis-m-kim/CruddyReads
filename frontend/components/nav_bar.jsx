var React = require('react');
var PropTypes = React.PropTypes;

var NavBar = React.createClass({

  render: function() {
    return (
      <nav className="main-nav group">
        <h1>CRUDDYREADS</h1>
        <ul className="links">
          <li>My CRUD</li>
          <li>Browse</li>
          <li>Community</li>
        </ul>
        <input className="search" type="text" placeholder="Find CRUD"/>
        <ul className="buttons">
          <li>alerts</li>
          <li>messages</li>
          <li>friends</li>
          <li>me</li>
        </ul>
      </nav>
    );
  }

});

module.exports = NavBar;
