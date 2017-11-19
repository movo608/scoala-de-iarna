import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Camps extends Component {
	renderSchool(image, title, paraTitle, desc, link) {
		return (
			<div>
				<div className="box">
					<div className="image fit camps-images">
						<img src={ `images/camps/${image}.jpg` } alt="" />
					</div>
					<div className="content">
						<header className="align-center">
							<p>{ paraTitle }</p>
							<h2>{ title }</h2>
						</header>
						<p> { desc } </p>
						<footer className="align-center">
							{ <Link to={ `schools/${link}` } className="button alt">Learn More</Link> }
						</footer>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div>
				<section id="One" className="wrapper style3">
					<div className="inner">
						<header className="align-center">
							<p>Eleifend vitae urna</p>
							<h2>Școlile Noastre</h2>
						</header>
					</div>
				</section>

				<section id="one" className="wrapper style2">
					<div className="inner">
						<div className="grid-style">
							
							{ 
								this.renderSchool(
								'sdv2014', 
								'SDV 2014', 
								'Școala de vară', 
								'Prima ediție a Școlii de Vară „Tinerii de Azi – Adulții de Mâine”, a avut loc în perioada 27 iulie – 4 august 2014, în Constanța.',
								'sdv/2014'
								) 
							}

							{ 
								this.renderSchool(
								'sdv2015', 
								'SDV 2015', 
								'Școala de vară', 
								'A II-a ediție a Școlii de Vară a avut loc în localitatea Corbu, jud. Constanța, în perioada 3-10 august 2015. La această ediție au participat 50 de tineri din 130 de aplicanți.',
								'sdv/2015'
								) 
							}

							{ 
								this.renderSchool(
								'sdv2016', 
								'SDV 2016', 
								'Școala de vară', 
								'Cel de-al III-lea capitol al Școlii de Vară a fost scris în Eforie Nord, jud. Constanța, în perioada 23-29 august 2016. Au participat 100 de tineri din 350 de aplicanți, din 25 de județe.',
								'sdv/2016'
								) 
							}

							{ 
								this.renderSchool(
								'sdv2017', 
								'SDV 2017', 
								'Școala de vară', 
								'Școala de Vară Ediția a IV-a a avut loc în Eforie Nord, Jud. Constanța. Au participat 65 de tineri, din 23 de județe, cu vârsta cuprinsă între 14 și 25 ani.',
								'sdv/2017'
								) 
							}

							{ 
								this.renderSchool(
								'sdi2016', 
								'SDI 2016', 
								'Școala de vară', 
								'Școala de Iarnă s-a născut din dorința tinerilor participanți ai Școlii de Vară 2015. Aceasta are loc într-un loc magnific din România, în Loc.Rîu Sadului, Jud.Sibiu.',
								'sdi/2016'
								) 
							}

							{ 
								this.renderSchool(
								'sdi2017', 
								'SDI 2017', 
								'Școala de vară', 
								'Cea de-a II-a ediție a Școlii de Iarnă a avut loc, precum ediția precedentă, în Loc. Rîu Sadului, Jud.Sibiu. Au participat în perioada 5-11 februarie 70 de tineri din 23 de județe.',
								'sdi/2017'
								)
							}

						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Camps;