import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reactLocalStorage as __storage } from 'reactjs-localstorage'
import $ from 'jquery'

// import actions
import { userStoreLogin } from '../actions'

class App extends  Component {
	constructor(props) {
		super(props);

		this.getInitialState();
	}

	getInitialState() {
		this.state = {
			scriptIsLoaded: false,
			scriptIsRemoved: false
		};
	}

	componentWillMount() {
    	if (__storage.getObject('user').users && this.props.users.isLoggedIn === false) {
			this.props.userStoreLogin(__storage.getObject('user').users.username);
		}

		this.removeScripts();
		this.loadScripts();
		this.removeScripts();
	}

	loadScripts() {
		const menu = document.createElement('script');
		menu.type = 'text/javascript';
		menu.src = '/assets/js/main.js';
		menu.id = 'menu';

		const scrollex = document.createElement('script');
		scrollex.type = 'text/javascript';
		scrollex.src = '/assets/js/jquery.scrollex.min.js';
		scrollex.id = 'scrollex';
		scrollex.async = true;

		const util = document.createElement('script');
		util.type = 'text/javascript';
		util.src = '/assets/js/util.js';
		util.id = 'util';
		util.async = true;

		const skel = document.createElement('script');
		skel.type = 'text/javascript';
		skel.src = '/assets/js/skel.min.js';
		skel.id = 'skel';
		skel.async = true;

		/**
		 *@BUG: SCRIPTS ARE PREPENDED BEFORE THE React.CreateElement({ <nav></nav> })
		 */

		document.body.appendChild(skel);
		document.body.appendChild(scrollex);
		document.body.appendChild(util);
		document.body.appendChild(menu);

		this.setState({
			scriptIsLoaded: true
		});
	}

	removeScripts() {
		$('#skel').remove();
		//$('#menu').remove();
		$('#scrollex').remove();
		$('#util').remove();

		this.setState({
			scriptIsRemoved: true
		});
	}

	renderBanner() {
		return (
			<section className="banner full">
				<article>
					<img src="images/slide01.jpg" alt="" />
					<div className="inner">
						<header>
							<p>Niggaaaaaa</p>
							<h2>Hielo</h2>
						</header>
					</div>
				</article>
				<article>
					<img src="images/slide02.jpg" alt="" />
					<div className="inner">
						<header>
							<p>Lorem ipsum dolor sit amet nullam feugiat</p>
							<h2>Magna etiam</h2>
						</header>
					</div>
				</article>
				<article>
					<img src="images/slide03.jpg"  alt="" />
					<div className="inner">
						<header>
							<p>Sed cursus aliuam veroeros lorem ipsum nullam</p>
							<h2>Tempus dolor</h2>
						</header>
					</div>
				</article>
				<article>
					<img src="images/slide04.jpg"  alt="" />
					<div className="inner">
						<header>
							<p>Adipiscing lorem ipsum feugiat sed phasellus consequat</p>
							<h2>Etiam feugiat</h2>
						</header>
					</div>
				</article>
				<article>
					<img src="images/slide05.jpg"  alt="" />
					<div className="inner">
						<header>
							<p>Ipsum dolor sed magna veroeros lorem ipsum</p>
							<h2>Lorem adipiscing</h2>
						</header>
					</div>
				</article>
			</section>
		);
	}

	render() {
		return (
			<div>
				{ this.renderBanner() }
				<section id="one" className="wrapper style2">
					<div className="inner">
						<div className="grid-style">
							<div>
								<div className="box">
									<div className="image fit">
										<img src="images/pic02.jpg" alt="" />
									</div>
									<div className="content">
										<header className="align-center">
											<p>maecenas sapien feugiat ex purus</p>
											<h2>Lorem ipsum dolor</h2>
										</header>
										<p> Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada.</p>
										<footer className="align-center">
											<a href="#" className="button alt">Learn More</a>
										</footer>
									</div>
								</div>
							</div>

							<div>
								<div className="box">
									<div className="image fit">
										<img src="images/pic03.jpg" alt="" />
									</div>
									<div className="content">
										<header className="align-center">
											<p>mattis elementum sapien pretium tellus</p>
											<h2>Vestibulum sit amet</h2>
										</header>
										<p> Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada.</p>
										<footer className="align-center">
											<a href="#" className="button alt">Learn More</a>
										</footer>
									</div>
								</div>
							</div>

						</div>
					</div>
				</section>

				<section id="two" className="wrapper style3">
					<div className="inner">
						<header className="align-center">
							<p>Nam vel ante sit amet libero scelerisque facilisis eleifend vitae urna</p>
							<h2>Morbi maximus justo</h2>
						</header>
					</div>
				</section>

				<section id="three" className="wrapper style2">
					<div className="inner">
						<header className="align-center">
							<p className="special">Nam vel ante sit amet libero scelerisque facilisis eleifend vitae urna</p>
							<h2>Morbi maximus justo</h2>
						</header>
						<div className="gallery">
							<div>
								<div className="image fit">
									<a href="#"><img src="images/pic01.jpg" alt="" /></a>
								</div>
							</div>
							<div>
								<div className="image fit">
									<a href="#"><img src="images/pic02.jpg" alt="" /></a>
								</div>
							</div>
							<div>
								<div className="image fit">
									<a href="#"><img src="images/pic03.jpg" alt="" /></a>
								</div>
							</div>
							<div>
								<div className="image fit">
									<a href="#"><img src="images/pic04.jpg" alt="" /></a>
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
		users: state.users
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);