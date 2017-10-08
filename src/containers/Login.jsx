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
    		customHistory.push('/browse');
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
			customHistory.push('/browse');
		}
	}

    render() {
        return (
            <div className="container">
                <div className="col-md-6 col-md-offset-3 text-center">
                    <div className="form-signin">
                        <h2 className="form-signin-heading">Please sign in</h2>
                        <label className="sr-only">Email address</label>
                        <input onChange={ this.changeEmail } type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" />
						<label className="sr-only">Password</label>
						<input onChange={ this.changePassword } type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
						<div className="checkbox">
							<label>
								<input type="checkbox" value="remember-me" /> Remember me
							</label>
						</div>
						<button onClick={ this.submitLogin } className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </div>
                </div>
            </div>
        )
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