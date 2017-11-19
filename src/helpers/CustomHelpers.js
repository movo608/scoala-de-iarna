import React from 'react'

export function Author() {
	return (
		<span>Built by <em><a href="https://www.facebook.com/moldovan.andrei.391">Moldo Andrei</a></em>.</span>
	);
}

export function Powered() {
	return (
		<span>Powered by <em><a href="https://reactjs.org/">React JS</a>.</em></span>
	);
}

export function Time() {
	const date = new Date();
	const time = date.getFullYear();
	return (
		<span>
			{ time }
		</span>
	);
}

export function createScript(src, id = 'n/a') {
	let script = document.createElement('script');
	script.src = src;
	script.async = false;
	script.id = id;

	document.body.appendChild(script);
}