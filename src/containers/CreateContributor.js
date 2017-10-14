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