import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createHashHistory } from 'history'

// import create category action
import { createCategory } from '../actions'

const customHistory = createHashHistory();

class CreateCategories extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			nameValue: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		if(!this.props.users.isLoggedIn) {
			customHistory.push('/');
		}
	}

	handleChange(event) {
		this.setState({ nameValue: event.target.value })
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.createCategory(this.state.nameValue);
		customHistory.push('/view/categories');
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
			<div className="container">
				<div>Create Category Component</div>
				<div>
					{ this.renderForm() }
				</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createCategory }, dispatch);
}

function mapStateToProps(state) {
	return {
		users: state.users,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCategories);