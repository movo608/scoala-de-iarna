import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Camps extends Component {
	render() {
		return (
			<section id="one" className="wrapper style2">
				<div className="inner">
					<div className="grid-style">
						<div>
							<div className="box">
								<div className="image fit">
									<img src="images/pic02.jpg" alt="" />
								</div>
								<div className="content">
									<header className="align-center">
										<p>Scoala de Vara</p>
										<h2>SDI</h2>
									</header>
									<p> Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada.</p>
									<footer className="align-center">
										{ <Link to="/sdi" className="button alt">Learn More</Link> }
									</footer>
								</div>
							</div>
						</div>

						<div>
							<div className="box">
								<div className="image fit">
									<img src="images/pic03.jpg" alt="" />
								</div>
								<div className="content">
									<header className="align-center">
										<p>scoala de iarna</p>
										<h2>SDV</h2>
									</header>
									<p> Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada.</p>
									<footer className="align-center">
										{ <Link to="/sdv" className="button alt">Learn More</Link> }
									</footer>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>
		);
	}
}

export default Camps;