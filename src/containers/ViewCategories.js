import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createHashHistory } from 'history'
import _ from 'lodash'

// import getCategories from actions
import { getCategories } from '../actions'
// import deleteEntry from actions
import { deleteCategory } from '../actions'

const customHistory = createHashHistory();

class ViewCategories extends Component {

	componentWillMount() {
		if(!this.props.users.isLoggedIn) {
			customHistory.push('/');
		}
	}

	componentDidMount() {
		this.props.getCategories();
		this.refreshCategories();
	}

	refreshCategories() {
		this.props.getCategories();
		this.props.getCategories();
	}

	renderCategories() {
		return _.map(this.props.categories.categories, (pista) => {
			return (
				<li style={{minHeight: '60px'}} key={ pista.id }>
					<span>{ pista.name }</span>
					<button style={{float: 'right'}} onClick={() => this.submitDeletion(pista.id) }>X</button>
				</li>
			);
		});
	}

	submitDeletion(id) {
		this.props.deleteCategory(id);
		this.refreshCategories();
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
							<button style={{marginBottom: '25px', marginRight: '10px'}} onClick={ () => this.refreshCategories() }>Refresh</button>
							<button style={{marginBottom: '25px'}} onClick={ () => customHistory.push('/create/category') }>Create</button>
							<ul className="alt categories-list uniform">
								{ this.renderCategories() }
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getCategories, deleteCategory }, dispatch);
}

function mapStateToProps(state) {
	return {
		users: state.users,
		categories: state.getCategories
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCategories);