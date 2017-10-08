import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createHashHistory } from 'history';

const customHistory = createHashHistory();

class Browse extends Component {

	componentWillMount() {
		if(!this.props.users.isLoggedIn){
			customHistory.push('/');
		}
	}

    render() {
        return (
            <div className="container">
                <div className="col-md-6 text-center">
                    <h2>This is the Browse page only logged in users can see.</h2>
                </div>
            </div>
        );
    }
}

function select(state) {
	return {
		users: state.users
	}
}

export default connect(select)(Browse);