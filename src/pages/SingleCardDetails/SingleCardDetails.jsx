import { Link } from "react-router-dom";


const SingleCardDetails = ({card}) => {

    const {  eventName, image, shortDescription,longDescription, buttonColor } = card || {}
    return (
        <div className=" lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Event Image" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{eventName}</h2>
              
                <p>{longDescription}</p>
                <div className="card-actions justify-end">
                    <Link to={'/'}><button className="btn btn-primary" style={{ backgroundColor: buttonColor }}>Back to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCardDetails;