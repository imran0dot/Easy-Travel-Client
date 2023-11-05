import { useContext } from 'react';
import { Auth } from '../AuthProvider';

const PrivateRoute = ({ children }) => {
    const imran  = useContext(Auth);
    console.log(imran)
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;