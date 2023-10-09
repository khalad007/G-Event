

import { Link } from 'react-router-dom';
import slide4 from '../../assets/slide4.jpg'
const ServicesDetailsPage4 = () => {
    return (
        <div className=" lg:card-side bg-base-100 shadow-xl">
            <figure><img src={slide4} alt="Event Image" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">Content Creation and Streaming</h2>

                <p>  Many gaming websites support content creators and streamers by offering platforms to showcase their gameplay. They may provide tools for streaming, video hosting, and monetization options for creators.</p>

                <div className="card-actions justify-end">
                    <Link to={'/'}><button className="btn btn-primary">Back to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetailsPage4;