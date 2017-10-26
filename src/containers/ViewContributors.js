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
			<section id="two" className="wrapper style2">
				<div className="inner">
					<div className="box">
						<div className="content">
							<header className="align-center">
								<p>in this section you can see all the categories</p>
								<h2>View Categories</h2>
							</header>
							<button style={{marginBottom: '25px', marginRight: '10px'}} onClick={ () => this.refreshContributors() }>Refresh</button>
							<button style={{marginBottom: '25px'}} onClick={ () => customHistory.push('/create/contributor') }>Create</button>
							<ul className="alt categories-list uniform">
								{ this.renderContributors() }
							</ul>
						</div>
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