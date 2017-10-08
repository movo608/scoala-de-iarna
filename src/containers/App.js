import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createHashHistory } from 'history'
import { bindActionCreators } from 'redux'
import { reactLocalStorage as __storage } from 'reactjs-localstorage'

// import actions
import { userStoreLogin } from '../actions'

const customHistory = createHashHistory();

class App extends  Component {
	componentWillMount() {
    	if (__storage.getObject('user') && this.props.users.isLoggedIn === false) {
			this.props.userStoreLogin(__storage.getObject('user').users.username);
		}
    }

    componentWillReceiveProps(nextProps) {
		if (nextProps.users.isLoggedIn === true) {
			customHistory.push('/browse');
		}
	}

	render() {
		return(
			<div className="app-index index">
				<h1>Landing Page</h1>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ userStoreLogin }, dispatch);
}

function mapStateToProps(state) {
	return {
		users: state.users
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);