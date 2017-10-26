import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createHashHistory } from 'history'

//import action
import { createContributor } from '../actions'

const customHistory = createHashHistory();

class CreateContributor extends Component {
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
		this.props.createContributor(this.state);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.contributorCreated.status === true) {
			customHistory.push('/view/contributors');
		} else {
			alert('Could not create contributor. Name already exists.');
		}
	}

	renderForm() {
		return (
			<section id="two" className="wrapper style2">
				<div className="inner">
					<div className="box">
						<div className="content">
							<header className="align-center">
								<p>this section is used to create a contributor</p>
								<h2>Create Contributor</h2>
							</header>
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
						</div>
					</div>
				</div>
			</section>
		);
	}

	render() {
		return (
			<section className="create-workshops index">
				<div className="page-header"><h1>CreateContributor Component</h1></div>
				{ this.renderForm() }
			</section>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createContributor }, dispatch);
}

function mapStateToProps(state) {
	return {
		users: state.users,
		contributorCreated: state.createContributor.contributorCreated
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateContributor);