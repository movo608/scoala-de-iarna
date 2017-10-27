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
				<li key={ gyuri.id }>
					<h3>Title: { gyuri.name }</h3>
					<div className="12u $12u(small)">
						Category: { gyuri.category_name } (id: { gyuri.category_id })
					</div>
					<div className="12u $12u(small)">
						<h4>Body</h4>
						<p className="post-body">{ gyuri.body }</p>
					</div>
					<button ref="btn" className="12u $12u(small)" onClick={() => this.submitDeletion(gyuri.id) }>REMOVE</button>
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
			<section id="two" className="wrapper style2">
				<div className="inner">
					<div className="box">
						<div className="content">
							<header className="align-center">
								<p>in this section you can see all the posts</p>
								<h2>View Posts</h2>
							</header>
							<button style={{marginBottom: '25px', marginRight: '10px'}} onClick={ () => this.refreshPosts() }>Refresh</button>
							<button style={{marginBottom: '25px'}} onClick={ () => customHistory.push('/create/post') }>Create</button>
							<ul className="alt categories-list uniform">
								{ this.renderPosts() }
							</ul>
						</div>
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