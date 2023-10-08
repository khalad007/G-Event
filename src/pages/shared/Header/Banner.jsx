import bgPic from '../../../assets/bg1.jpg'
import bgPic2 from '../../../assets/bg2.jpg'
const Banner = () => {
    return (
        <div className=" h-[70vh]">
            <h1 className='absolute text-[8vw] left-36 md:left-56 lg:left-96 '>G-Event<span className='text-[#F75B5F]'>O</span></h1>
            <img className='rounded-b-lg w-full' src={bgPic2} alt="" />
        </div>
    );
};

export default Banner;