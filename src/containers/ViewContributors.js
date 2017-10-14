import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createHashHistory } from 'history'
import _ from 'lodash'

//import actions
import { getContributors } from '../actions'
import { deleteContributor } from '../actions'

const customHistory = createHashHistory();

class ViewContributors extends Component {
	constructor(props) {
		super(props);

		this.refreshContributors = this.refreshContributors.bind(this);
	}

	componentWillMount() {
		if (!this.props.users.isLoggedIn) {
			customHistory.push('/');
		}
	}

	componentDidMount() {
		this.refreshContributors();
	}

	refreshContributors() {
		this.props.getContributors();
		this.props.getContributors();
	}

	submitDeletion(id) {
		console.log(id);
		this.props.deleteContributor(id);
		this.refreshContributors();
	}

	renderContributors() {
		return _.map(this.props.contributors, (it) => {
			return (
				<li key={ it.id } className="list-group-item col-md-12 col-sm-12">
					<span>{ it.name }</span>
					<button ref="btn" className="btn btn-danger" style={{float: 'right'}} onClick={() => this.submitDeletion(it.id) }>X</button>
				</li>
			);
		});
	}

	render() {
		return (
			<section className="view-contributors contianer col-md-12 col-sm-12">
				<div className="page-header"><h1>ViewContributors Component</h1></div>
				<div className="view-contributors col-md-12 col-sm-12">
					<div className="col-md-8 col-sm-8">
						<ul className="list-group">
							{ this.renderContributors() }
						</ul>
					</div>
					<div className="col-md-4 col-sm-4">
						<button 
							className="btn btn-warning" 
							onClick={ this.refreshContributors }
							value="submit">
								Refresh
						</button>
					</div>
				</div>
			</section>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getContributors, deleteContributor }, dispatch);	
}

function mapStateToProps(state) {
	return {
		users: state.users,
		contributors: state.getContributors.contributors
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewContributors);