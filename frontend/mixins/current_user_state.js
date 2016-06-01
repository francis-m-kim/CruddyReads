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
		SessionStore.addListener(this.updateUser);
		if (typeof SessionStore.currentUser() === 'undefined') {
			UserActions.getCurrentUser();
		}
	},
	updateUser: function(){
		this.setState({
			currentUser: SessionStore.currentUser(),
			userErrors: SessionStore.errors()
		});
	}

};

module.exports = CurrentUserState;
