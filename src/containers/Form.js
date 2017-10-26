import React, { Component } from 'react'
import { createHashHistory } from 'history'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'

//import submit-form action
import { sendForm } from '../actions'
import { getWorkshops } from '../actions'

// import react select
import Select from 'react-select'
// import react select css
import 'react-select/dist/react-select.css'

const customHistory = createHashHistory();
const IS_DISABLED = true;

let allowMessage = false;

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			city: '',
			region: '',
			workshop: '',
			workshopId: ''
		};

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleCityChange = this.handleCityChange.bind(this);
		this.handleRegionChange = this.handleRegionChange.bind(this);
		this.handleWorkshopChange = this.handleWorkshopChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		allowMessage = false;
	}

	componentWillMount() {
		this.props.getWorkshops()
	}	

	componentWillReceiveProps(nextProps) {
		if (nextProps.formResponse.sendForm.data !== 'no_request') {
			allowMessage = true;
		} else {
			allowMessage = false;
		}
	}	

	handleSubmit(event) {
		event.preventDefault();
		this.props.sendForm(this.state);
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

	handleWorkshopChange(value) {
		this.setState({
			workshopId: value.value,
			workshop: value.label
		});
	}

	renderForm() {
		return (
			<div>
				<form>
					<div className="form-signin row uniform">
						<label className="sr-only">Name</label>
						<div className="12u 12u$(xsmall)">
							<input placeholder="Name" className="form-control" type="text" value={ this.state.value } onChange={ this.handleNameChange } required />
						</div>								
						<label className="sr-only">Email</label>
						<div className="12u 12u$(xsmall)">
							<input placeholder="Email" className="form-control" type="email" value={ this.state.value } onChange={ this.handleEmailChange } required />
						</div>
						<label className="sr-only">City</label>
						<div className="12u 12u$(xsmall)">
							<input placeholder="City" className="form-control" type="text" value={ this.state.value } onChange={ this.handleCityChange } required />
						</div>
						<label className="sr-only">Region</label>
						<div className="12u 12u$(xsmall)">
							<input placeholder="Region" className="form-control" type="text" value={ this.state.value } onChange={ this.handleRegionChange } required />
						</div>
						<label className="sr-only">Workshop</label>
						<div className="12u 12u$(xsmall)">
							<Select
								name="form-field-workshop"
								placeholder="Select Workshop..."
								value={ this.state.workshopId }
								onChange={ this.handleWorkshopChange }
								options={ this.renderFormWorkshops() }
								clearable={ false }
								searchable={ false }
								required
							/>
						</div>
					</div>
				</form>
				<input onClick={ this.handleSubmit } className="btn btn-default" type="submit" value="Submit" />
			</div>
		);
	}

	renderFormWorkshops() {
		return _.map(this.props.workshops.workshops, (it) => {
			return (
				{ value: it.id, label: it.name }
			);	
		});
	}

	renderMessage() {
		if (this.props.formResponse.sendForm.status === true) {
			return (
				<div className="alert-success">
					<strong>Success!</strong> The request has been successfully sent.
			  	</div>
			);
		} else {
			return (
				<div className="alert-danger">
					<strong>Error!</strong> Email address has already been used.
			  	</div>
			);
		}
	}

	hide(event) {
		console.log(event);
	}

	renderAvailable() {
		return (
			<section id="two" className="wrapper style2">
				<div className="inner">
					<div className="box">
						<div className="content">
							<header className="align-center">
								<p>this is the sign-up form one can use to sign up for the camp</p>
								<h2>Sign Up Form</h2>
							</header>
							{ allowMessage === true ? this.renderMessage() : null }
							{ this.renderForm() }
						</div>
					</div>
				</div>
			</section>
		);
	}

	renderDisabled() {
		return (
			<section id="two" className="wrapper style2">
				<div className="inner">
					<div className="box">
						<div className="content">
							<header className="align-center">
								<p>
									this is the sign-up form one can use to sign up for the camp.
									it is currently unavailable.
								</p>
								<h2>Sign Up Form (Not Available)</h2>
							</header>
							<p>
								This is the sign-up form one can use to sign up for the participation in
								<em>AGA</em>'s winter edition camp.
							</p>
							<p>
								Due to further development, this section of the website is prohibited
								to public access and use.
							</p>
							<h4>
								Please refer to this section on a further date in order to be able to have 
								access to its full functionality.
							</h4>
						</div>
					</div>
				</div>
			</section>
		);
	}
	
	render() {
		return (
			IS_DISABLED ? this.renderDisabled() : this.renderAvailable()
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ sendForm, getWorkshops }, dispatch);
}

function mapStateToProps(state) {
	return {
		users: state.users,
		formResponse: state.submitForm,
		workshops: state.getWorkshops
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);