
import blog1 from '../../assets/blog1.jpg'
import blog2 from '../../assets/blog2.jpg'
import blog3 from '../../assets/blog3.jpg'
import blog4 from '../../assets/blog4.jpg'
import blog5 from '../../assets/blog5.jpg'
import blog6 from '../../assets/blog6.jpg'


const Blog = () => {

    const handleDetails = (e) => {
        e.preventDefault();

        swal("Sorry.!", "Page is Under Construction.!", "error", {
            button: "Ok!",
        }); 

    };

    return (
        <div>
            <h1 className='text-5xl font-bold my-8 text-center'>Our <span className='text-[#F75B5F]'>Blog's</span></h1>
            <div>
                <img className='rounded-b-lg' src={blog1} alt="" />
                <h1 className='text-3xl font-semibold my-5 text-[#3E6B68]'>In the chaos of the Norse realms, Kratos must face his past to secure the future.</h1>
                <p className='my-8 text-[#B3B3B3] text-sm font-bold'>August 28, 2023 -- No Comments</p>
                <div className="badge badge-neutral mb-6 text-white bg-[#3E6B68]"># God Of War</div><br />
                <button onClick={handleDetails} className='btn bg-[#3E6B68] text-white mb-5'>Read More</button>
                <hr />
            </div>
            {/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,............................,,,,,,,,,,,,,,,,,,,,, */}
            <div>
                <img className='rounded-b-lg' src={blog2} alt="" />
                <h1 className='text-3xl font-semibold my-5 text-[#DC143C]'>With great power comes great responsibility... </h1>
                <p className='my-8 text-[#B3B3B3] text-sm font-bold'>August 28, 2023 -- No Comments</p>
                <div className="badge badge-neutral mb-6 text-white bg-[#DC143C]"># Spider-man: Miles Morales</div><br />
                <button onClick={handleDetails} className='btn bg-[#DC143C] text-white mb-5'>Read More</button>
                <hr />
            </div>
            {/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,............................,,,,,,,,,,,,,,,,,,,,, */}
            <div>
                <img className='rounded-b-lg' src={blog3} alt="" />
                <h1 className='text-3xl font-semibold my-5 text-[#C1623F]'>Welcome to the city of crime, where the choices you make shape your destiny.</h1>
                <p className='my-8 text-[#B3B3B3] text-sm font-bold'>August 28, 2023 -- No Comments</p>
                <div className="badge badge-neutral mb-6 text-white bg-[#C1623F]"># GTA San Andres</div><br />
                <button onClick={handleDetails} className='btn bg-[#C1623F] text-white mb-5'>Read More</button>
                <hr />
            </div>
            {/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,............................,,,,,,,,,,,,,,,,,,,,, */}
            <div>
                <img className='rounded-b-lg' src={blog4} alt="" />
                <h1 className='text-3xl font-semibold my-5 text-[#FFB62B]'>In a world of pixels, can you find the way back home?</h1>
                <p className='my-8 text-[#B3B3B3] text-sm font-bold'>August 28, 2023 -- No Comments</p>
                <div className="badge badge-neutral mb-6 text-white bg-[#FFB62B]"># Minecraft</div><br />
                <button onClick={handleDetails} className='btn bg-[#FFB62B] text-white mb-5'>Read More</button>
                <hr />
            </div>
            {/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,............................,,,,,,,,,,,,,,,,,,,,, */}
            <div>
                <img className='rounded-b-lg' src={blog5} alt="" />
                <h1 className='text-3xl font-semibold my-5 text-[#504731]'>In the dystopian future of Night City, power, corruption, and rebellion collide.</h1>
                <p className='my-8 text-[#B3B3B3] text-sm font-bold'>August 28, 2023 -- No Comments</p>
                <div className="badge badge-neutral mb-6 text-white bg-[#504731]"># CyberPunk</div><br />
                <button onClick={handleDetails} className='btn bg-[#504731] text-white mb-5'>Read More</button>
                <hr />
            </div>
            {/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,............................,,,,,,,,,,,,,,,,,,,,, */}
            <div>
                <img className='rounded-b-lg' src={blog6} alt="" />
                <h1 className='text-3xl font-semibold my-5 text-[#6D4E30]'>Fus Ro Dah! Uncover the secrets of an ancient land..</h1>
                <p className='my-8 text-[#B3B3B3] text-sm font-bold'>August 28, 2023 -- No Comments</p>
                <div className="badge badge-neutral mb-6 text-white bg-[#6D4E30]"># Skyrim</div><br />
                <button onClick={handleDetails} className='btn bg-[#6D4E30] text-white mb-5'>Read More</button>
                <hr />
            </div>
            {/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,............................,,,,,,,,,,,,,,,,,,,,, */}
        </div>
    );
};

export default Blog;