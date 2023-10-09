import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [success, setSuccess] = useState('');
    const location = useLocation();

    const navigate = useNavigate();


    const auth = getAuth();
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // Google Sign-In successful, you can handle the user creation or login here
                const user = result.user;
                console.log(user);
                // Redirect or handle the user state as needed
            })
            .catch((error) => {
                // Handle Google Sign-In error
                console.error(error);
            });
    };


    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess(swal("Good job!", "Login Success.!", "success"))
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error);
                setLoginError(error.message);
            })
    }

    return (
        <div>

            <div className="bg-[#F3F3F3]">
                <h2 className="text-3xl font-semibold my-10 text-center pt-10">Login Here</h2>

                <div className="flex justify-center items-center ">
                    <button onClick={handleGoogleSignIn} className='flex p-4 text-3xl items-center border rounded bg-slate-300' href="">
                        <FcGoogle></FcGoogle>
                        Login With Google
                    </button>
                </div>

                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                {
                    loginError && <p className="text-center text-red-700 font-bold mt-3">{loginError}*</p>
                }

                <p className="text-base font-semibold text-center py-10">Don't Have An Account ?<Link className="text-[#F75B5F]" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;