import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createHashHistory } from 'history';

const customHistory = createHashHistory();

class Browse extends Component {

	componentWillMount() {
		if(!this.props.users.isLoggedIn) {
			customHistory.push('/login');
		}
	}

    render() {
        return (
			<section id="two" className="wrapper style2">
				<div className="inner">
					<div className="box">
						<div className="content">
							<header className="align-center">
								<p>Eu sunt Moldo</p>
								<h2>No, salutări și bine v-am găsit</h2>
							</header>
							<p>
								Asta e ceva ce se poate numi "panou de comanda" si o sa il poti vedea 
								dupa fiecare logare prin calea <code>/login</code> (accesata prin <code>/admin</code>).
							</p>
							<p>
								In asa fel e facut sistemul de login ca de pe un cont sa poata fi logata o singura persoana o data, de pe o masina.
								Din alte motive de securitate si alte alea, te rog nu mai da parola nimanui, pentru ca si-asa 
								se pierde destul de mult timp cu criptarea ei.
							</p>
							<p>
								<h3>Tin sa te rog sa incerci sa iti dai <em>logout</em> de fiecare data cand ai terminat treaba pe aplicatie.</h3>
							</p>
							<p>
								<h2>Atentie!</h2>
								Vei fi logat automat la accesarea paginii de "home". In cazul in care nu te poti loga de pe
								aceeasi masinarie si iti va aparea un <em>pop-up</em> cu <code>error_user_already_logged</code>
								te rog sa dai un <strong>refresh</strong> paginii.
							</p>
							<p>
								<h3>Mie imi place engleza, site-ul fiind facut majoritar pe engleza. Partea din fata a fost
								total tradusa pe romana, dar panoul de admin o sa il tin in engleza.</h3>
							</p>
						</div>
					</div>
				</div>
			</section>
        );
    }
}

function select(state) {
	return {
		users: state.users
	}
}

export default connect(select)(Browse);