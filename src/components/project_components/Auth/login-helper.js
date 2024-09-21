import { useNavigate } from 'react-router-dom';

function LoginHelper(props) {
    const navigate = useNavigate(); // Hook called inside the functional component
        return <WrappedComponent {...props} navigate={navigate} />; // Pass `navigate` to the wrapped component
    };

export default LoginHelper;