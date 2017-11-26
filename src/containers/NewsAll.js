import React, { Component } from 'react'

export default class NewsAll extends Component {
	render() {
		return (
			<div>
				<section id="One" className="wrapper style3">
					<div className="inner">
						<header className="align-center">
							<h2>Breaking News</h2>
						</header>
					</div>
				</section>

				<section id="two" className="wrapper style2">
					<div className="inner">
						<div className="content" style={{color: 'gray', fontWeight: '500'}}>
							<div className="box">
								<h2 className="align-center">Page under development</h2>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}