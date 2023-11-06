import { useContext } from 'react';
import { Auth } from '../AuthProvider';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../../components/base/LoadingSpinner';

const PrivateRoute = ({ children }) => {
    const { user, uaserLoading } = useContext(Auth);
    return (
        <>
            {uaserLoading && <LoadingSpinner />}

            {!user ? children : <Navigate to="/login" />}
        </>
    );
};

export default PrivateRoute;