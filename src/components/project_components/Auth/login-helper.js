import { useNavigate } from 'react-router-dom';

function LoginHelper(Component) {
    return function(props) {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    };
}

export default LoginHelper;