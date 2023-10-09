

import { Link } from 'react-router-dom';
import slide3 from '../../assets/slide3.jpeg'
const ServicesDetailsPage3 = () => {
    return (
        <div className=" lg:card-side bg-base-100 shadow-xl">
            <figure><img src={slide3} alt="Event Image" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">Tournaments and Events</h2>

                <p>  Gaming websites and event handlers frequently organize and host online and offline tournaments and events. These competitions can range from small local gatherings to large international esports tournaments.</p>

                <div className="card-actions justify-end">
                    <Link to={'/'}><button className="btn btn-primary">Back to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetailsPage3;