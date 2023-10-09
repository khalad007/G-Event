import Marquee from "react-fast-marquee";

const Shop = () => {

    const products = [





        {
            id: 1,
            name: 'Street Fighter',
            price: 19.99,
            imageUrl: 'https://i.ibb.co/0DMfh0T/shop5.jpg',
        },
        {
            id: 2,
            name: 'Howgwarts Legacy',
            price: 24.99,
            imageUrl: 'https://i.ibb.co/9WfgCy4/shop4.jpg',
        },
        {
            id: 3,
            name: 'PS5',
            price: 29.99,
            imageUrl: 'https://i.ibb.co/1QtsRM9/shop3.jpg',
        },
        {
            id: 4,
            name: 'JEDI',
            price: 29.99,
            imageUrl: 'https://i.ibb.co/kyzhn8n/shop2.jpg',
        },
        {
            id: 5,
            name: 'Call of Duty',
            price: 29.99,
            imageUrl: 'https://i.ibb.co/6t8c0W6/shop1.jpg',
        }
    ];
    return (
        <div>
            <h1 className="text-center text-5xl font-bold my-10">Shop <span className="text-[#F75B5F]">Now</span></h1>


            <h1 className=" text-3xl font-bold my-10">Access<span className="text-[#f75b5f] ">o</span>ries</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/fqtdPNV/Accessories3.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Mouse !</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-[#F75B5F] text-white">Buy Now</button>
                        </div>
                    </div>
                </div>


                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/xYsZ36N/Accessories2.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">HeadPhone !</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-[#F75B5F] text-white">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/xCLcRqV/Accessories1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Keyboard!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-[#F75B5F] text-white">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* ..........................................part 2...................................... */}
            <h1 className="text-3xl font-bold mb-4">Game's</h1>
            <Marquee pauseOnHover>
                <div className="container mx-auto p-4">

                    <div className="grid grid-cols-5 gap-4">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="p-4 border border-gray-200 rounded-lg shadow-md flex"
                            >
                                <div className="w-1/2 pr-4">
                                    <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                                    <button className="btn btn-neutral mt-2">Add to Cart</button>
                                </div>
                                <div className="w-1/2">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className="w-full h-40 object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Marquee>

        </div>
    );
};

export default Shop;