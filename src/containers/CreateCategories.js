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

	handleSubmit(e) {
		e.preventDefault();
		this.props.createCategory(this.state.nameValue);
		customHistory.push('/view/categories');
	}

	render() {
		return (
			<section id="two" className="wrapper style2">
				<div className="inner">
					<div className="box">
						<div className="content">
							<header className="align-center">
								<p>this section is used to create a post category</p>
								<h2>Create Category</h2>
							</header>
							<form>
								<div className="form-create-categories row uniform">
									<label className="sr-only">Name</label>
									<div className="12u 12u$(xsmall)">
									<input className="form-control" type="text" value={ this.state.value } onChange={ this.handleChange } required />
									</div>								
								</div>
							</form>
							<input onClick={ this.handleSubmit } className="btn btn-lg btn-primary btn-block" type="submit" value="Submit" />
						</div>
					</div>
				</div>
			</section>
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