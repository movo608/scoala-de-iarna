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
								<p>maecenas sapien feugiat ex purus</p>
								<h2>Lorem ipsum dolor</h2>
							</header>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at dignissim augue, in iaculis neque. Etiam bibendum felis ac vulputate pellentesque. Cras non blandit quam. Nunc porta, est non posuere sagittis, neque nunc pellentesque diam, a iaculis lacus urna vitae purus. In non dui vel est tempor faucibus. Aliquam erat volutpat. Quisque vel est vitae nibh laoreet auctor. In nec libero dui. Nulla ullamcorper, dolor nec accumsan viverra, libero eros rutrum metus, vel lacinia magna odio non nunc. Praesent semper felis eu rhoncus aliquam. Donec at quam ac libero vestibulum pretium. Nunc faucibus vel arcu in malesuada. Aenean at velit odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas commodo erat eget molestie sollicitudin. Donec imperdiet, ex sed blandit dictum, ipsum metus ultrices arcu, vitae euismod nisl sapien vitae tortor.</p>

							<p>Vivamus nec odio ac ligula congue feugiat at vitae leo. Aenean sem justo, finibus sed dui eu, accumsan facilisis dolor. Fusce quis dui eget odio iaculis aliquam vel sed velit. Nulla pellentesque posuere semper. Nulla eu sagittis lorem, a auctor nulla. Sed ac condimentum orci, ac varius ante. Nunc blandit quam sit amet sollicitudin sodales.</p>

							<p>Vivamus ultricies mollis mauris quis molestie. Quisque eu mi velit. In et cursus nibh. Donec facilisis, orci sed mollis hendrerit, nunc risus mattis odio, eget efficitur nisl orci a lectus. Aenean finibus neque convallis orci sollicitudin tincidunt. Vivamus lacinia facilisis diam, quis facilisis nisi luctus nec. Aliquam ac molestie enim, ut ultrices elit. Fusce laoreet vulputate risus in tincidunt. Sed commodo mollis maximus. Nullam varius laoreet nibh sit amet facilisis. Donec ac odio vehicula, consequat elit et, sodales justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam ac auctor mauris, in hendrerit libero. </p>
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