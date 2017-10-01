import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createHashHistory } from 'history'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import _ from 'lodash'

// import create category action
import { createCategory } from '../actions'
// import get categories from action
import { getCategories } from '../actions'

const customHistory = createHashHistory();

class CreateCategories extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			nameValue: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.props.getCategories();
	}

	componentWillMount() {
		if(!this.props.users.isLoggedIn) {
			customHistory.push('/');
		}
	}

	submitDeletion(id) {
		alert(id);
	}

	renderCategories() {
		return _.map(this.props.categories.categories, (pista) => {
			return (
				<li key={ pista.id } className="list-group-item col-md-12 col-sm-12">
					<span>{ pista.name }</span>
					<button className="btn btn-danger" style={{float: 'right'}} onClick={() => this.submitDeletion(pista.id) }>X</button>
				</li>
			);
		});
	}

	handleChange(event) {
		this.setState({ nameValue: event.target.value })
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.createCategory(this.state.nameValue);
	}

	renderForm() {
		return (
			<section className="col-md-12 col-sm-12">
				<div className="col-md-6 col-sm-6">
					<form onSubmit={ this.handleSubmit }>
						<div className="form-group">
					        <label>
					          Name:
					          <input className="form-control" type="text" value={ this.state.value } onChange={ this.handleChange } required />
					        </label>
				        </div>
				        <input className="btn btn-default" type="submit" value="Submit" />
				    </form>
			    </div>

			    <div className="col-md-6 col-sm-6">
			    	<ul className="list-group">
			    		{ this.renderCategories() }
			    	</ul>
			    </div>
		    </section>
		);
	}

	render() {
		return (
			<div className="container">
				<div>Create Category Component</div>
				<div>
					{ this.renderForm() }
				</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createCategory, getCategories }, dispatch);
}

function mapStateToProps(state) {
	return {
		users: state.users,
		categories: state.getCategories,
		createCategories: state.createCategories
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCategories);