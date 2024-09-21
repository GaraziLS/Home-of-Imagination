import { useNavigate } from 'react-router-dom';

function LoginHelper(WrappedComponent) {
    function NavigateHook(props) {
        const navigate = useNavigate(); // Get the navigate function
        return <WrappedComponent {...props} navigate={navigate} />; // Pass navigate prop
    }

    return NavigateHook; // Return the component
}

export default LoginHelper;
