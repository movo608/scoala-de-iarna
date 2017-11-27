import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ROOT_URL } from '../constants/ActionTypes'
import BreadCrumb from 'react-breadcrumb'

//import actions
import { getOneNews } from '../actions'

class News extends Component {
	constructor(props) {
		super(props);

		const { id } = this.props.match.params;
		this.props.getOneNews(id);
	}

	render() {
		return (
			<div>
				<section id="One" className="wrapper style3">
					<div className="inner">
						<header className="align-center">
							<p>Breaking News</p>
							<h2>{ this.props.news.title }</h2>
							<BreadCrumb
								className="align-center"
								path={
									[
										{
											path: '#/',
											label: 'Acasă'
										},
										{
											path: '#/news',
											label: 'Breaking News'
										},
										{
											label: this.props.news.title
										}
									]
								} separatorChar={ <i style={{marginLeft: '10px', marginRight: '10px'}} className="fa fa-chevron-right"></i> } />
						</header>
					</div>
				</section>

				<section id="two" className="wrapper style2">
					<div className="inner">
						<div className="content" style={{color: 'gray', fontWeight: '500'}}>
							<div className="box">
								<div className="content">
									<div style={{fontSize: '1.4em'}} className="body" dangerouslySetInnerHTML={{ __html: this.props.news.body }}>
									</div>
								</div>
							</div>
						</div>
						<div className="home-gallery gallery Aligner">
							<div>
								<div className="image fit">
									<img src={`${ROOT_URL}/uploads/${this.props.news.image}`} alt="" />
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getOneNews }, dispatch);
}

function mapStateToProps(state) {
	return {
		news: state.getPieceOfNews
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(News);