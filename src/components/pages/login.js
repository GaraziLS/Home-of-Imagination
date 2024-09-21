import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginComponent from '../project_components/Auth/login_component';

const Login = (props) => {
    const navigate = useNavigate(); // Get the navigate function

    const handleSuccessfulLoginAuth = () => {
        props.handleSuccessfulLogin();
        navigate('/create'); // Use navigate here
    };

    const handleUnsuccessfulLoginAuth = () => {
        props.handleUnsuccessfulLogin();
    };

    return (
        <div>
            <LoginComponent
                handleSuccessfulLoginAuth={handleSuccessfulLoginAuth}
                handleUnsuccessfulLoginAuth={handleUnsuccessfulLoginAuth}
            />
        </div>
    );
};

export default Login;
