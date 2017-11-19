import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createHashHistory } from 'history'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import axios from 'axios'

// import root url
import {
	ROOT_FRONTEND as __frontend,
	ROOT_URL as __api
} from '../constants/ActionTypes'

/*
 * Import actions
 */
import { getLoggedNavbar } from '../actions'
import { userLogout } from '../actions/index'

const customHistory = createHashHistory();
let USER_ID = -1;

class Header extends Component {
	constructor(props) {
		super(props);

		this.submitLogout = this.submitLogout.bind(this);
	}

	componentWillMount() {
		this.props.getLoggedNavbar();
	}

	submitLogout() {
		this.props.userLogout(this.props.users.userId);
		customHistory.push('/');
	}

	componentWillReceiveProps(nextProps) {
		USER_ID = nextProps.users.userId;
	}
	
	renderLogout() {
		if(this.props.users.isLoggedIn === true) {
			return (
				<button style={{ marginRight: '10px' }} onClick={ this.submitLogout } className="mobile-hidden btn btn-default navbar-btn logout-btn">
					Logout ({ this.props.users.username.substring(0, this.props.users.username.indexOf('@')) })
				</button> 
			);
		}
	}

	renderLoggedInButtons() {
		return _.map(this.props.navbarLogged.navbarLogged, (link) => {
			return (
				<li key={ link.id }>
					<Link to={ link.name }>{ link.value }</Link>
				</li>
			);
		});
	}

	renderAdminButtons($flag_permission) {
		if ($flag_permission === true) {
			return (
				<ul className="links">
					<li><Link to='/'>Home</Link></li>
					{ this.renderLoggedInButtons() }
				</ul>
			);
		}
	}

	openFrontendWindow() {
		window.open(__frontend);
	}

	renderAdmin() {
		return (
			<div>
				<header id="header" className="">
					<div className="logo"><Link to="/">Hello, nigga <span>by Molfex</span></Link></div>
					{ this.renderLogout() }
					<button className="mobile-hidden" onClick={ () => this.openFrontendWindow() }>To Frontend</button>
					<a href="#menu" className="toggle-menu">Menu</a>
				</header>
				<nav id="menu">
					{ this.renderAdminButtons(this.props.users.isLoggedIn) }
				</nav>
			</div>
		);
	}

	renderStaticNavigation() {
		return (
			<ul className="links">
				<li>{ <Link to="/">Home</Link> }</li>
				<li>{ <Link to="/about">About</Link> }</li>
				<li>{ <Link to="/schools">Schools</Link> }</li>
				<li>{ <Link to="/form">Form</Link> }</li>
				<li>{ <Link to="/contributors">Contributors</Link> }</li>
				<li>{ <Link to="/sponsors">Sponsors</Link> }</li>
			</ul>
		);
	}

	renderMain() {
		return (
			<div>
				<header id="header" className="">
					<div className="logo"><Link to="/">Hello, nigga <span>by Molfex</span></Link></div>
					<a href="#menu" className="toggle-menu">Menu</a>
				</header>
				<nav id="menu" className="">
					{ this.renderStaticNavigation() }					
				</nav>
			</div>
		);
	}

	render() {
		return (
			this.props.users.isLoggedIn ? this.renderAdmin() : this.renderMain()
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getLoggedNavbar, userLogout }, dispatch);
}

function mapStateToProps(state) {
	return {
		users: state.users,
		navbarLogged: state.loggedNavbar,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

onbeforeunload = () => {
	axios({
		method: 'get',
		url: `${__api}/login/logout`,
		params: {
			id: USER_ID
		}
	});
}