import React, { useEffect, useState } from 'react';
import SectionTittle from '../components/SectionTittle';
import MenuItemCard from '../../Shared/MenuItemCard';
import useMenu from '../../hook/useMenu';

const PopularItem = () => {
    // const [items, setItems] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularData = data.filter(popular => popular.category === "popular")
    //             setItems(popularData)
    //         })
    // }, [])
    const [items]=useMenu();
    const popular=items.filter(p=>p.category==="popular")
    return (
        <div>
            <SectionTittle
                heading='From our Menu'
                subHeading='Popular Items'
            ></SectionTittle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4'>
                {
                    popular.map(item => <MenuItemCard key={item._id} item={item}
                    />)
                }
            </div>
            <p className='text-center text-blue-800 border-b-4 mb-10 border-blue-600 mt-4 md:w-1/12 mx-auto '>ViewFull Menu</p>
        </div>
    );
};

export default PopularItem;