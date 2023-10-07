import { Link } from "react-router-dom";
import Navbar from "../shared/Header/Navbar";


const Login = () => {

        const handleLogin = e => {
            e.preventDefault();
            console.log(e.currentTarget);
            const form = new FormData(e.currentTarget);
            console.log(form.get("email"));
        }

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#F3F3F3]">
                <h2 className="text-3xl font-semibold my-10 text-center pt-10">Login Here</h2>

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

                <p className="text-base font-semibold text-center py-10">Don't Have An Account ?<Link className="text-[#F75B5F]" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;