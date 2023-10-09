import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const displayName = form.get('displayName');
        const photoURL = form.get('photoURL');

        // Create user with profile information
        createUser(email, password, photoURL, displayName)
            .then((user) => {
                // User registration successful
                console.log( user);

                
                setUser(user);

                // redirect the user to a different page here
            })
            .catch((error) => {
                // Handle registration error
                console.error(error);
            });
    }


    return (
        <div>

            <div className="bg-[#F3F3F3]">
                <h2 className="text-3xl font-semibold my-10 text-center pt-10">Register Here</h2>

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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary mb-7">Register </button>
                    </div>
                </form>
                <p className="text-base font-semibold text-center py-10">Already Have An Account ?
                    <Link className="text-[#F75B5F]" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;