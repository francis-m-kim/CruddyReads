// import {React} from "react"
var React = require("react")
var ReactDOM = require("react-dom")

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var App = React.createClass({
  render: function() {
    return(
      <div>
        <header><h1>CRUDDY READS</h1></header>
        <LoginForm/>
        {this.props.children}
      </div>
    );
  }
});

var Router = (
  <Router
);


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<p>HEY</p>, document.getElementById("content"));
})
