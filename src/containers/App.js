import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reactLocalStorage as __storage } from 'reactjs-localstorage'
import { createScript } from '../helpers/CustomHelpers'
import { Link } from 'react-router-dom'

// import actions
import { userStoreLogin } from '../actions'

class App extends  Component {
	componentWillMount() {
    	if (__storage.getObject('user').users && this.props.users.isLoggedIn === false) {
			this.props.userStoreLogin(__storage.getObject('user').users.username);
		}
	}

	componentDidMount() {
		createScript('assets/js/loadCarousel.js');
	}
	
	renderBanner() {
		return (
			<section className="banner full app-banner">
				<article>
					<img src="images/carousel/slide01.jpg" alt="" />
					<div className="inner">
						<header>
							<h2>#SDV 2017</h2>
						</header>
					</div>
				</article>
				<article>
					<img src="images/carousel/slide02.jpg" alt="" />
					<div className="inner">
						<header>
							<h2>#SDI 2016</h2>
						</header>
					</div>
				</article>
				<article>
					<img src="images/carousel/slide03.jpg"  alt="" />
					<div className="inner">
						<header>
							<h2>#SDV 2016</h2>
						</header>
					</div>
				</article>
				<article>
					<img src="images/carousel/slide04.jpg"  alt="" />
					<div className="inner">
						<header>
							<h2>#SDV 2015</h2>
						</header>
					</div>
				</article>
				<article>
					<img src="images/carousel/slide05.jpg"  alt="" />
					<div className="inner">
						<header>
							<h2>#SDI 2017</h2>
						</header>
					</div>
				</article>
				<article>
					<img src="images/carousel/slide06.jpg"  alt="" />
					<div className="inner">
						<header>
							<h2>#SDV 2014</h2>
						</header>
					</div>
				</article>
			</section>
		);
	}

	renderNews() {
		return (
			<Link to="/form"><h2>S-au deschis înscrierile!</h2></Link>
		);
	}

	render() {
		return (
			<div>
				{ this.renderBanner() }
				<section id="one" className="wrapper style2">
					<div className="inner">
						<header className="align-center">
							<p className="special">Pe meleagurile sibiene...</p>
							<h2 style={{ fontStyle: 'italic' }}>Scriem împreună cel de-al III-lea capitol al Școlii de Iarnă!</h2>
						</header>

						<div className="box" style={{ backgroundColor: 'yellow' }}>
							<div className="content">
								<header className="align-center">
									<p className="special">Cele mai noi anunțuri</p>
									<h2>Breaking News</h2>
								</header>
								<div className="align-center">
									{ this.renderNews() }
								</div>
							</div>
						</div>

						<div className="box">
							<div className="content">
								<div className="row 200%">
									<div className="when 6u 12u$(medium)">
										<h3>Când?</h3>
										<p>3 - 9 februarie, 2018</p>
									</div>

									<div className="where 6u 12u$(medium)">
										<h3>Unde?</h3>
										<p>Localitatea Rîu Sadului, județul Sibiu</p>
									</div>

									<div className="how-many 6u 12u$(medium)">
										<h3>Câți participanți vor fi?</h3>
										<p>
											<strong>72</strong> de tineri cu vârste cuprinse între <strong>14 și 24 de ani</strong>
										</p>
										<p> 
											Fiecare participant va fi repartizat într-un grup și un atelier, în funcție de 
											completarea formularului din website.
										</p>
									</div>

									<div className="cost 6u 12u$(medium)">
										<h3>Care sunt costurile?</h3>
										<p>
											<strong>600 de lei.</strong>
										</p>
										<p>
											Înscrie-te până la sfârșitul lunii decembrie și beneficiezi de o taxă de participare de <strong>550</strong> de lei! (este
											inclusă cazarea, masa și transportul dus-întors de la Sibiu până la <strong>cabană</strong>)
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="box">
							<div className="content">
								<div className="what 12u 12u$(large) align-center">
									<h3>Ce vor face?</h3>
									<p>
										Vor putea participa la training-uri de <strong>dezvoltare personală</strong> și la ateliere care abordează latura artistică:
										&nbsp;<strong>teatru, muzică, film și dans</strong>.
									</p>
									<p>
										Acestea vor fi susținute de <strong>profesioniști</strong> într-un mod <strong>nonformal</strong>, aproape de
										tineri.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="two" className="wrapper style3">
					<div className="inner">
						<header className="align-center">
							<p>Un salt către trecut</p>
							<h2>Privind introspectiv in istoria Școlilor...</h2>
						</header>
					</div>
				</section>

				<section id="three" className="wrapper style2">
					<div className="inner">
						<header className="align-center">
							<p className="special">Datorită greșelilor trecutului...</p>
							<h2>Promitem că viitorul este cu noi</h2>
						</header>
						<div className="home-gallery gallery">
							<div>
								<div className="image fit">
									<img src="images/home/home1.jpg" alt="" />
								</div>
							</div>
							<div>
								<div className="image fit">
									<img src="images/home/home2.jpg" alt="" />
								</div>
							</div>
							<div>
								<div className="image fit">
									<img src="images/home/home3.jpg" alt="" />
								</div>
							</div>
							<div>
								<div className="image fit">
									<img src="images/home/home4.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ userStoreLogin }, dispatch);
}

function mapStateToProps(state) {
	return {
		users: state.users,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);