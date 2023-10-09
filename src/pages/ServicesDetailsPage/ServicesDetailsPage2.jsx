

import { Link } from 'react-router-dom';
import slide2 from '../../assets/slide2.jpg'
const ServicesDetailsPage2 = () => {
    return (
        <div className=" lg:card-side bg-base-100 shadow-xl">
            <figure><img src={slide2} alt="Event Image" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">Matchmaking</h2>

                <p>   Matchmaking services help players find opponents or teammates with similar skill levels or preferences. These services create balanced matches, enhancing the overall gaming experience.</p>

                <div className="card-actions justify-end">
                    <Link to={'/'}><button className="btn btn-primary">Back to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetailsPage2;