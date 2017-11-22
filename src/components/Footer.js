import React, { Component } from 'react'
import { Powered, Time, Author } from '../helpers/CustomHelpers'

export default class Footer extends Component {
  	render() {
	    return (
			<footer id="footer">
				<div className="container">
					<ul className="icons">
						<li><a href="www.facebook.com" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
						<li><a href="www.instagram.com" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
						<li><a href="www.twitter.com" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
						<li><a href="www.gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
					</ul>
				</div>
				<div className="copyright">
					<p>&copy; <a href="">Asociația Generația de Azi</a> { Time() }. All rights reserved.</p>
					<p>{ Author() } { Powered() }</p>
				</div>
			</footer>
	    );
	}
}
