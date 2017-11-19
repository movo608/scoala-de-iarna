import React, { Component } from 'react'

export default class About extends Component {
	render() {
		return (
			<div>
				<section id="One" className="wrapper style3">
					<div className="inner">
						<header className="align-center">
							<p>Eleifend vitae urna</p>
							<h2>Despre Noi - Asociatia Generatia de Azi</h2>
						</header>
					</div>
				</section>

				<section id="two" className="wrapper style2">
					<div className="inner">
						<header className="align-center">
							<p className="special">Haideți să ne cunoaștem</p>
							<h2>Cine suntem?</h2>
						</header>
						<div className="content" style={{color: 'black', fontWeight: '500'}}>
							<div className="box">
								<div className="hypothesis">
									<div className="content">
										<h3>Premisa</h3>
										<p>
											Tineri sau deja cu experienţă în viaţă, cu toţii putem afirma că <strong>Sistemul de Învăţământ </strong>
											românesc reprezintă, până în momentul actual, o piedică în dezvoltarea multilaterală. De ce?
											Promovând învăţatul mecanic, munca până la epuizare şi competiţia neproductivă pentru
											obţinerea notelor, copiilor nu numai că li se estompează plăcerea de a studia, ci ajung să îşi
											reducă abilităţile vaste la una singură: capacitatea de a memora şi de a urma reguli impuse. O
											şcoală nu ar trebui să îi înveţe pe tineri să spună tot ce gândesc, ci să gândească tot ce spun, ceea
											ce e unul din obiectivele Şcolii de Iarnă &quot;Tinerii de Azi – Adulții de Mâine&quot;.
										</p>

										<div className="home-gallery gallery">
											<div>
												<div className="image fit">
													<img src="images/about/about1.jpg" alt="" />
												</div>
											</div>
											<div>
												<div className="image fit">
													<img src="images/about/about2.jpg" alt="" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="box">
								<div className="schools">
									<div className="content">
										<h3>Școlile AGA</h3>
										<p>
											Școlile AGA reprezintă cheia spre dezvoltarea personală și redescoperirea sinelui, prin
											aducerea în prim-plan a training-urilor de dezvoltare personală și a atelierelor de dezvoltare
											artistică.
										</p>
										<p>
											Şcolile de Vară sau de Iarnă, reprezintă nu numai o experiență cultural-educațională, ci şi
											una socială, de încurajare a cunoașterii prin practică, de promovare a voluntariatului și ale
											efectelor benefice ale acestuia, recunoscute conform declarației Organizației Națiunilor Unite.
										</p>
									</div>
								</div>
							</div>

							<div className="box">
								<div className="more">
									<div className="content">
										<h3>Cursurile non-formale</h3>
										<p>
											Şcolile AGA, vin în completarea lipsurilor şcolii tradiţionale, îndrumându-i pe tineri să
											îşi pună întrebări, să exprime opinii proprii şi să gândească pentru ei, conferindu-le o voce ce
											poate fi auzită în comunitate. 
										</p>
										<p>
											Pentru că Sistemul de Învăţământ reduce prin normele sale
											potenţialul creativ al tinerilor, instruindu-i că tot ce trebuie să facă este să înveţe o multitudine de
											informaţii, să dea teste şi apoi să le uite, Asociaţia Generaţiei de Azi doreşte să aducă un sprijin
											acestora, construind un mediu non-formal, propice dezvoltării multilateral pe plan personal, din
											care tinerii rămân nu numai cu amintiri frumoase, ci şi cu idei, viziuni şi informaţii ce le vor fi de
											folos pe termen lung.
										</p>
										<p>
											Adevărata învăţătură este ceea ce rămâne cu tine după ce ai uitat tot.
										</p>

										<div className="home-gallery gallery">
											<div>
												<div className="image fit">
													<img src="images/about/about3.jpg" alt="" />
												</div>
											</div>
											<div>
												<div className="image fit">
													<img src="images/about/about4.jpg" alt="" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}