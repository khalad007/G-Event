import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import swal from "sweetalert";

import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FcGoogle } from "react-icons/fc";

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');


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




    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const displayName = form.get('displayName');
        const photoURL = form.get('photoURL');

        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password is less then 6 Character');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError("don't have a capital letter")
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password)) {
            setRegisterError("Password Don't 've a special Character")
        }

        // Create user with profile information

        createUser(email, password, photoURL, displayName)
            .then((user) => {
                // User registration successful
                console.log(user);
                // setSuccess("Registration Success.!")
                // setSuccess(swal("Good job!", "Registration Success.!", "success"))
                setSuccess(<div className="alert alert-success">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Registration Success !</span>
                </div>);
                


                // setUser(user);

                // redirect the user to a different page here
            })
            .catch((error) => {
                // Handle registration error
                console.error(error);
                setRegisterError(error.message)
            });
    }


    return (
        <div>

            <div className="bg-[#F3F3F3]">
                <h2 className="text-4xl font-bold my-10 text-center pt-10 ">Register <span className="text-[#F75B5F]">Here</span></h2>
                <div className="flex justify-center items-center ">
                    <button onClick={handleGoogleSignIn} className='flex p-4 text-3xl items-center border rounded bg-slate-300' href="">
                        <FcGoogle></FcGoogle>
                        Login With Google
                    </button>
                </div>


                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="displayName" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" placeholder="Photo URL" name="photoURL" className="input input-bordered" required />
                    </div>
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

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary mb-7">Register </button>
                    </div>
                </form>
                {
                    registerError && <p className="text-center text-red-700 font-bold">{registerError}*</p>
                }
                {
                    success && <p className="text-center text-green-600 font-bold">{success}*</p>
                }


                <p className="text-base font-semibold text-center py-10">Already Have An Account ?
                    <Link className="text-[#F75B5F]" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;