import React, { Component } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'

export default class Sdi2016 extends Component {
	render() {
		return (
			<div>
				<section id="One" className="wrapper style3">
					<div className="inner">
						<header className="align-center">
							<p>Primul Capitol</p>
							<h2>Scoala De Iarnă 2016</h2>
						</header>
					</div>
				</section>

				<section id="two" className="wrapper style2">
					<div className="inner">

						<Breadcrumbs className="align-center" current='Sdi 2016'/>

						<div className="content" style={{color: 'gray', fontWeight: '500'}}>
							<div className="box">
								<div className="content">
									<p>
										Cea de-a II-a ediție a Școlii de Iarnă a avut loc, precum ediția precedentă, în Loc. Rîu
										Sadului, Jud.Sibiu. Au participat în perioada 5-11 februarie 70 de tineri din 23 de județe.	
									</p>
									<p>
										Participanții au fost întâmpinați cu  4 Training-uri; Distorsiuni și bariere în comunicarea
										interpersonală; Public Speaking; Debate (Dezbatere); Managementul conflictelor și negociere și 
										4 Ateliere: Muzică; Teatru; Dans; Pantomimă.
									</p>
									<p>
										Pe lângă partea nonformală de dezvoltare personală, am condimentat Școala de Iarnă cu
										multe teambuilding-uri, seri tematice pentru o bună intercunoaștere și un foc de tabără cum
										numai la Școala de Iarnă se poate întâlni.
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
									<img src="images/sdi2016/photo5.jpg" alt="" />
								</div>
							</div>
							<div>
								<div className="image fit">
									<img src="images/sdi2016/photo7.jpg" alt="" />
								</div>
							</div>
							<div>
								<div className="image fit">
									<img src="images/sdi2016/photo4.jpg" alt="" />
								</div>
							</div>
							<div>
								<div className="image fit">
									<img src="images/sdi2016/photo0.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}