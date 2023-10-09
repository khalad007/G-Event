import { Link } from 'react-router-dom'
import slide1 from '../../assets/slide1.jpg'
import slide2 from '../../assets/slide2.jpg'
import slide3 from '../../assets/slide3.jpeg'
import slide4 from '../../assets/slide4.jpg'
import slide5 from '../../assets/slide5.jpg'
import slide6 from '../../assets/slide6.jpg'

const Services = () => { 

    return (
        <div class="carousel w-[90%] mx-[5%] mt-10 h-[60vh] lg:h-[80vh] rounded-lg">
            <div id="slide1" class="carousel-item relative w-full">
                <img src={slide1} class="w-full" />
                <div
                    class="absolute flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
                    <a href="#slide6" class="btn btn-circle">❮</a>
                    <div>
                        <div class=" text-center">
                            <h1 class="text-lg lg:text-6xl text-white">Game Hosting 
                            </h1>
                            
                            
                            <Link to="/servicesdetailspage1"><button class="btn bg-red-500 border-0 mt-11 lg:m-8 text-white">Details</button></Link>
                        </div>

                    </div>
                    <a href="#slide2" class="btn btn-circle">❯</a>

                </div>
                <div class="absolute inset-0 bg-black opacity-50 z-10 "></div>
            </div>

            {/* .............................................................................. */}
            <div id="slide2" class="carousel-item relative w-full">
                <img src={slide2} class="w-full" />
                <div
                    class="absolute z-20 flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <div>
                        <div class=" text-center">
                            <h1 class="text-lg lg:text-6xl text-white">Matchmaking
                            </h1>
                           
                            <Link to="/servicesdetailspage2"><button class="btn bg-red-500 border-0 mt-11 lg:m-8 text-white">Details</button></Link>
                        </div>

                    </div>
                    <a href="#slide3" class="btn btn-circle">❯</a>

                </div>

                <div class="absolute inset-0 bg-black opacity-50 z-10 "></div>
            </div>
            {/* .............................................................................. */}
            <div id="slide3" class="carousel-item relative w-full">
                <img src={slide3}  class="w-full" />
                <div
                    class="absolute z-20 flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <div>
                        <div class=" text-center">
                            <h1 class="text-lg lg:text-6xl text-white">Tournaments and Events
                                
                            </h1>
                         
                            <Link to="/servicesdetailspage3"><button class="btn bg-red-500 border-0 mt-11 lg:m-8 text-white">Details</button></Link>
                        </div>

                    </div>
                    <a href="#slide4" class="btn btn-circle">❯</a>

                </div>

                <div class="absolute inset-0 bg-black opacity-50 z-10 "></div>
            </div>
            {/* .............................................................................. */}
            <div id="slide4" class="carousel-item relative w-full">
                <img src={slide4}  class="w-full" />
                <div
                    class="absolute z-20 flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <div>
                        <div class=" text-center">
                            <h1 class="text-lg lg:text-6xl text-white"> Content Creation and Streaming
                            </h1>
                           
                            <Link to="/servicesdetailspage4"><button class="btn bg-red-500 border-0 mt-11 lg:m-8 text-white">Details</button></Link>
                        </div>

                    </div>
                    <a href="#slide5" class="btn btn-circle">❯</a>

                </div>

                <div class="absolute inset-0 bg-black opacity-50 z-10 "></div>
            </div>
            {/* .............................................................................. */}
            <div id="slide5" class="carousel-item relative w-full">
                <img src={slide5}  class="w-full" />
                <div
                    class="absolute z-20 flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <div>
                        <div class=" text-center">
                            <h1 class="text-lg lg:text-6xl text-white">Community Forums and Social Features
                            </h1>
                           
                            <Link to="/servicesdetailspage5"><button class="btn bg-red-500 border-0 mt-11 lg:m-8 text-white">Details</button></Link>
                        </div>

                    </div>
                    <a href="#slide6" class="btn btn-circle">❯</a>

                </div>

                <div class="absolute inset-0 bg-black opacity-50 z-10 "></div>
            </div>
            {/* .............................................................................. */}
            <div id="slide6" class="carousel-item relative w-full">
                <img src={slide6}  class="w-full" />
                <div
                    class="absolute z-20 flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                    <a href="#slide5" class="btn btn-circle">❮</a>
                    <div>
                        <div class=" text-center">
                            <h1 class="text-lg lg:text-6xl text-white">Game Marketplace
                            </h1>
                            
                            <Link to="/servicesdetailspage6"><button class="btn bg-red-500 border-0 mt-11 lg:m-8 text-white">Details</button></Link>
                        </div>

                    </div>
                    <a href="#slide1" class="btn btn-circle">❯</a>

                </div>

                <div class="absolute inset-0 bg-black opacity-50 z-10 "></div>
            </div>
        </div>
    );
};

export default Services;