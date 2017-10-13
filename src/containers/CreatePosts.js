import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createHashHistory } from 'history'
import _ from 'lodash'

// import react select
import Select from 'react-select'
// import react select css
import 'react-select/dist/react-select.css'

// import actions
import { createPost } from '../actions'
import { getCategories } from '../actions'

const customHistory = createHashHistory();

class CreatePosts extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			nameValue: '',
			bodyValue: '',
			categoryValue: '',
			categoryLabel: ''
		};

		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleBodyChange = this.handleBodyChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		if(!this.props.users.isLoggedIn) {
			customHistory.push('/');
		}
	}

	componentDidMount() {
		this.props.getCategories();
	}

	handleCategoryChange(value = { value: 0, label: '' }) {
		if (value.value !== -1) {
			this.setState({
				categoryValue: value.value,
				categoryLabel: value.label
			});
		}
	}

	handleNameChange(event) {
		this.setState({
			nameValue: event.target.value
		});
	}

	handleBodyChange(event) {
		this.setState({
			bodyValue: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		this.props.createPost(
			this.state.nameValue, 
			this.state.bodyValue, 
			this.state.categoryValue,
			this.state.categoryLabel
		);

		customHistory.push('/view/posts');
	}

	renderForm() {
		return (
			<section className="col-md-12 col-sm-12">
				<div className="col-md-6 col-sm-6">
					<form onSubmit={ this.handleSubmit }>
				        <div className="form-group">
					        <label>
					          Name:
					          <input className="form-control" type="text" value={ this.state.value } onChange={ this.handleNameChange } required />
					        </label>
				        </div>
				        <div className="form-group">
					        <label>
					          Body:
					          <textarea cols="50" rows="4" className="form-control" type="text" value={ this.state.value } onChange={ this.handleBodyChange } required></textarea>
					        </label>
				        </div>
				        <div className="form-group">
				        	<label>
				        		Category
				        	</label>
					        <Select
							  	name="form-field-name"
							  	value={ this.state.categoryValue }
							  	options={ this.renderFormCategories() }
							  	onChange={ this.handleCategoryChange }
							  	clearable={ false }
							  	searchable={ false }
							  	required
							/>
						</div>
				        <input className="btn btn-default" type="submit" value="Submit" />
				    </form>
			    </div>
		    </section>
		);
	}

	renderFormCategories() {
		return _.map(this.props.categories.categories, (pista) => {
			return (
				{ value: pista.id, label:pista.name }
			);	
		});
	}

	render() {
		return (
			<div className="container">
				<div className="page-header"><h1>Create Posts Component</h1></div>
				<div>
					{ this.renderForm() }
				</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createPost, getCategories }, dispatch);
}

function mapStateToProps(state) {
	return {
		users: state.users,
		categories: state.getCategories
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePosts);