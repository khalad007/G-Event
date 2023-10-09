
import { Link } from 'react-router-dom';
import slide1 from '../../assets/slide1.jpg'

const ServicesDetailsPage1 = () => {
    return (
        <div className=" lg:card-side bg-base-100 shadow-xl">
            <figure><img src={slide1} alt="Event Image" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl"> Game Hosting </h2>

                <p>  Gaming websites and event handlers often provide game hosting services, allowing players to create and join multiplayer game sessions. They offer server hosting for various popular games, ensuring smooth gameplay experiences..</p>

                <div className="card-actions justify-end">
                    <Link to={'/'}><button className="btn btn-primary">Back to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetailsPage1;