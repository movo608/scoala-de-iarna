import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createHashHistory } from 'history'
import _ from 'lodash'

//import actions
import { getSubmissions } from '../actions'
import { deleteSubmission } from '../actions'

const customHistory = createHashHistory();

/**
 * Component one can use to view all the form submissions.
 * @requires PAGINATION.
 */
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

	openExportWindow() {
		window.open('http://127.0.0.1/scoala-de-iarna/api/web/api/export-table');
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
						<div className="12u 12u$(medium)">
							<h3>Facebook link: <a href={'https://' + it.facebook_link }>{ it.name }</a></h3>
						</div>
						<div className="12u 12u$(medium)">
							<h3>Descoperire: { it.found_out }</h3>
						</div>
						<div style={{backgroundColor: 'lightgray'}} className="12u 12u$(medium)">
							<h3>Motivație</h3>
							<p style={{color: 'black'}}>
								{ it.motivation }
							</p>
						</div>
						<div style={{backgroundColor: 'lightgray'}} className="12u 12u$(medium)">
							<h3>Așteptări</h3>
							<p style={{color: 'black'}}>
								{ it.expectations }
							</p>
						</div>
						<div style={{backgroundColor: 'lightgray'}} className="12u 12u$(medium)">
							<h3>Proiect Personal</h3>
							<p style={{color: 'black'}}>
								{ it.personal_project }
							</p>
						</div>
						<div style={{backgroundColor: 'lightgray'}} className="12u 12u$(medium)">
							<h3>Valori Personale</h3>
							<p style={{color: 'black'}}>
								{ it.personal_values }
							</p>
						</div>
						<div style={{backgroundColor: 'lightgray'}} className="12u 12u$(medium)">
							<h3>Random Question</h3>
							<p style={{color: 'black'}}>
								{ it.random_question }
							</p>
						</div>
						<div style={{backgroundColor: 'lightgray'}} className="12u 12u$(medium)">
							<h3>Good Deed</h3>
							<p style={{color: 'black'}}>
								{ it.good_deed }
							</p>
						</div>
						<div style={{backgroundColor: 'lightgray'}} className="12u 12u$(medium)">
							<h3>Future View</h3>
							<p style={{color: 'black'}}>
								{ it.future_view }
							</p>
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
							<button style={{ marginRight: '10px' }} onClick={ () => this.refreshSubmissions() }>Refresh</button>
							<button onClick={ () => this.openExportWindow() }>Export to Excel</button>
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