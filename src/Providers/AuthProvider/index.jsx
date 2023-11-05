import { createContext } from 'react';

export const Auth = createContext(null);
const AuthProvider = ({children}) => {
    const data = {
        imran: "imran",
        hasan: "hasan",
        tarek: "Tareq"
    }
    return (
        <Auth.Provider value={data}>
            {children}
        </Auth.Provider>
    );
};

export default AuthProvider;