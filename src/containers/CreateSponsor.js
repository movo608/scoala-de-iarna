import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createHashHistory } from 'history'

//import image upload
import ImageUploader from 'react-images-upload'

//import action
import { createSponsor } from '../actions'

const customHistory = createHashHistory();

class CreateSponsor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			pictures: []
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
		console.log(this.state)
		this.props.createSponsor(this.state);
	}

	onDrop(picture) {
		this.setState({
			pictures: this.state.pictures.concat(picture)
			//pictures: picture
		});
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
							<ImageUploader
								name='image'
								withIcon={ true }
								buttonText='Choose images'
								onChange={ this.onDrop }
								imgExtension={ ['.jpg', '.png'] }
								maxFileSize={ 1048576 }
								withPreview={ true }
								label='Max file size: 10mb, accepted: jpg, png'
								fileSizeError='File is too big.'
								fileTypeError=': not supported extension.'
							/>
				        </div>
				        <input className="btn btn-default" type="submit" value="Submit" />
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