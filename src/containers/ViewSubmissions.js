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
				<li key={ it.id }>
					<div className="uniform">
						<div className="12u 12u$(medium)">
							<h3>Name: { it.name }</h3>
						</div>
						<div className="12u 12u$(medium)">
							<h3>Email: { it.email }</h3>
						</div>
						<div className="12u 12u$(medium)">
							<h3>City: { it.city }</h3>
						</div>
						<div className="12u 12u$(medium)">
							<h3>Region: { it.region }</h3>
						</div>
						<div className="12u 12u$(medium)">
							<h3>Workshop: { it.workshop }</h3>
						</div>
						<button className="12u 12u$(medium)" ref="btn" onClick={() => this.submitDeletion(it.id) }>Remove</button>
					</div>
				</li>
			);
		});
	}

	render() {
		return (
			<section id="two" className="wrapper style2">
				<div className="inner">
					<div className="box">
						<div className="content">
							<header className="align-center">
								<p>in this section you can see all the form submissions</p>
								<h2>View Form Submissions</h2>
							</header>
							<button style={{marginBottom: '25px', marginRight: '10px'}} onClick={ () => this.refreshSubmissions() }>Refresh</button>
							<hr />
							<ul className="alt categories-list uniform">
								{ this.renderSubmissions() }
							</ul>
						</div>
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