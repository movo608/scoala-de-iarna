import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userLogin } from '../actions/index'
import { createHashHistory } from 'history';

const customHistory = createHashHistory();

class Login extends Component {
    constructor(props) {
        super(props);
		this.state = {
			email : '',
			password: ''
		}

		this.changeEmail = this.changeEmail.bind(this);
		this.changePassword = this.changePassword.bind(this);
		this.submitLogin = this.submitLogin.bind(this);
    }

	changeEmail(e) {
		this.setState({email : e.target.value});
	}

	changePassword(e) {
		this.setState({password : e.target.value});
	}

	submitLogin(){
		const { dispatch } = this.props;
		dispatch(userLogin(this.state.email, this.state.password));
		if(this.props.users.isLoggedIn) {
			customHistory.push('/browse');
		}else {
			alert("Invalid email or address");
		}
	}

    render() {
        return (
            <div className="container">
                <div className="col-md-6 col-md-offset-3 text-center">
                    <div className="form-signin">
                        <h2 className="form-signin-heading">Please sign in</h2>
                        <label className="sr-only">Email address</label>
                        <input onChange={this.changeEmail}type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" />
						<label className="sr-only">Password</label>
						<input onChange={this.changePassword}type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
						<div className="checkbox">
							<label>
								<input type="checkbox" value="remember-me" /> Remember me
							</label>
						</div>
						<button onClick={this.submitLogin} className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </div>
                </div>
            </div>
        )
    }
}

function select(state) {
	return {
		users: state.users
	}
}

export default connect(select)(Login);