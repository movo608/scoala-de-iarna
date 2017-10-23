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
				<li key={ it.id } className="list-group-item col-md-12 col-sm-12 col-xs-12 col-lg-12">
					<span className="col-md-6 col-sm-6 col-xs-6 col-lg-6">{ it.name }</span>
					<img className="col-md-3 col-sm-3 col-xs-3 col-lg-6" src={ it.image } />
					<button className="btn btn-danger pull-right" onClick={ () => this.submitDeletion(it.id) }>&times;</button>
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
						onClick={ this.refreshSponsors }
						value="submit">
							Refresh
					</button>
				</div>
				<div className="view-workshops col-md-12 col-sm-12">
					<div className="col-md-12 col-sm-12">
						<ul className="list-group">
							{ this.renderSponsors() }
						</ul>
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