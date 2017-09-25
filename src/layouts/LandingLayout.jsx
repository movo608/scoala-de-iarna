import React, {Component} from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

// Landing Layout component
export default class LandingLayout extends Component {

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