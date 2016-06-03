var SessionStore = require('../stores/session_store');
var UserActions = require('../actions/user_actions');

var CurrentUserState = {

	getInitialState: function(){
		return {
			currentUser: SessionStore.currentUser(),
			userErrors: SessionStore.errors()
		};
	},
	componentDidMount: function(){
		this.sessionListener = SessionStore.addListener(this.updateUser);
		UserActions.getCurrentUser();
	},
	componentWillUnmount: function() {
		this.sessionListener.remove();
	},
	updateUser: function(){
		this.setState({
			currentUser: SessionStore.currentUser(),
			userErrors: SessionStore.errors()
		});
	}

};

module.exports = CurrentUserState;
