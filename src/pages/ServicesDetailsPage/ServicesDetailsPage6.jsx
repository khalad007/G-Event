
import { Link } from 'react-router-dom';
import slide6 from '../../assets/slide6.jpg'

const ServicesDetailsPage6 = () => {
    return (
        <div className=" lg:card-side bg-base-100 shadow-xl">
            <figure><img src={slide6} alt="Event Image" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">Game Marketplace</h2>

                <p> Some gaming websites serve as marketplaces where players can purchase and download games, expansions, skins, and other in-game items. These platforms often offer a variety of payment options and digital storefronts for both developers and players.</p>

                <div className="card-actions justify-end">
                    <Link to={'/'}><button className="btn btn-primary">Back to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetailsPage6;