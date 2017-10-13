import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createHashHistory } from 'history'
import _ from 'lodash'

//import actions
import { getWorkshops } from '../actions'
import { deleteWorkshop } from '../actions'

const customHistory = createHashHistory();

class ViewWorkshops extends Component {
	constructor(props) {
		super(props);

		this.refreshWorkshops = this.refreshWorkshops.bind(this);
	}

	componentWillMount() {
		if (!this.props.users.isLoggedIn) {
			customHistory.push('/');
		}
	}

	componentDidMount() {
		this.refreshWorkshops();
	}

	refreshWorkshops() {
		this.props.getWorkshops();
		this.props.getWorkshops();
	}

	submitDeletion(id) {
		console.log(id);
		this.props.deleteWorkshop(id);
		this.refreshWorkshops();
	}

	renderWorkshops() {
		return _.map(this.props.workshops.workshops, (it) => {
			return (
				<li key={ it.id } className="list-group-item col-md-12 col-sm-12">
					<span>{ it.name }</span>
					<button ref="btn" className="btn btn-danger" style={{float: 'right'}} onClick={() => this.submitDeletion(it.id) }>X</button>
				</li>
			);
		});
	}

	render() {
		return (
			<section className="view-workshops contianer col-md-12 col-sm-12">
				<div className="page-header"><h1>ViewWorkshops Component</h1></div>
				<div className="view-workshops col-md-12 col-sm-12">
					<div className="col-md-8 col-sm-8">
						<ul className="list-group">
							{ this.renderWorkshops() }
						</ul>
					</div>
					<div className="col-md-4 col-sm-4">
						<button 
							className="btn btn-warning" 
							onClick={ this.refreshWorkshops }
							value="submit">
								Refresh
						</button>
					</div>
				</div>
			</section>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getWorkshops, deleteWorkshop }, dispatch);	
}

function mapStateToProps(state) {
	return {
		users: state.users,
		workshops: state.getWorkshops
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewWorkshops);