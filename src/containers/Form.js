import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import $ from 'jquery'

//import submit-form action
import { sendForm } from '../actions'

// import react select
import Select from 'react-select'

const IS_DISABLED = false;
let allowMessage = false;

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = this.getInitialState();
		this.bindFunctions()

		allowMessage = false;
	}

	getInitialState() {
		return {
			name: '',
			email: '',
			age: '',
			city: '',
			region: '',
			workshop: '',
			workshopId: '',
			found: '',
			facebook: '',
			phone: '',
			motivation: '',
			expectations: '',
			project: '',
			life: '',
			values: '',
			question: '',
			deed: '',
			future: ''
		};
	}

	bindFunctions() {
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleCityChange = this.handleCityChange.bind(this);
		this.handleRegionChange = this.handleRegionChange.bind(this);
		this.handleWorkshopChange = this.handleWorkshopChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFoundChange = this.handleFoundChange.bind(this);
		this.handleFacebookChange = this.handleFacebookChange.bind(this);
		this.handlePhoneChange = this.handlePhoneChange.bind(this);
		this.handleMotivationChange = this.handleMotivationChange.bind(this);
		this.handleExpectationsChange = this.handleExpectationsChange.bind(this);
		this.handleProjectChange = this.handleProjectChange.bind(this);
		this.handleLifeChange = this.handleLifeChange.bind(this);
		this.handleValuesChange = this.handleValuesChange.bind(this);
		this.handleQuestionChange = this.handleQuestionChange.bind(this);
		this.handleDeedChange = this.handleDeedChange.bind(this);
		this.handleFutureChange = this.handleFutureChange.bind(this);
		this.handleAgeChange = this.handleAgeChange.bind(this);
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

	handleAgeChange(event) {
		event.preventDefault();
		this.setState({ age: event.target.value });
	}

	handleFutureChange(event) {
		this.setState({ future: event.target.value });
	}

	handleDeedChange(event) {
		this.setState({ deed: event.target.value });
	}

	handleQuestionChange(event) {
		this.setState({ question: event.target.value });
	}

	handleValuesChange(event) {
		this.setState({ values: event.target.value });
	}

	handleLifeChange(event) {
		this.setState({ life: event.target.value });
	}

	handleProjectChange(event) {
		this.setState({ project: event.target.value });
	}

	handleExpectationsChange(event) {
		this.setState({ expectations: event.target.value });
	}

	handleMotivationChange(event) {
		this.setState({ motivation: event.target.value });
	}

	handlePhoneChange(event) {
		this.setState({ phone: event.target.value });
	}

	handleFacebookChange(event) {
		this.setState({ facebook: event.target.value });
	}

	handleFoundChange(event) {
		this.setState({ found: event.value });
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
			<div className="submit-form">
				<form onSubmit={ this.handleSubmit }>
					<div className="form-sign-up-camp row uniform">
						<h3>Vrem să te cunoaștem!</h3>
						<label className="sr-only">Name</label>
						<div className="12u 12u$(xsmall)">
							<input placeholder="Nume" className="form-control" type="text" value={ this.state.value } onChange={ this.handleNameChange } required />
						</div>
						<label className="sr-only">Age</label>
						<div className="12u 12u$(xsmall)">
							<input placeholder="Data Nașterii" className="form-control" type="text" value={ this.state.value } onChange={ this.handleAgeChange } required />
						</div>								
						<label className="sr-only">Email</label>
						<div className="12u 12u$(xsmall)">
							<input placeholder="Email" className="form-control" type="email" value={ this.state.value } onChange={ this.handleEmailChange } required />
						</div>
						<label className="sr-only">Link către profilul tău de Facebook</label>
						<div className="12u 12u$(xsmall)">
							<input placeholder="Link către profilul tău de Facebook" className="form-control" type="text" value={ this.state.value } onChange={ this.handleFacebookChange } required />
						</div>
						<label className="sr-only">Număr de telefon</label>
						<div className="12u 12u$(xsmall)">
							<input placeholder="Număr de telefon" className="form-control" type="text" value={ this.state.value } onChange={ this.handlePhoneChange } required />
						</div>
						<label className="sr-only">Județ</label>
						<div className="12u 12u$(xsmall)">
							<input placeholder="Județ" className="form-control" type="text" value={ this.state.value } onChange={ this.handleRegionChange } required />
						</div>
						<label className="sr-only">Oraș</label>
						<div className="12u 12u$(xsmall)">
							<input placeholder="Oraș" className="form-control" type="text" value={ this.state.value } onChange={ this.handleCityChange } required />
						</div>
						<label className="sr-only">Workshop</label>
						<div className="12u 12u$(xsmall)">
							{/*<Select
								name="form-field-workshop"
								placeholder="Select Workshop..."
								value={ this.state.workshopId }
								onChange={ this.handleWorkshopChange }
								options={ this.renderFormWorkshops() }
								clearable={ false }
								searchable={ false }
								required
							/>*/}
						</div>
						<h3>Secțiunea "Școala de Iarnă"</h3>
						<label className="sr-only">Cum ai aflat despre Școala de Iarnă?</label>
						<div className="12u 12u$(xsmall)">
							<Select
								name="form-field-found"
								placeholder="Cum ai aflat de Școala de Iarnă?"
								value={ this.state.found }
								onChange={ this.handleFoundChange }
								options={ [
									{ value: 'Facebook', label: 'Facebook' },
									{ value: 'Școală / Facultate', label: 'Școală / Facultate' },
									{ value: 'Prieteni', label: 'Prieteni' },
									{ value: 'Altele...', label: 'Altele...' }
								] }
								clearable={ false }
								searchable={ false }
								required
							/>
						</div>
						<label className="sr-only">Motivation</label>
						<div className="12u 12u$(xsmall)">
							<textarea required value={ this.state.value } onChange={ this.handleMotivationChange } placeholder="Ne bucurăm că vrei să fii alături de noi, dar suntem curioși, care este motivația ta pentru a
							aplica la acest proiect?"/>
						</div>
						<label className="sr-only">Expectations</label>
						<div className="12u 12u$(xsmall)">
							<textarea required value={ this.state.value } onChange={ this.handleExpectationsChange } placeholder="Vrem să facem experiența asta perfectă pentru tine așa că ne-am bucura să aflăm care sunt
							așteptările tale de la acest proiect."/>
						</div>
						<h3>Experiența Ta</h3>
						<label className="sr-only">Personal Project</label>
						<div className="12u 12u$(xsmall)">
							<textarea required value={ this.state.value } onChange={ this.handleProjectChange } placeholder="Știm că ești o persoană implicată, povestește-ne despre un proiect la care ai participat și cum
							te-a ajutat."/>
						</div>
						<label className="sr-only">Life Event</label>
						<div className="12u 12u$(xsmall)">
							<textarea required value={ this.state.value } onChange={ this.handleLifeChange } placeholder="Suntem convinși că ai o viață tare interesantă. Împărtășește cu noi o experiență inedită pe
							care ai trăit-o."/>
						</div>
						<label className="sr-only">Values</label>
						<div className="12u 12u$(xsmall)">
							<input placeholder="Care e principiul sau valorile după care te ghidezi în viață?" className="form-control" type="text" value={ this.state.value } onChange={ this.handleValuesChange } required />
						</div>
						<h3>Creativitatea e contagioasă. A ajuns și la tine?</h3>
						<label className="sr-only">Life Event</label>
						<div className="12u 12u$(xsmall)">
							<h5>
								Într-o casă locuiau 2 surori. Una dintre ele şi-a omorât soţul. 
								Dacă cealaltă anunţă poliţia, va intra şi ea, la rândul ei, la închisoare.
								De ce?
							</h5>
							<textarea required value={ this.state.value } onChange={ this.handleQuestionChange } placeholder="Răspunsul tău..."/>
						</div>
						<div className="12u 12u$(xsmall)">
							<h5>
								Când a fost ultima dată când ai făcut ceva pentru prima oară? 
								Povestește-ne despre asta!
							</h5>
							<textarea required value={ this.state.value } onChange={ this.handleDeedChange } placeholder="Răspunsul tău..."/>
						</div>
						<div className="12u 12u$(xsmall)">
							<h5>
								Și pentru că viitorul e cea mai mare provocare pentru care ne pregătim, ce crezi că vei
								spune peste 5 ani despre Școala de Iarnă 2018?
							</h5>
							<textarea required value={ this.state.value } onChange={ this.handleFutureChange } placeholder="Răspunsul tău..."/>
						</div>
					</div>
					<input style={{marginTop: '1em'}} className="btn 3u 3u$(xsmall)" type="submit" value="Submit" />
				</form>
			</div>
		);
	}

	hideForm() {
		$('.submit-form').fadeOut('slow');
	}

	scrollToTop(duration) {
		$('html, body').animate({
			scrollTop: 0
		}, parseInt(duration));
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
			this.hideForm();
			return (
				<div className="alert-success">
					<strong>Success!</strong> The submission has been successfully sent.
			  	</div>
			);
		} else {
			this.scrollToTop(2000);
			if (this.props.formResponse.sendForm.data === 'error_email_found') {
				return (
					<div className="alert-danger">
						<strong>Error!</strong> Email address has already been used.
					</div>
				);
			} else {
				this.scrollToTop();
				return (
					<div className="alert-danger">
						<strong>Error!</strong> The Facebook link has already been provided.
					</div>
				);
			}
		}
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
	return bindActionCreators({ sendForm }, dispatch);
}

function mapStateToProps(state) {
	return {
		users: state.users,
		formResponse: state.submitForm
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);