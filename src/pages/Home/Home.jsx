import { useLoaderData } from "react-router-dom";

import Banner from "../shared/Header/Banner";
import Event from "../../component/Event/Event";
import Services from "../../component/Service/Services";
// import Banner from "../shared/Header/Banner";
// import Navbar from "../shared/Header/Navbar";


const Home = () => {

    const cards = useLoaderData();


    console.log(cards);
    return (
        <div>
            <div className="lg:mb-96 md:mb-60">
                <Banner></Banner>
            </div>
            <h1 className="font-bold text-[5vw] mb-10 text-center">UpComing <span className="text-[#F75B5F]">Event.!</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
                {
                    cards.map(singleCards => <Event key={singleCards.id} cards={singleCards}></Event>)
                }
            </div>
            {/* services ................................................. */}
            <div>

                <div class="divide-x-[3px]">
                    <h1 className="font-bold text-[5vw] mt-10 lg:my-10 text-center">Our
                    <span className="text-[#F75B5F]">Services.!</span></h1>
                    <hr />
                </div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;