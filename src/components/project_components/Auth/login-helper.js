import { useNavigate } from 'react-router-dom';

function LoginHelper(WrappedComponent) {
    return function(props) {
        const navigate = useNavigate();
        return <WrappedComponent {...props} navigate={navigate} />;
    };
}

export default LoginHelper;