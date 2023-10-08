import { useLoaderData } from "react-router-dom";

import Banner from "../shared/Header/Banner";
import Event from "../../component/Event/Event";
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
            <h1></h1>
            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
               {
                 cards.map(singleCards => <Event key={singleCards.id} cards={singleCards}></Event>)
               }
            </div>
        </div>
    );
};

export default Home;