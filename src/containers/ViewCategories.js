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
				<li key={ pista.id } className="list-group-item col-md-12 col-sm-12">
					<span>{ pista.name }</span>
					<button ref="btn" className="btn btn-danger" style={{float: 'right'}} onClick={() => this.submitDeletion(pista.id) }>X</button>
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
			<section className="view-categories index container col-md-12 col-sm-12">
				<div className="page-header"><h1>View Categories Component</h1></div>
				
				<div className="col-md-6 col-sm-6">
				    	<ul className="list-group">
				    		{ this.renderCategories() }
				    	</ul>
				</div>

				<div className="col-md-6 col-sm-6">
					<button 
						className="btn btn-warning" 
						onClick={ () => this.refreshCategories() } 
						value="submit">
							Refresh Categories
					</button>
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