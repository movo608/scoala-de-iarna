import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createHashHistory } from 'history'
import _ from 'lodash'

//import actions
import { getSubmissions } from '../actions'
import { deleteSubmission } from '../actions'

const customHistory = createHashHistory();

class ViewSubmissions extends Component {
	constructor(props) {
		super(props);

		this.refreshSubmissions = this.refreshSubmissions.bind(this);
	}

	componentDidMount() {
		this.refreshSubmissions();
	}

	componentWillMount() {
		if (!this.props.users.isLoggedIn) {
			customHistory.push('/');
		}
	}

	refreshSubmissions() {
		this.props.getSubmissions();
		this.props.getSubmissions();
	}

	submitDeletion(id) {
		this.props.deleteSubmission(id);
		this.refreshSubmissions();
	}

	renderSubmissions() {
		return _.map(this.props.submissions, (it) => {
			return (
				<li key={ it.id } className="list-group-item col-md-12 col-sm-12">
					<div>
						<div className="page-header">
							<h3>Name: { it.name }</h3>
							<h3>Email: { it.email }</h3>
							<h3>City: { it.city }</h3>
							<h3>Region: { it.region }</h3>
							<h3>Workshop: { it.workshop }</h3>
						</div>
						<div>
							### Application Info ###
						</div>
					</div>
					<button ref="btn" className="btn btn-danger" style={{float: 'right'}} onClick={() => this.submitDeletion(it.id) }>X</button>
				</li>
			);
		});
	}

	render() {
		return (
			<section className="view-submissions contianer col-md-12 col-sm-12">
				<div className="page-header">
					<h1>ViewSubmissions Component</h1>
					<button
						className="btn btn-warning" 
						onClick={ this.refreshSubmissions }
						value="submit">
							Refresh
					</button>
				</div>
				<div className="view-workshops col-md-12 col-sm-12">
					<div className="col-md-12 col-sm-12">
						<ul className="list-group">
							{ this.renderSubmissions() }
						</ul>
					</div>
				</div>
			</section>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getSubmissions, deleteSubmission }, dispatch)
}

function mapStateToProps(state) {
	return {
		users: state.users,
		submissions: state.getSubmissions.submissions
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewSubmissions);