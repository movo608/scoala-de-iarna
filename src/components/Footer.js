import React, { Component } from 'react'
import { Powered, Time, Author } from '../helpers/CustomHelpers'
import {
	renderEmail,
	renderFacebook,
	renderInstagram,
	renderTwitter
} from '../helpers/Icons'

export default class Footer extends Component {
  	render() {
	    return (
			<footer id="footer">
				<div className="container">
					<ul className="icons">
						{ renderFacebook('www.facebook.com') }
						{ renderInstagram('www.instagram.com') }
						{ renderTwitter('www.twitter.com') }
						{ renderEmail('www.email.com') }
					</ul>
				</div>
				<div className="copyright">
					<p>&copy; Asociația Generația de Azi { Time() }. All rights reserved.</p>
					<p>{ Author() } { Powered() }</p>
				</div>
			</footer>
	    );
	}
}
