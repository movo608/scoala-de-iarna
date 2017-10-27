import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createHashHistory } from 'history'
import _ from 'lodash'

//import actions
import { getSponsors } from '../actions'
import { deleteSponsor } from '../actions'

const customHistory = createHashHistory();

class ViewSponsors extends Component {
	constructor(props) {
		super(props);

		this.refreshSponsors = this.refreshSponsors.bind(this);
	}

	componentDidMount() {
		this.refreshSponsors();
	}

	componentWillMount() {
		if (!this.props.users.isLoggedIn) {
			customHistory.push('/');
		}
	}

	refreshSponsors() {
		this.props.getSponsors();
		this.props.getSponsors();
	}

	submitDeletion(id) {
		this.props.deleteSponsor(id);
		this.refreshSponsors();
	}

	renderSponsors() {
		return _.map(this.props.sponsors, (it) => {
			return (
				<li key={ it.id } style={{minHeight: "150px"}}>
					<div className="uniform">
						<div className="12u 12u$(medium)">
							<h3>Name: { it.name }</h3>
						</div>
						<div className="12u 12u$(medium)">
							<img src={ it.image } alt="image_not_found" />
						</div>
						<div class="12u 12u$(medium)">
							<button ref="btn" className="btn btn-danger" style={{float: 'right'}} onClick={() => this.submitDeletion(it.id) }>X</button>
						</div>
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
								<p>in this section you can see all the sponsors</p>
								<h2>View Sponsors</h2>
							</header>
							<button style={{marginBottom: '25px', marginRight: '10px'}} onClick={ () => this.refreshSponsors() }>Refresh</button>
							<button style={{marginBottom: '25px'}} onClick={ () => customHistory.push('/create/sponsor') }>Create</button>
							<ul className="alt categories-list uniform">
								{ this.renderSponsors() }
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getSponsors, deleteSponsor }, dispatch)
}

function mapStateToProps(state) {
	return {
		users: state.users,
		sponsors: state.getSponsors.sponsors
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewSponsors);