// import {React} from "react"
var React = require("react")
var ReactDOM = require("react-dom")

var App = React.createClass({
  render: function() {
    return(
      <div>
        <header><h1>CRUDDY READS</h1></header>
      </div>
    );
  }
});


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<p>HEY</p>, document.getElementById("content"));
})
