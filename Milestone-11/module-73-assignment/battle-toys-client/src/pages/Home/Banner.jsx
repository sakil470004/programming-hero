import React from 'react';


const Banner = () => {
    const imgs = [
        'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbGQlMjB0b3lzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1174&q=80',
        'https://images.unsplash.com/photo-1631032024590-140cc8dd4b32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpbGQlMjB0b3lzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1174&q=80',
        'https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbGQlMjB0b3lzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1174&q=80',
    ]
    const data = [
        {
            "futureName": "Inspire and Imagination",
            "futureDescription": "We prioritize creating toys that inspire imaginative play, allowing children to explore and create their own worlds of fun."
        },
        {
            "futureName": "High-quality craftsmanship",
            "futureDescription": "Our toys are meticulously crafted using durable materials to ensure they can withstand even the most adventurous play sessions."
        },
        {
            "futureName": "Safety first",
            "futureDescription": "We adhere to strict safety standards, ensuring our toys are free from harmful chemicals and hazards, providing peace of mind for parents and caregivers"
        },
        
    ]

    const imgLen = imgs.length;
    return (
        <div className="carousel w-full h-[600px] my-5 object-cover rounded-xl bg-pink-50">
            {imgs.map((img, index) => <div key={index} id={`slide${index}`} className="carousel-item relative w-full">
                <img src={img} className="w-full object-cover bg-cover filter brightness-75 " />
                <div className="absolute flex flex-col md:max-w-2xl gap-3 transform -translate-y-1/2 left-5 bottom-5 text-white space-y-4">
                    <h2 className='text-6xl font-bold'>{data[index].futureName}</h2>
                    <p>{data[index].futureDescription}</p>
                    <div className='flex gap-5'><button className="btn bg-pink-100 text-black hover:bg-rose-400 hover:text-white">Discover More</button>
                    </div>
                </div>
                <div className="absolute flex justify-between gap-3 transform -translate-y-1/2 right-5 bottom-5 ">
                    <a href={`#slide${index - 1 < 0 ? imgLen - 1 : index - 1}`} className="btn btn-circle btn-error  bg-pink-100 text-black hover:bg-rose-400 hover:text-white">❮</a>
                    <a href={`#slide${(index + 1) % imgLen}`} className=" btn-circle btn-error btn bg-pink-100 text-black hover:bg-rose-400 hover:text-white">❯</a>
                </div>

            </div>)}
           
        </div>
    );
};

export default Banner;