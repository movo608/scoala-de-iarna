import React, { Component } from 'react'
import BreadCrumb from 'react-breadcrumb'

export default class Sdi2017 extends Component {
	render() {
		return (
			<div>
				<section id="One" className="wrapper style3">
					<div className="inner">
						<header className="align-center">
							<p>Al doilea Capitol</p>
							<h2>Scoala De Iarna 2017</h2>
							<BreadCrumb
								className="align-center"
								path={
									[
										{
											path: '#/',
											label: 'Acasă'
										},
										{
											path: '#/schools',
											label: 'Școlile AGA'
										},
										{
											label: 'Sdi 2017'
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
									<p>
										Cea de-a II-a ediție a Școlii de Iarnă a avut loc, precum ediția precedentă, în Loc. Rîu
										Sadului, Jud.Sibiu. Au participat în perioada 5-11 februarie 70 de tineri din 23 de județe.
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
									<img src="images/sdi2017/photo1.jpg" alt="" />
								</div>
							</div>
							<div>
								<div className="image fit">
									<img src="images/sdi2017/photo2.jpg" alt="" />
								</div>
							</div>
							<div>
								<div className="image fit">
									<img src="images/sdi2017/photo3.jpg" alt="" />
								</div>
							</div>
							<div>
								<div className="image fit">
									<img src="images/sdi2017/photo4.jpg" alt="" />
								</div>
							</div>
							<div>
								<div className="image fit">
									<img src="images/sdi2017/photo6.jpg" alt="" />
								</div>
							</div>
							<div>
								<div className="image fit">
									<img src="images/sdi2017/photo8.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}