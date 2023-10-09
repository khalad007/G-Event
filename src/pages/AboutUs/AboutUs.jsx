


const AboutUs = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">
                    About <span className="text-[#F75B5F]">Us.!</span>
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-8">
                    <div className="w-full md:w-1/2">
                        <img
                            src="src\assets\227.jpg"
                            alt="Company Building"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We focused on Game Event mangement . We Our gaming management site, dedicated to enhancing your gaming experience, welcomes you to learn more about us. At the heart of our mission is a deep passion for gaming and a commitment to providing exceptional services to the gaming community.

                            With a team of avid gamers, developers, and industry experts, we've created a platform that simplifies game management. Our platform equips gamers and communities with powerful tools for organizing tournaments, events, and managing game servers effortlessly.

                            
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mt-4">
                        Our commitment to the gaming community drives us to provide exceptional support and resources, ensuring that every user enjoys a seamless and enriching gaming experience. Join us on this exciting journey, and let's elevate gaming together.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;