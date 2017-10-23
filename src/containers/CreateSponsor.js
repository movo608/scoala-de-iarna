import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createHashHistory } from 'history'

//import dropZone
import Dropzone from 'react-dropzone'

// import Material-UI
import FontIcon from 'material-ui/FontIcon'
import { blue500, red500, greenA200 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// import action
import { createSponsor } from '../actions'

// import root url
import { ROOT_URL } from '../constants/ActionTypes'

// require 'superagent' module for request invocation
let request = require('superagent');

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
		this.onDrop = this.onDrop.bind(this);
	}

	componentWillMount() {
		/*if (!this.props.users.isLoggedIn) {
			customHistory.push('/');
		}*/
	}

	componentWillReceiveProps(nextProps) {
		/*if (nextProps.sponsorCreated.status === true) {
			customHistory.push('/view/sponsors');
		} else {
			alert('Could not create contributor. Name already exists.');
		}*/
	}

	handleChange(event) {
		this.setState({
			name: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		const self = this;

		/*if (this.state.filesToBeSent.length > 0) {
			let filesArray = this.state.filesToBeSent;
			const req = request.post(`${ROOT_URL}api/create-sponsor`);
			for (let i in filesArray) {
				req.attach(filesArray[i][0].name, filesArray[i][0]);
			}
			req.end((error, response) => {
				console.log('response', response);
			});
		}*/
		this.props.createSponsor(this.state);
	}

	onDrop(acceptedFiles, rejectedFiles) {
		let filesToBeSent = this.state.filesToBeSent;
		if (filesToBeSent.length < this.state.count) {
			filesToBeSent.push(acceptedFiles);
			let filesPreview = [];
			for (let i in filesToBeSent) {
				filesPreview.push(
					<div>
						<div>{ filesToBeSent[i][0].name }</div>
						<MuiThemeProvider>
							<a href="#">
								<FontIcon
									key={ i }
									className="material-icons customstyle"
									color={ blue500 }
									styles={{ top: 10}}
								>
									clear
								</FontIcon>
						</a>
						</MuiThemeProvider>
					</div>
				);
			}
			this.setState({ filesToBeSent, filesPreview });
		} else {
			alert("Limit of uploadable photos reached.");
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
							<Dropzone onDrop={(files) => this.onDrop(files)}>
								<div>Try dropping some files here, or click to select files to upload.</div>
							</Dropzone>
							<div className="uploaded-files-preview">
								Files to be uploaded: 
								{ this.state.filesPreview }
							</div>
						</div>
						<button className="btn btn-primary" onClick={ () => this.handleSubmit }>Submit</button>
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