import { Link, NavLink } from "react-router-dom";
import defaultUserPic from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/shop">Shop</NavLink></li>

    </>

    return (
        <div className="navbar bg-gradient-to-r from-[#F3F3F3] to-[#EAEAEA]"> 
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">G-Event<span className="text-[#F75B5F]">O</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src={user ? user.photoURL || defaultUserPic : defaultUserPic} alt="User Profile" />
                    </div>
                </label>

                {
                    user ? <>
                        <span className="mr-2 font-semibold">{user.displayName}</span>
                        <button onClick={handleSignOut} className="btn btn-neutral">Sign Out</button>
                    </>
                        :
                        <Link to="/login"><button className="btn btn-neutral">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;