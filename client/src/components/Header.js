import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Payments from './Payments';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>
            default:
                return [
                    <li key='1'> <Payments /></li>,
                    <li key='3' style={{ margin: '0 10px' }}>
                        Credits: {this.props.auth.credits}</li>,
                    <li key='2'><a href="/api/logout">Log Out</a></li>
                ]
        }
    }
    render() {
        console.log(this.props);
        return (
            <div id="navigation" class="fixed-top navbar-light bg-faded site-navigation">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 col-md-3 col-sm-4">
                            <div class="site-logo">
                                <Link to={this.props.auth ? '/surveys' : '/'}>Emaily </Link>
                                {/* <a href="index.html">Emaily</a> */}
                            </div>
                        </div>
                        <div class="col-lg-10 col-md-9 col-sm-8">
                            <div class="header_right ">
                                <nav id="main-menu" class="ml-auto">
                                    <ul>
                                        {/* {this.renderContent()} */}
                                        <li><a class="nav-link" href="#home">Home</a></li>
                                        <li><a class="nav-link" href="#service">Services</a></li>
                                        <li><a class="nav-link" href="#portfolio">Works</a></li>
                                        <li><a class="nav-link" href="#blog">Blog</a></li>
                                        <li><a class="nav-link" href="#contact">Contact</a></li>
                                    </ul>
                                </nav>
                                <div id="mobile_menu"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);