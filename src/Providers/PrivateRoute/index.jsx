import { useContext } from 'react';
import { Auth } from '../AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../../components/base/LoadingSpinner';

const PrivateRoute = ({ children }) => {
    const { user, userLoading } = useContext(Auth);
    const location = useLocation();

    if (userLoading) {
        return <LoadingSpinner />
    }
    if (user) {
        return children
    }
    
    return <Navigate to='/login' state={{ from: location }} />

};

export default PrivateRoute;