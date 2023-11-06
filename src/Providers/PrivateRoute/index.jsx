import { useContext } from 'react';
import { Auth } from '../AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(Auth);
    return (
        user? children : <Navigate to="/login" />
    );
};

export default PrivateRoute;