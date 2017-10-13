import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createHashHistory } from 'history'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

/*
 * Import actions
 */
import { getLoggedNavbar } from '../actions'
import { userLogout } from '../actions/index'

const customHistory = createHashHistory();

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
	
	renderButtons() {
		if(this.props.users.isLoggedIn === true) {
			return ( <button onClick={ this.submitLogout } className="btn btn-default navbar-btn login-btn">
						Logout ({ this.props.users.username.substring(0, this.props.users.username.indexOf('@')) })
					</button> );
		} else {
			return <li><Link to="/login">Login</Link></li>
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

	renderAdminButton($flag_permission) {
		if ($flag_permission === true) {
			return (
				<li className="dropdown">
		    		<a className="dropdown-toggle" data-toggle="dropdown" href="#">Admin
		    		<span className="caret"></span></a>
		    		<ul className="dropdown-menu">
			          	{ this.renderLoggedInButtons() }
		    		</ul>
		  		</li>
			);
		}
	}

	render() {
		return (
			<nav className="navbar navbar-inverse">
			  	<div className="container-fluid">
			    	<div className="navbar-header">
			      		{ <Link className="navbar-brand" to="/">WebSiteName</Link> }
			    	</div>
			    	<ul className="nav navbar-nav">
			    		<li>{ <Link to="/">Home</Link> }</li>
						<li>{ <Link to="/form">Form</Link> }</li>
						<li>{ <Link to="/contributors">Contributors</Link> }</li>
						<li>{ <Link to="/sponsors">Sponsors</Link> }</li>
			      		{ this.renderAdminButton(this.props.users.isLoggedIn) }
			    	</ul>
			    	<ul className="nav navbar-nav navbar-right">
			    		{ this.renderButtons() }
			    	</ul>
			  	</div>
			</nav>
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