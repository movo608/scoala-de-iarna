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
		this.props.deleteWorkshop(id);
		this.refreshWorkshops();
	}

	renderWorkshops() {
		return _.map(this.props.workshops.workshops, (it) => {
			return (
				<li key={ it.id } style={{minHeight: '60px'}}>
					<span>{ it.name }</span>
					<button ref="btn" className="btn btn-danger" style={{float: 'right'}} onClick={() => this.submitDeletion(it.id) }>X</button>
				</li>
			);
		});
	}

	render() {
		return (
			<section id="two" className="wrapper style2">
				<div className="inner">
					<div className="box">
						<div className="content">
							<header className="align-center">
								<p>in this section you can see all the workshops</p>
								<h2>View Workshops</h2>
							</header>
							<button style={{marginBottom: '25px', marginRight: '10px'}} onClick={ () => this.refreshWorkshops() }>Refresh</button>
							<button style={{marginBottom: '25px'}} onClick={ () => customHistory.push('/create/workshop') }>Create</button>
							<ul className="alt categories-list uniform">
								{ this.renderWorkshops() }
							</ul>
						</div>
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