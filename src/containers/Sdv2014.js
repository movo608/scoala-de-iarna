import React, { Component } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'

export default class Sdv2014 extends Component {
	render() {
		return (
			<div>
				<section id="One" className="wrapper style3">
					<div className="inner">
						<header className="align-center">
							<p>Primul Capitol</p>
							<h2>Scoala De Vara 2014</h2>
						</header>
					</div>
				</section>

				<section id="two" className="wrapper style2">
					<div className="inner">

						<Breadcrumbs className="align-center" current='Sdv 2014'/>

						<div className="content" style={{color: 'gray', fontWeight: '500'}}>
							<div className="box">
								<div className="content">
									<p>
										Prima ediție a Școlii de Vară „Tinerii de Azi – Adulții de Mâine”, a avut loc în perioada
										27 iulie – 4 august 2014, în Constanța.
									</p>
									<p>
										Au fost 50 de participanți cu vârsta între 15 și 23 de ani, din 22 de județe din țară, din
										peste 100 de înscriși. Aceștia, timp de 7 zile, au participat la o serie de training-uri
										(Autocunoaștere și dezvoltare personală, Leadership, Curs de comunicare - nonverbală,
										paraverbală, nonviolentă, comunicare prin metoda estere) și workshop-uri (Violența în Școli,
										Traficul de persoane, Drogul – vis și dependență, Tehnici esențiale de prim-ajutor, Voluntariatul
										între susținere și contestare)
									</p>
									<p>
										De la Școala de Vară nu au putut lipsi nici întâlnirile cu invitați speciali - oameni de
										succes și modele de viață, de la artiști până la oameni de cultură - menite să motiveze tinerii.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="two" className="wrapper style3">
					<div className="inner">
						<header className="align-center">
							<p>Privind înapoi...</p>
							<h2>Galerie Foto</h2>
						</header>
					</div>
				</section>

				<section id="three" className="wrapper style2">
					<div className="inner">
						<div className="home-gallery gallery">
							<div>
								<div className="image fit">
									<img src="images/sdi2016/photo2.jpg" alt="" />
								</div>
							</div>
							<div>
								<div className="image fit">
									<img src="images/sdi2016/photo3.jpg" alt="" />
								</div>
							</div>
							<div>
								<div className="image fit">
									<img src="images/sdi2016/photo4.jpg" alt="" />
								</div>
							</div>
							<div>
								<div className="image fit">
									<img src="images/sdi2016/photo5.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}