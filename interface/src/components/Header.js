import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { userLogout } from '../actions/index'
import { createHashHistory } from 'history';

const customHistory = createHashHistory();

class Header extends Component {
	constructor(props){
		super(props);

		this.submitLogout = this.submitLogout.bind(this);
	}

	submitLogout() {
		const { dispatch } = this.props;
		dispatch(userLogout());
		customHistory.push('/');
	}

	renderButton(){
		if(this.props.users.isLoggedIn){
			return  <button onClick={this.submitLogout} className="btn btn-default navbar-btn login-btn">Logout</button>;
		}else {
			return <Link to="/login" className="btn btn-default navbar-btn login-btn">Login</Link>;
		}
	}

	render() {
		return (
			  <nav className="navbar navbar-default">
				  <div className="container-fluid">
					  <div className="navbar-header">
						  <Link className="navbar-brand" to="/">WebSiteName</Link>
					  </div>
					  <ul className="nav navbar-nav navbar-right">
						  <li>
							  {this.renderButton()}
						  </li>
					  </ul>
				  </div>
			  </nav>
		)
	}
}

function select(state) {
	return {
		users: state.users
	}
}

export default connect(select)(Header);