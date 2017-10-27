import React from 'react'
import { Link } from 'react-router-dom'

export function renderFacebook(link) {
	return(
		<li><Link to={ `https://${link}` } className="icon fa-facebook"><span className="label">Facebook</span></Link></li>
	);
}

export function renderTwitter(link) {
	return(
		<li><Link to={ `https://${link}` } className="icon fa-twitter"><span className="label">Twitter</span></Link></li>
	);
}

export function renderInstagram(link) {
	return(
		<li><Link to={ `https://${link}` } className="icon fa-instagram"><span className="label">Instagram</span></Link></li>
	);
}

export function renderEmail(link) {
	return(
		<li><Link to={ `https://${link}` } className="icon fa-envelope-o"><span className="label">Email</span></Link></li>
	);
}