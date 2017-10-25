import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createHashHistory } from 'history'
import { bindActionCreators } from 'redux'
import { reactLocalStorage as __storage } from 'reactjs-localstorage'

// import login actions
import { userLogin } from '../actions'

const customHistory = createHashHistory();

class Login extends Component {
    constructor(props) {
        super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.changeEmail = this.changeEmail.bind(this);
		this.changePassword = this.changePassword.bind(this);
		this.submitLogin = this.submitLogin.bind(this);
    }

    componentWillMount() {
    	if (this.props.users.isLoggedIn) {
    		customHistory.push('/admin');
    	}
    }

	changeEmail(e) {
		this.setState({email: e.target.value});
	}

	changePassword(e) {
		this.setState({password: e.target.value});
	}

	submitLogin() {
		this.props.userLogin(this.state.email, this.state.password);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.users.isLoggedIn === true) {
			__storage.setObject('user', { users: this.props.users });
			customHistory.push('/admin');
		}
	}

    render() {
        return ( 
			<section id="two" className="wrapper style2">
				<div className="inner">
					<div className="box">
						<div className="content">
							<header className="align-center">
								<p>please sign in in order to proceed to the admin panel</p>
								<h2>Sign in</h2>
							</header>
							<form>
								<div className="form-signin row uniform">
									<label className="sr-only">Email address</label>
									<div className="12u 12u$(xsmall)">
										<input onChange={ this.changeEmail } type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" />
									</div>								
									<label className="sr-only">Password</label>
									<div className="12u 12u$(xsmall)">
										<input onChange={ this.changePassword } type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />									
									</div>
								</div>
							</form>
							<button onClick={ this.submitLogin } className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
						</div>
					</div>
				</div>
			</section>
        );
    }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ userLogin }, dispatch);
}

function mapStateToProps(state) {
	return {
		users: state.users
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);