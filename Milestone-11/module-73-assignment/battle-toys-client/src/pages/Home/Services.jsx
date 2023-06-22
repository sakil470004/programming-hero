import React from 'react';

const Services = () => {
    const productServices = [
        {
            name: "Product Catalog",
            description: "Browse our comprehensive catalog of action toys, organized by categories, brands, and age groups.",
            svg: "https://plus.unsplash.com/premium_photo-1664474813788-c3e796a2ff7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2F0YWxvZ3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Secure Online Ordering",
            description: "Enjoy a safe and user-friendly online ordering system with secure payment gateways for hassle-free transactions.",
            svg: "https://plus.unsplash.com/premium_photo-1683983984371-1e8c32468699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T25saW5lJTIwT3JkZXJpbmd8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Product Reviews and Ratings",
            description: "Read and contribute product reviews and ratings to help other customers make informed purchasing decisions.",
            svg: "https://plus.unsplash.com/premium_photo-1682309642428-3f8b37637434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UmF0aW5nc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Customer Support",
            description: "Get reliable assistance through live chat, email, or our dedicated customer support hotline for any inquiries or concerns.",
            svg: "https://plus.unsplash.com/premium_photo-1661764559869-f6052a14b4c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3VzdG9tZXIlMjBTdXBwb3J0fGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },]
    return (
        <div data-aos="fade-up" className='my-20 shadow-md rounded-lg md:p-4'>
            <h2 className='text-4xl text-pink-400 text-center mb-3 font-bold'>Our Futures</h2>
            <p className='text-gray-400 font-bold text-center mb-10'>Why You Choice US !!!</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {/* card */}
                {productServices.map(ser =>
                    <div key={ser.name} data-aos="flip-right"  className="card  bg-base-100 shadow-xl image-full h-[350px] ">
                        <figure><img className='h-full w-full object-cover' src={ser.svg} alt="Shoes" /></figure>
                        <div className="card-body items-center justify-center">
                            <h2 className="card-title text-gray-100">{ser.name}</h2>
                            <p className='text-gray-200'>{ser.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-error text-white">Show More</button>
                            </div>
                        </div>
                    </div>)}
            </div>

        </div>
    );
};

export default Services;