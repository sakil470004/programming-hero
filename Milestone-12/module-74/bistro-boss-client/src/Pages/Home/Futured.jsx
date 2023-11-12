import React from 'react';
import SectionTittle from '../components/SectionTittle';
import img from './../../assets/featured.jpg'
import './Futured.css'
const Futured = () => {
    return (
        <div className='text-white featureHome bg-fixed'>
            <SectionTittle
                heading='FRom our menu'
                subHeading='Check it out'
            ></SectionTittle>
            <div className='md:flex px-10 py-20 gap-12 justify-center items-center bg-slate-500 bg-opacity-30'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <p>Match 20 2023</p>
                    <p>Where can I get Some</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, aliquid nobis ea nesciunt eum repellat harum dolorem voluptatibus exercitationem unde quibusdam magnam nam dolorum eligendi quia odio perferendis accusantium placeat aliquam libero commodi officiis! Necessitatibus dolorem reprehenderit distinctio dolore autem odit eaque error aliquam quibusdam voluptate, molestiae quis voluptatibus corrupti.
                    </p>
                    <button className='btn btn-outline border-0 border-b-2'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Futured;