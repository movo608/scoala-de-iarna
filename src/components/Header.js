import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userLogout } from '../actions/index'
import { createHashHistory } from 'history'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

/*
 * Import actions
 */
import { getLoggedNavbar } from '../actions'

const customHistory = createHashHistory();

class Header extends Component {
	componentWillMount() {
		this.props.getLoggedNavbar();
	}

	constructor(props){
		super(props);

		this.submitLogout = this.submitLogout.bind(this);
	}

	submitLogout() {
		this.props.userLogout();
		customHistory.push('/');
	}

	renderButtons() {
		if(this.props.users.isLoggedIn) {
			return  <button onClick={this.submitLogout} className="btn btn-default navbar-btn login-btn">Logout</button>;
		} else {
			return <li><Link to="/login">Login</Link></li>
		}
	}

	renderLoggedInButtons($flag_permission) {
		if ($flag_permission) {
			return _.map(this.props.navbarLogged.navbarLogged, (link) => {
				return (
					<li key={ link.id }>
						<Link to={ link.name }>{ link.value_en }</Link>
					</li>
				);
			});
		}
	}

	render() {
		return (
			<nav className="navbar navbar-inverse">
			  <div className="container-fluid">
				    <div className="navbar-header">
				      	{ <Link className="navbar-brand" to="/">WebSiteName</Link> }
				    </div>
			    <ul className="nav navbar-nav navbar-right">
			    	<li>
						{ <Link to="/">Home</Link> }
			    	</li>
			    	{ this.renderButtons() }
					
					{ this.renderLoggedInButtons(this.props.users.isLoggedIn) }

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