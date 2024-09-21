import React, { Component } from 'react';
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errorText: ''
        };

        // Bindings

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    // Handlers

    handleLoginChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        this.setState({
            errorText: ""
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('https://localhost:5000/login', {
            user_name: this.state.username,
            user_password: this.state.password
        }, { withCredentials: true })
            .then(response => {
                if (response.status === 200) {
                    this.props.handleSuccessfulLoginAuth();
                }
            })
            .catch(error => {
                if (error.response) {
            // The server responded with a status code outside the 2xx range
            console.log('Error response data:', error.response.data);
            console.log('Error response status:', error.response.status);
            console.log('Error response headers:', error.response.headers);

            if (error.response.status === 401) {
                this.setState({ errorText: 'Wrong username or password' });
            } else {
                this.setState({ errorText: 'An error occurred. Please try again later.' });
            }
        } else if (error.request) {
            // The request was made but no response was received
            console.log('Error request:', error.request);
            this.setState({ errorText: 'No response from the server. Please check your connection and try again.' });
        } else {
            // An error occurred while setting up the request
            console.log('Error message:', error.message);
            this.setState({ errorText: 'An error occurred while setting up the request. Please try again.' });
        }
                this.props.handleUnsuccessfulLoginAuth();
            });
    }

    render() {
        return (
            <div className="login-wrapper">
                <h2 className="header">Log in</h2>
                <div><h3>{this.state.errorText}</h3></div>

                <form onSubmit={this.handleSubmit} className="auth-form">
                    
                    <FontAwesomeIcon icon="user" className="auth-icon" />
                    <input
                        className="form-field"
                        type="text"
                        name="username"
                        placeholder="Type your username"
                        label="Type your username"
                        value={this.state.username}
                        onChange={this.handleLoginChange}>
                    </input>

                    <FontAwesomeIcon icon="key" className="auth-icon"/>
                    <input
                        className="form-field"
                        type="password"
                        name="password"
                        placeholder="Type your password"
                        label="Type your password"
                        value={this.state.password}
                        onChange={this.handleLoginChange}>
                    </input>
                <button type='submit' className="auth-button">Log in</button>
            </form>

            </div>
        );
    }
}