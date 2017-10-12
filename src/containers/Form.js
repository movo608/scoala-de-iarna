import React, { Component } from 'react'
import { createHashHistory } from 'history'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

//import submit-form action
import { submitForm } from '../actions'

const customHistory = createHashHistory();
const IS_DISABLED = false;

class Form extends Component {
	constructor(props) {
		super(props);
		
		if (IS_DISABLED === true) {
			customHistory.push('/');
		}

		customHistory.push('/');
		customHistory.push('/form');

		this.state = {
			name: '',
			email: '',
			city: '',
			region: '',
			workshop: ''
		};

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleCityChange = this.handleCityChange.bind(this);
		this.handleRegionChange = this.handleRegionChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this); 
	}

	handleSubmit(event) {
		event.preventDefault();
		submitForm(this.state);
	}

	handleNameChange(event) {
		this.setState({ name: event.target.value });
	}

	handleEmailChange(event) {
		this.setState({ email: event.target.value });
	}

	handleCityChange(event) {
		this.setState({ city: event.target.value });
	}

	handleRegionChange(event) {
		this.setState({ region: event.target.value });
	}

	renderForm() {
		return (
			<section className="col-md-12 col-sm-12">
				<form className="col-md-12 col-sm-12" onSubmit={ this.handleSubmit }>
					<div className="form-group">
				        <label>
				          	Name:
				          	<input className="form-control" type="text" value={ this.state.value } onChange={ this.handleNameChange } required />
				        </label>
				        <label>
				          	Email:
				          	<input className="form-control" type="text" value={ this.state.value } onChange={ this.handleEmailChange } required />
				        </label>
				        <label>
				          	City:
				          	<input className="form-control" type="text" value={ this.state.value } onChange={ this.handleCityChange } required />
				        </label>
				        <label>
				          	Region:
				          	<input className="form-control" type="text" value={ this.state.value } onChange={ this.handleRegionChange } required />
				        </label>
			        </div>
			        <input className="btn btn-default" type="submit" value="Submit" />
			    </form>
		    </section>
		);
	}
	
	render() {
		return (
			<section className="container">
				<div className="page-header"><h1>Sign up form</h1></div>
				{ this.renderForm() }
			</section>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ submitForm }, dispatch);
}

function mapStateToProps(state) {
	return {
		users: state.users
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);