var React = require("react")
var ReactDOM = require("react-dom")

var SessionStore = require('./stores/session_store')
var CurrentUserState = require('./mixins/current_user_state');
// var UserActions = require("./actions/user_actions");

var SignUpForm = require("./components/signup_form");
var LogInForm = require("./components/login_form");
var LogOutButton = require("./components/logout_button");

var BookHomePage = require("./components/book_home_page");
var ReaderHomePage = require("./components/reader_home_page");
var LandingPage = require("./components/landing_page");

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;


var App = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

// var LandingPage = React.createClass({
//
//   mixins: [CurrentUserState],
//
//   render: function() {
//
//     return(
//       <div id="landing-page">
//         <div className="container">
//
//           <nav className="group">
//             <h1 id="crud">CRUDDYREADS</h1>
//             <LogInForm/>
//           </nav>
//
//           <SignUpForm/>
//           <LogOutButton/>
//           <Link to="/books/1">Check out book 1!</Link>
//         </div>
//       </div>
//     );
//   }
// });

//
// var LoggedInAs = React.createClass({
//   componentDidMount: function() {
//     this.listener = SessionStore.addListener(this.handleChange)
//
//   },
//   handleChange: function() {
//     this.setState({});
//   },
//   render: function() {
//     if (SessionStore.isUserLoggedIn()) {
//       return(<p>WELCOME {SessionStore.currentUser().username} </p>)
//     } else {
//       return (
//         <div>Nobody Logged In.</div>
//       );
//     }
//   }
//
// });

var Router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LandingPage}/>
      <Route path="users/:id" component={ReaderHomePage}/>
      <Route path="books/:id" component={BookHomePage}/>


    </Route>
  </Router>
);


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(Router, document.getElementById("content"));
})
