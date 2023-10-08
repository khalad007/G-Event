

const Services = () => {

    return (
        <div class="carousel w-[90%] mx-[5%] mt-10 h-[60vh] lg:h-[80vh]">
            <div id="slide1" class="carousel-item relative w-full">
                <img src="src\assets\slide1.jpg" class="w-full" />
                <div
                    class="absolute flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <div>
                        <div class=" text-center">
                            <h1 class="text-lg lg:text-6xl text-white">Game Hosting <br />
                                doorstep
                            </h1>
                            
                            
                            <button class="btn bg-red-500 border-0 mt-11 lg:m-8 text-white">Details</button>
                        </div>

                    </div>
                    <a href="#slide2" class="btn btn-circle">❯</a>

                </div>
                <div class="absolute inset-0 bg-black opacity-50 z-10 "></div>
            </div>

            {/* .............................................................................. */}
            <div id="slide2" class="carousel-item relative w-full">
                <img src="./images/banner2.png" class="w-full" />
                <div
                    class="absolute z-20 flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <div>
                        <div class=" text-center">
                            <h1 class="text-lg lg:text-6xl text-white">Exotic tastes at your <br />
                                doorstep
                            </h1>
                            <p class="mt-2 text-xs lg:text-base text-white">We supply highly quality organic products
                            </p>
                            <button class="btn bg-red-500 border-0 mt-11 lg:m-8 text-white">Shop Now</button>
                        </div>

                    </div>
                    <a href="#slide3" class="btn btn-circle">❯</a>

                </div>

                <div class="absolute inset-0 bg-black opacity-50 z-10 "></div>
            </div>
        </div>
    );
};

export default Services;