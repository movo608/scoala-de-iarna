import React, { Component } from 'react'
import { ROOT_URL } from '../constants/ActionTypes'

export default class ApiSponsors extends Component {
	componentWillMount() {
		window.location = `${ROOT_URL}sponsors`;
	}

	render() {
		return (
			<section id="two" className="wrapper style3">
				<div className="inner">
					<header className="align-center">
						<h2>Redirecting...</h2>
					</header>
				</div>
			</section>
		);
	}
}