import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Error from "../pages/Error/Error";
import CardDetails from "../pages/CardDetails/CardDetails";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import Shop from "../pages/Shop/Shop";




import ServicesDetailsPage1 from "../pages/ServicesDetailsPage/ServicesDetailsPage1";
import ServicesDetailsPage2 from "../pages/ServicesDetailsPage/ServicesDetailsPage2";
import ServicesDetailsPage3 from "../pages/ServicesDetailsPage/ServicesDetailsPage3";
import ServicesDetailsPage4 from "../pages/ServicesDetailsPage/ServicesDetailsPage4";
import ServicesDetailsPage5 from "../pages/ServicesDetailsPage/ServicesDetailsPage5";
import ServicesDetailsPage6 from "../pages/ServicesDetailsPage/ServicesDetailsPage6";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/card.json')
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/cards/:id',
                element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
                loader: () => fetch('/card.json')
            },
            {
                path: '/blog',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path: '/shop',
                element: <PrivateRoute><Shop></Shop></PrivateRoute>
            },
            {
                path: '/servicesdetailspage6',
                element: <ServicesDetailsPage6></ServicesDetailsPage6>
            },
            {
                path: '/servicesdetailspage5',
                element: <ServicesDetailsPage5></ServicesDetailsPage5>
            },
            {
                path: '/servicesdetailspage4',
                element: <ServicesDetailsPage4></ServicesDetailsPage4>
            },
            {
                path: '/servicesdetailspage3',
                element: <ServicesDetailsPage3></ServicesDetailsPage3>
            },
            {
                path: '/servicesdetailspage2',
                element: <ServicesDetailsPage2></ServicesDetailsPage2>
            },
            {
                path: '/servicesdetailspage1',
                element: <ServicesDetailsPage1></ServicesDetailsPage1>
            },
        ]
    }
]);

export default router;