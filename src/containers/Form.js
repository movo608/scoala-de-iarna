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
const IS_DISABLED = false;

let allowMessage = false;

class Form extends Component {
	constructor(props) {
		super(props);
		
		if (IS_DISABLED === true) {
			customHistory.push('/');
		}

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
			<section className="col-md-12 col-sm-12">
				<form className="col-md-12 col-sm-12" onSubmit={ this.handleSubmit }>
					<div className="form-group">
				        <label>
				          	Name:
				          	<input className="form-control" type="text" value={ this.state.value } onChange={ this.handleNameChange } required />
						</label>
					</div>
					<div className="form-group">
				        <label>
				          	Email:
				          	<input className="form-control" type="email" value={ this.state.value } onChange={ this.handleEmailChange } required />
						</label>
					</div>
					<div className="form-group">
				        <label>
				          	City:
				          	<input className="form-control" type="text" value={ this.state.value } onChange={ this.handleCityChange } required />
						</label>
					</div>
					<div className="form-group">
				        <label>
				          	Region:
				          	<input className="form-control" type="text" value={ this.state.value } onChange={ this.handleRegionChange } required />
				        </label>
					</div>
					<div className="form-group">
				        <label>
				          	Workshop:
						</label>
						<Select
							name="form-field-workshop"
							value={ this.state.workshopId }
							onChange={ this.handleWorkshopChange }
							options={ this.renderFormWorkshops() }
							clearable={ false }
							searchable={ false }
							required
						/>
					</div>
					<input className="btn btn-default" type="submit" value="Submit" />
			    </form>
		    </section>
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
				<div className="alert alert-success alert-dismissable">
					<a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
					<strong>Success!</strong> The information has been successfully submitted.
				</div>
			);
		} else {
			return (
				<div className="alert alert-danger alert-dismissable">
					<a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
					<strong>Error!</strong> The email address has already been used.
				</div>
			);
		}
	}
	
	render() {
		return (
			<section className="container">
				{ allowMessage === true ? this.renderMessage() : null }
				<div className="page-header"><h1>Sign up form</h1></div>
				{ this.renderForm() }
			</section>
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