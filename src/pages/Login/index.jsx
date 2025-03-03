import { BsArrowRight } from 'react-icons/bs';
import SimpleHeading from '../../components/base/SimpleHeading';
import { useContext, useState } from 'react';
import { Auth } from '../../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../../components/base/LoadingSpinner';
import InputFiled from '../../components/base/InputFiled';
const Login = () => {
    const [login, setLogin] = useState(true);

    //TODO
    const { loginUser, createUser, user, userLoading } = useContext(Auth);
    const location = useLocation();
    const path = location?.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;
        loginUser(email, pass)
    }


    if (user) {
        return <Navigate to={path} />
    }

    return (
        <div className=''>
            {userLoading ? <LoadingSpinner /> :
                <div className="flex flex-col justify-center items-center md:w-8/12 lg:w-4/12 border mx-auto my-36 p-20">
                    <SimpleHeading className="text-center mb-10" heading="Welcome Back, Log in" subTitle="Please enter your login details" />
                    <form onSubmit={handleLogin} className="w-full">
                        <div className="flex flex-col gap-2 mx-auto">
                            <InputFiled
                                label="Email"
                                type="email"
                                name="email"
                                placeholder="Write your email" />

                            <InputFiled
                                label="Password"
                                name="password"
                                type="password"
                                placeholder="Enter Your Password" />

                            <button className="btn rounded-sm px-6 font-bold bg-primary hover:bg-secondary border-none text-white">
                                Login
                                <BsArrowRight />
                            </button>
                        </div>
                    </form>

{/* TODO || needed to create another form for registration */}
                    <div className='mt-2'>
                        {login ?
                            <p>don't have an account ? <span className='text-secondary' onClick={() => setLogin(false)}> Singup</span></p> :
                            <p>Do you've already account?<span className='text-secondary' onClick={() => setLogin(true)}> Login</span></p>}
                    </div>
                </div>
            }



        </div>
    );
};

export default Login;