import React, {Component} from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { createScript } from '../helpers/CustomHelpers'

export default class LandingLayout extends Component {
    componentDidMount() {
		createScript('/assets/js/jquery.scrollex.min.js');
		createScript('/assets/js/skel.min.js', 'skel');
		createScript('/assets/js/util.js');
		createScript('/assets/js/main.js', 'main');
    }

    render() {
        return (
            <div className="app">
                <Header />

                <div className="content">
                    {this.props.children}
                </div>

                <Footer />
            </div>
        );
    }
}