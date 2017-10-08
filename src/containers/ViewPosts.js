import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createHashHistory } from 'history'
import _ from 'lodash'

//import actions
import { getPosts } from '../actions'
import { deletePost } from '../actions'

const customHistory = createHashHistory();

class ViewPosts extends Component {
	constructor(props) {
		super(props);
		
		this.refreshPosts = this.refreshPosts.bind(this);
	}

	componentWillMount() {
		if (!this.props.users.isLoggedIn) {
			customHistory.push('/');
		}
	}

	componentDidMount() {
		this.props.getPosts();
		this.refreshPosts();
	}

	refreshPosts() {
		this.props.getPosts();
		this.props.getPosts();
	}

	renderPosts() {
		return _.map(this.props.posts.posts, (gyuri) => {
			return (
				<li key={ gyuri.id } className="list-group-item col-md-12 col-sm-12">
					<h3>{ gyuri.name }</h3>
					<p>{ gyuri.body }</p>
					<button ref="btn" className="btn btn-danger" style={{float: 'right'}} onClick={() => this.submitDeletion(gyuri.id) }>X</button>
				</li>
			);
		});
	}

	submitDeletion(id) {
		this.props.deletePost(id);
		this.refreshPosts();
	}

	render() {
		return (
			<section className="view-posts index col-md-12 col-sm-12">
				<div className="page-header"><h1>View Posts Component</h1></div>

				<div className="row">
					<div className="col-md-6 col-sm-6">
				    	<ul className="list-group">
				    		{ this.renderPosts() }
				    	</ul>
					</div>

					<div className="col-md-6 col-sm-6">
						<button 
							className="btn btn-warning" 
							value="submit" 
							onClick={ this.refreshPosts }>
								Refresh Posts
						</button>
					</div>
				</div>
			</section>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getPosts, deletePost }, dispatch);
}

function mapStateToProps(state) {
	return {
		users: state.users,
		posts: state.getPosts,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPosts);