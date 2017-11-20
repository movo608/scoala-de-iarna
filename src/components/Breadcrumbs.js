import React from 'react'
import { Link } from 'react-router-dom'

export default class Breadcrumbs extends React.Component {
	constructor(props) {
		super(props);

		console.log(this);
	}

	renderCurrent() {
		return (
			<span>
				<i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;
				<li><a>{this.props.current}</a></li>
			</span>
		);
	}

	render() {
		return (
			<div className={ this.props.className }>
				<ol className="arrows">
					<li><Link to='/'>Home</Link></li>
					<i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;
					<li><Link to='/schools'>Școlile AGA</Link></li>
					{ this.props.current ? this.renderCurrent() : null }
				</ol>
			</div>
		);
	}
}