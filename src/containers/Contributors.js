import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'

//import actions
import { getContributors } from '../actions'

class Contributors extends Component {
	componentDidMount() {
		this.props.getContributors();
	}

	renderContributors() {
		return _.map(this.props.contributors, (it) => {
			return (
				<li key={ it.id }>
					<span>{ it.name }</span>
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
								<p>dorim să le adresăm sincere mulțumiri contribuitorilor noștri</p>
								<h2>Contribuitori</h2>
							</header>
							<div className="12u 12u$(medium) uniform contributors-list Aligner align-center">
								<ul className="alt 6u 6u$(medium) contributors-list">
									{ this.renderContributors() }
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getContributors }, dispatch);
}

function mapStateToProps(state) {
	return {
		users: state.users,
		contributors: state.getContributors.contributors
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Contributors);