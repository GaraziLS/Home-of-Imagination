import React, { Component } from 'react';s

import LoginComponent from '../project_components/Auth/login_component';
import LoginHelper from "../project_components/Auth/login-helper";

class Login extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulLoginAuth = this.handleSuccessfulLoginAuth.bind(this);
        this.handleUnsuccessfulLoginAuth = this.handleUnsuccessfulLoginAuth.bind(this);
    }

    handleSuccessfulLoginAuth() {
        this.props.handleSuccessfulLogin();
        // redirect user to any route we want
        this.props.navigate('/create');
    }

    handleUnsuccessfulLoginAuth() {
        this.props.handleUnsuccessfulLogin();
    }

    render() {
        return (
            <div>
                <LoginComponent
                    handleSuccessfulLoginAuth={this.handleSuccessfulLoginAuth}
                    handleUnsuccessfulLoginAuth={this.handleUnsuccessfulLoginAuth} />
            </div>
        );
    };
}

export default LoginHelper(Login);
