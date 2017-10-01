import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createHashHistory } from 'history'

const customHistory = createHashHistory();

class CreatePosts extends Component {
	componentWillMount() {
		if (!this.props.users.isLoggedIn) {
			customHistory.push('/');
		}
	}

	render() {
		return (
			<div><h1>Create Posts Component</h1></div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	
}

function mapStateToProps(state) {
	return {
		users: state.users,
	}
}

export default connect(mapStateToProps)(CreatePosts);