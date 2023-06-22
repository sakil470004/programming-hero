import React from 'react';
import img1 from './../../assets/images/banner/1.jpg'
import img2 from './../../assets/images/banner/2.jpg'
import img3 from './../../assets/images/banner/3.jpg'
import img4 from './../../assets/images/banner/4.jpg'
import img5 from './../../assets/images/banner/5.jpg'
import img6 from './../../assets/images/banner/6.jpg'

const Banner = () => {
    const imgs = [img1, img2, img3, img4, img5, img6]
    const imgLen = imgs.length;
    return (
        <div className="carousel w-full h-[600px] object-cover rounded-xl">
            {imgs.map((img, index) => <div key={index} id={`slide${index}`} className="carousel-item relative w-full">
                <img src={img} className="w-full filter brightness-75 contrast-125" />
                <div className="absolute flex flex-col md:max-w-2xl gap-3 transform -translate-y-1/2 left-5 bottom-5 text-white space-y-4">
                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex gap-5'><button className="btn btn-active btn-primary">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button></div>
                </div>
                <div className="absolute flex justify-between gap-3 transform -translate-y-1/2 right-5 bottom-5 ">
                    <a href={`#slide${index - 1 < 0 ? imgLen - 1 : index - 1}`} className="btn btn-circle btn-error">❮</a>
                    <a href={`#slide${(index + 1) % imgLen}`} className="btn btn-circle btn-error">❯</a>
                </div>

            </div>)}
            {/* for delete */}
            {/* <div id="slide2" className="carousel-item relative w-full">
                <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;