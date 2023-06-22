import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from './../../assets/01.jpg'
import img2 from './../../assets/02.jpg'
import img3 from './../../assets/03.png'
import img4 from './../../assets/04.jpg'
import img5 from './../../assets/05.png'
import img6 from './../../assets/06.png'

const Banner = () => {
    const imgs=[img1,img2,img3,img4,img5,img6]
    return (
        <Carousel>
            {imgs.map((img,index)=>    <div key={index}>
                    <img src={img}  />
                    
                </div>)}
               
            </Carousel>
    );
};

export default Banner;


