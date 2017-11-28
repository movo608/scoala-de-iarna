import React, { Component } from 'react'
import { ROOT_URL } from '../constants/ActionTypes'

export default class ApiNews extends Component {
	componentWillMount() {
		window.location = `${ROOT_URL}news`;
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