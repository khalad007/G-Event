
import { Link } from 'react-router-dom';
import slide5 from '../../assets/slide5.jpg'
const ServicesDetailsPage5 = () => {
    return (
        <div className=" lg:card-side bg-base-100 shadow-xl">
            <figure><img src={slide5} alt="Event Image" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">Community Forums and Social Features</h2>

                <p> Gaming sites often include community forums, chat features, and social networking capabilities to help players connect with others who share their interests. These features facilitate discussions, sharing of tips, and building a sense of community.</p>

                <div className="card-actions justify-end">
                    <Link to={'/'}><button className="btn btn-primary">Back to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetailsPage5;