import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ROOT_URL } from '../constants/ActionTypes'
import { Link } from 'react-router-dom'
import _ from 'lodash'

// import actions
import { getSponsors } from '../actions'

class Sponsors extends Component {
	componentWillMount() {
		this.props.getSponsors();
	}

	renderSponsors() {
		return _.map(this.props.sponsors, (it) => {
			return (
				<div key={ it.id }>
					<div className="box 6u 12u$(medium) 6u 12u$(xsmall) 6u 12u$(small)" style={{backgroundColor: 'lightgray'}}>
						<div className="image fit">
							<img src={ `${ROOT_URL}uploads/${it.image}` } alt="" />
						</div>
						<div className="content">
							<header className="align-center">
								<h2>{ it.name }</h2>
							</header>
						</div>
					</div>
				</div>
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
								<p>Dorim să le mulțumim sponsorilor noștri pentru implicare</p>
								<h2>Sponsorii Noștri</h2>
							</header>
							<div className="grid-style">
								<div className="align-center">
									{ this.renderSponsors() }
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

function mapStateToProps(state) {
	return {
		sponsors: state.getSponsors.sponsors
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getSponsors }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sponsors);