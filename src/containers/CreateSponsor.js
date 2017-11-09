import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createHashHistory } from 'history'
import axios from 'axios'

// import action
import { createSponsor } from '../actions'

// import image uploader
import ImageUploader from 'react-images-upload'

const customHistory = createHashHistory();

class CreateSponsor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			images: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onDrop = this.onDrop.bind(this);
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

	onDrop(picture) {
		this.setState({
			images: this.state.images.concat(picture)
		});
	}

	renderForm() {
		return (
			<div>
				<form onSubmit={ this.handleSubmit }>
					<div className="uniform">
						<label className="sr-only">Name</label>
						<div className="12u 12u$(xsmall)">
							<input className="form-control" placeholder="Name" type="text" value={ this.state.value } onChange={ this.handleChange } required />
						</div>
						<div className="12u 12u%(medium)">
							<ImageUploader 
								withIcon={ true }
								buttonText='Upload'
								onChange={ this.onDrop }
								imgExtension={ ['.jpg', '.png'] }
								maxFileSize={ 6291456 }
							/>
						</div>
					</div>
					<input type="submit" name="submit" value="Submit" />
				</form>
			</div>
		);
	}

	render() {
		return (
			<section id="two" className="wrapper style2">
				<div className="inner">
					<div className="box">
						<div className="content">
							<header className="align-center">
								<p>this section is used to create a sponsor</p>
								<h2>Create Sponsor</h2>
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
	return bindActionCreators({ createSponsor }, dispatch);
}

function mapStateToProps(state) {
	return {
		users: state.users,
		sponsorCreated: state.createSponsor.sponsorCreated
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateSponsor);