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
		if (!this.props.users.isLoggedIn) {
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
			<form onSubmit={ this.handleSubmit }>
				<div className="row uniform">
					<div className="12u 12u$(medium)">
						<label className="sr-only">Name</label>
						<input placeholder="Name" className="form-control" type="text" value={ this.state.value } onChange={ this.handleNameChange } required />
					</div>
					<div className="12u 12u$(medium)">
						<label className="sr-only">Body</label>
						<textarea placeholder="Body" cols="50" rows="25" className="form-control" type="text" value={ this.state.value } onChange={ this.handleBodyChange } required></textarea>
					</div>
					<div className="12u 12u$(medium)">
						<label className="sr-only">
							Category
						</label>
						<div className="12u 12u$(medium)">
							<Select
								className="12u 12u$(medium)"
								name="form-field-name"
								value={ this.state.categoryValue }
								options={ this.renderFormCategories() }
								onChange={ this.handleCategoryChange }
								clearable={ false }
								searchable={ false }
								placeholder="Select Category..."
								required
							/>
						</div>
					</div>
				</div>
				<div style={{marginTop: '20px'}} className="12u 12u$(medium)">
					<input type="submit" value="Submit" />
				</div>
			</form>		
		);
	}

	renderFormCategories() {
		return _.map(this.props.categories.categories, (pista) => {
			return (
				{ value: pista.id, label: pista.name }
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
								<p>this section is used to create a post</p>
								<h2>Create Post</h2>
							</header>
							{ this.renderForm() }
						</div>
					</div>
				</div>
			</section>
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