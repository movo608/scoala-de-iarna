import React, { Component } from 'react'
import { ROOT_URL } from '../constants/ActionTypes'
import { createHashHistory } from 'history'

const customHistory = createHashHistory();

export default class ApiNews extends Component {
	componentDidMount() {
		window.open(`${ROOT_URL}news`);
		customHistory.push('/');
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