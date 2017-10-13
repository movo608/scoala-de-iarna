import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'

//import actions
import { getContributors } from '../actions'

class Contributors extends Component {
	componentDidMount() {
		this.props.getContributors();
		this.props.getContributors();
		this.props.getContributors();
	}

	renderContributors() {
		return _.map(this.props.contributors, (it) => {
			return (
				<li key={ it.id }>
					<span>{ it.name }</span>
				</li>
			);
		});
	}

	render() {
		return (
			<div>
				<h1 className="page-header">Contributors Component</h1>
				<section className="col-md-12 col-sm-12">
					<ul className="list-group contributors">
						{ this.renderContributors() }
					</ul>
				</section>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getContributors }, dispatch);
}

function mapStateToProps(state) {
	return {
		users: state.users,
		contributors: state.getContributors.contributors
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Contributors);