import swal from "sweetalert";


const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        swal("Sorry.!", "Page is Under Construction.!", "error", {
            button: "Ok!",
        }); 

    };
    return (
        <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold">
                        Name
                    </label>
                    <input
                        type="text"

                        name="name"

                        className="border p-2 w-full rounded-md"
                        placeholder="Your Name"
                        
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold">
                        Email
                    </label>
                    <input
                        type="email"

                        name="email"


                        className="border p-2 w-full rounded-md"
                        placeholder="Your Email"
                        
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-bold">
                        Message
                    </label>
                    <textarea

                        name="message"

                        className="border p-2 w-full rounded-md h-32"
                        placeholder="Your Message"
                        
                    />
                </div>
                <div className="text-center">
                    <button onClick={handleSubmit} className="btn btn-neutral">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;