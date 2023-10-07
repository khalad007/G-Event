import Banner from "../shared/Header/Banner";
import Navbar from "../shared/Header/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <h1 className="text-5xl font-cabin">HOme</h1>
            
        </div>
    );
};

export default Home;