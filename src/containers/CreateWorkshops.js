import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createHashHistory } from 'history'

//import action
import { createWorkshop } from '../actions'

const customHistory = createHashHistory();

class CreateWorkshops extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		if (!this.props.users.isLoggedIn) {
			customHistory.push('/');
		}
	}

	handleChange(event) {
		this.setState({
			name: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.createWorkshop(this.state.name);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.isCreatedWorkshop.workShopCreated.status === true) {
			customHistory.push('/view/workshops');
		} else {
			if (nextProps.isCreatedWorkshop.workShopCreated.data === 'error_name_exists') {
				alert('Your workshop could not be saved. Name already exists.');
			}
		}
	}

	renderForm() {
		return (
			<form onSubmit={ this.handleSubmit }>
				<div className="form-create-categories row uniform">
					<label className="sr-only">Name</label>
					<div className="12u 12u$(xsmall)">
						<input className="form-control" type="text" value={ this.state.value } onChange={ this.handleChange } required />
					</div>	
					<div className="12u 12u$(small)">
						<input className="button" type="submit" value="Submit" />
					</div>
				</div>
			</form>
		);
	}

	render() {
		return (
			<section id="two" className="wrapper style2">
				<div className="inner">
					<div className="box">
						<div className="content">
							<header className="align-center">
								<p>this section is used to create a workshop</p>
								<h2>Create Workshop</h2>
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
	return bindActionCreators({ createWorkshop }, dispatch);
}

function mapStateToProps(state) {
	return {
		users: state.users,
		isCreatedWorkshop: state.createWorkshop
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkshops);