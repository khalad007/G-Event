

const Event = ({ cards }) => {

    const { eventName,image,price,shortDescription,buttonColor } = cards;


    return (
        <div className="card card-compact bg-[#F3F3F3] shadow-xl">
            <figure><img className="w-full h-[300px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{eventName}</h2>
                <p>{shortDescription}</p>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <button style={{backgroundColor:buttonColor}} className="btn btn-primary">More</button>
                </div>
            </div>
        </div>
    );
};

export default Event;