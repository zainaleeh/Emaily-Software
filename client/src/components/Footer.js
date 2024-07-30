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
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6 col-xs-12">
                            <div className="footer_copyright">
                                <p>&copy; 2024. All Rights Reserved.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-12">
                            <div className="footer_menu">
                                <ul>
                                    <li><a href="#">TW</a></li>
                                    <li><a href="#">FB</a></li>
                                    <li><a href="#">INS</a></li>
                                </ul>
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