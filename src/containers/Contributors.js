import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'

//import actions
import { getContributors } from '../actions'

class Contributors extends Component {
	componentDidMount() {
		this.props.getContributors();
		this.props.getContributors();
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

	/*render() {
		return (
			<div>
				<h1 className="page-header">Contributors Component</h1>
				<section className="col-md-12 col-sm-12">
					<ul className="list-group contributors">
						{ this.renderContributors() }
					</ul>
				</section>
			</div>
		);
	}*/

	render() {
		return (
			<section id="two" className="wrapper style2">
				<div className="inner">
					<div className="box">
						<div className="content">
							<header className="align-center">
								<p>this page is still under development</p>
								<h2>CONTRIBUTORS (PAGE UNDER DEVELOPMENT)</h2>
							</header>
							<p>
								Since the current page is under development, it will become available 
								at a further moment in the near future.
							</p>
							<p>
								LOREM IPSUM DOLOR SIT AMET, CONSECTETUR CESAERE IMPERATORUS ROMANI
								LOREM IPSUM DOLOR SIT AMET, CONSECTETUR CESAERE IMPERATORUS ROMANI
								LOREM IPSUM DOLOR SIT AMET, CONSECTETUR CESAERE IMPERATORUS ROMANI
								LOREM IPSUM DOLOR SIT AMET, CONSECTETUR CESAERE IMPERATORUS ROMANI
							</p>
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