import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createHashHistory } from 'history';

const customHistory = createHashHistory();

class CreateCategories extends Component {
	componentWillMount() {
		if(!this.props.users.isLoggedIn){
			customHistory.push('/');
		}
	}

	render() {
		return (
			<h1>Create Categories Component</h1>
		); 
	}
}

function mapDispatchToProps(dispatch) {
	
}

function mapStateToProps(state) {
	return {
		users: state.users,
		navbarLogged: state.loggedNavbar,
	}
}

export default connect(mapStateToProps)(CreateCategories);