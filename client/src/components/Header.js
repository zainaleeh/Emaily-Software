import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';  // Make sure you are importing Link from 'react-router-dom' directly
import Payments from './Payments';
class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a className="nav-link" href="/auth/google">Login with Google</a></li>
            default:
                return [
                    <li key='1'> <Payments /></li>,
                    <li key='3' style={{ margin: '0 10px' }}>
                        Credits: {this.props.auth.credits}</li>,
                    <li key='2'><a className="nav-link" href="/api/logout">Log Out</a></li>,
                    <li key='4'><Link to="/ai-generator">AI Generator</Link></li> 
                ]
        }
    }
    render() {
        console.log(this.props);
        return (
            <div id="navigation" className={`fixed-top navbar-light bg-faded site-navigation`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-4">
                            <div className="site-logo">
                                {/* <Link to={this.props.auth ? '/surveys' : '/'}>Emaily </Link> */}
                                <Link to={this.props.auth ? '/surveys' : '/'}><img src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt=""></img></Link>
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-9 col-sm-8">
                            <div className="header_right ">
                                <dev id="main-menu" className="ml-auto">
                                    <ul>
                                        {this.renderContent()}
                                    </ul>
                                </dev>
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
