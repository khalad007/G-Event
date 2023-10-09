

const Review = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
            <div className="card w-96 bg-base-100 shadow-xl mt-4 ">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/XtNWgBh/street-portrait-young-casual-lady-hat-black-clothes-red-lips-1.jpg" alt="Shoes" className="rounded-xl h-16 w-16" />
                </figure>

                <div className="card-body items-center text-center">
                    <h2 className="card-title">Samantha</h2>
                    <p>Non-stop action, incredible graphics, and unforgettable memories. A gamer's paradise!</p>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/6yNXnpP/pexels-mohamed-abdelghaffar-764356.jpg" alt="mohamed pic" className="rounded-xl h-16 w-16" />
                </figure>

                <div className="card-body items-center text-center">
                    <h2 className="card-title">Mohamed</h2>
                    <p>Non-stop action, incredible graphics, and unforgettable memories. A gamer's paradise!</p>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/BsB5cwF/pexels-du-photographer-1843667.jpg" alt="Shoes" className="rounded-xl h-16 w-16" />
                </figure>

                <div className="card-body items-center text-center">
                    <h2 className="card-title">Elizabeth</h2>
                    <p>Non-stop action, incredible graphics, and unforgettable memories. A gamer's paradise!</p>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;