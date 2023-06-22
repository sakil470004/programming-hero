import React from 'react';
import SectionTittle from '../Shared/SectionTittle';

const Services = () => {
    const productServices = [
        {
            "name": "Online Courses",
            "description": "Learn martial arts from the comfort of your home with our comprehensive online courses. Our dedicated teachers will guide you through various styles and techniques.",
            "svg": "https://images.unsplash.com/photo-1588702547954-4800ead296ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          },
          {
            "name": "In-Person Training",
            "description": "Experience the thrill of in-person martial arts training with our expert instructors. Join our classes to enhance your skills and receive personalized guidance.",
            "svg": "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          },
          {
            "name": "Self-Defense",
            "description": "Participate in our self-defense workshops and learn practical techniques to protect yourself in real-life situations. Our experienced instructors will teach you effective self-defense strategies.",
            "svg": "https://plus.unsplash.com/premium_photo-1663126246796-999a49ec8736?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1477&q=80"
          },
        {
          "name": "Specialized Programs",
          "description": "Explore our specialized martial arts programs tailored for different age groups and skill levels. Improve your technique, discipline, and overall fitness with our dedicated instructors.",
          "svg": "https://images.unsplash.com/photo-1599677099981-0e9471924224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        }
      ]
      
    return (
        <div  className='my-10 shadow-md rounded-lg'>
           <SectionTittle heading={'Our Services'} subHeading={'Why You Choose Us! '}></SectionTittle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {/* card */}
                {productServices.map(ser =>
                    <div key={ser.name}  className="card  bg-base-100 shadow-xl image-full h-[350px] ">
                        <figure><img className='h-full w-full object-cover' src={ser.svg} alt="fight" /></figure>
                        <div className="card-body items-center justify-center">
                            <h2 className="card-title text-rose-400">{ser.name}</h2>
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