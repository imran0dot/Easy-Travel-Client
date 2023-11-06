import { BsArrowRight } from 'react-icons/bs';
import SimpleHeading from '../../components/base/SimpleHeading';
import { useContext } from 'react';
import { Auth } from '../../Providers/AuthProvider';
const Login = () => {
    const { createUser } = useContext(Auth);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;
        createUser(email, pass)
    }
    return (
        <div className="flex flex-col justify-center items-center w-4/12 border mx-auto my-36 p-20">
            <SimpleHeading heading="Login" />
            <form onSubmit={handleLogin} className="w-full">
                <div className="flex flex-col gap-2 mx-auto">
                    <input name='email' className="input input-bordered w-full " placeholder="Email" />
                    <input name='password' type="password" className="input input-bordered w-full" placeholder="Pass" />
                    <button className="btn rounded-sm px-6 font-bold bg-primary hover:bg-secondary border-none text-white">
                        Login
                        <BsArrowRight />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;