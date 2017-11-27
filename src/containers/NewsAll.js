import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import { ROOT_URL } from '../constants/ActionTypes'
import BreadCrumb from 'react-breadcrumb'

//import actions
import { getNews } from '../actions'

class NewsAll extends Component {
	componentWillMount() {
		this.props.getNews();
	}

	renderNews() {
		return _.map(this.props.news, (it) => {
			return (
				<div key={ it.id }>
					<div className="box">
						<div className="image fit camps-images">
							<img src={ `${ROOT_URL}uploads/${it.image_url}` } alt="" />
						</div>
						<div className="content">
							<header className="align-center">
								<h2>{ it.title }</h2>
							</header>
							<footer className="align-center">
								<Link to={`/news/${it.id}`} className="button alt">Citește în continuare</Link>
							</footer>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<section id="One" className="wrapper style3">
					<div className="inner">
						<header className="align-center">
							<h2>Breaking News</h2>
								<BreadCrumb
									className="align-center"
									path={
										[
											{
												path: '#/',
												label: 'Acasă'
											},
											{
												label: 'Breaking News'
											}
										]
									} separatorChar={ <i style={{marginLeft: '10px', marginRight: '10px'}} className="fa fa-chevron-right"></i> } />
						</header>
					</div>
				</section>

				<section id="one" className="wrapper style2">
					<div className="inner">
						<div className="grid-style">
							{ this.renderNews() }
						</div>
					</div>
				</section>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		news: state.getNews.news
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getNews }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsAll);