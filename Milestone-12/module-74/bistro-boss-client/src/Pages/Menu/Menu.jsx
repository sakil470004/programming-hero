import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover';
import ourMenuImg from './../../assets/menu/banner3.jpg'
import dessertBg from './../../assets/menu/dessert-bg.jpeg'
import pizzaBg from './../../assets/menu/pizza-bg.jpg'
import saladBg from './../../assets/menu/salad-bg.jpg'
import soupBg from './../../assets/menu/soup-bg.jpg'
import MenuCategory from './MenuCategory';
import useMenu from '../../hook/useMenu';
import SectionTittle from '../components/SectionTittle';
const Menu = () => {
    const [items] = useMenu();
    const offered = items.filter(p => p.category === "offered")
    const dessert = items.filter(p => p.category === "dessert")
    const salad = items.filter(p => p.category === "salad")
    const soup = items.filter(p => p.category === "soup")
    const pizza = items.filter(p => p.category === "pizza")
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={ourMenuImg} title={"OUr menu"}></Cover>
            <SectionTittle heading={'Today Offer'} subHeading={'Don"t Miss'}></SectionTittle>
            <MenuCategory
                items={offered}
            ></MenuCategory>
            <MenuCategory
                items={dessert}
                img={dessertBg}
                title={'dessert'}
            ></MenuCategory>
            <MenuCategory
                items={pizza}
                img={pizzaBg}
                title={'pizza'}
            ></MenuCategory>
            <MenuCategory
                items={salad}
                img={saladBg}
                title={'salad'}
            ></MenuCategory>
            <MenuCategory
                items={soup}
                img={soupBg}
                title={'soup'}
            ></MenuCategory>

        </div>
    );
};

export default Menu;