import React, { Component } from 'react';
import LoginComponent from '../project_components/Auth/login_component';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulLoginAuth = this.handleSuccessfulLoginAuth.bind(this);
        this.handleUnsuccessfulLoginAuth = this.handleUnsuccessfulLoginAuth.bind(this);
    }

    handleSuccessfulLoginAuth() {
    console.log("handleSuccessfulLoginAuth Called");
        this.props.handleSuccessfulLogin();

        // redirect user to home page
        this.props.history.push('/create');
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