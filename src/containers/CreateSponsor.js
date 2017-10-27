import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createHashHistory } from 'history'

// import action
import { createSponsor } from '../actions'

// import root url
import { ROOT_URL } from '../constants/ActionTypes'

const customHistory = createHashHistory();

class CreateSponsor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			filesPreview: [],
			filesToBeSent: [],
			count: 10
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		/*if (!this.props.users.isLoggedIn) {
			customHistory.push('/');
		}*/
	}

	handleChange(event) {
		this.setState({
			name: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.createSponsor(this.state);
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
							{ /* ADD PHOTO COLLECTOR */ }
						</div>
						<input value="Submit" name="submit"/>
				    </form>
			    </div>
		    </section>
		);
	}

	render() {
		return (
			<section className="create-sponsors index">
				<div className="page-header"><h1>CreateSponsor Component</h1></div>
				{ this.renderForm() }
			</section>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createSponsor }, dispatch);
}

function mapStateToProps(state) {
	return {
		users: state.users,
		sponsorCreated: state.createSponsor.sponsorCreated
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateSponsor);