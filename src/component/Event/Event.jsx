import { Link } from "react-router-dom";


const Event = ({ cards }) => {

    const { id, eventName, image, price, shortDescription, buttonColor } = cards;


    return (
        <div className="card card-compact bg-[#F3F3F3] shadow-xl ">
            <figure><img className="w-full h-[300px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{eventName}</h2>
                <p>{shortDescription}</p>
                <p className="font-bold">Entry Fee : {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/cards/${id}`}>
                        <button style={{ backgroundColor: buttonColor }} className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Event;