import { Outlet } from "react-router-dom";

import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Header/Navbar";


const Root = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;