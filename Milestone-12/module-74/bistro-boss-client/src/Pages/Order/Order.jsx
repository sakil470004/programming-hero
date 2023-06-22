import React, { useState } from 'react';
import Cover from '../../Shared/Cover';
import orderImg from './../../assets/shop/banner2.jpg'

// tab
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import useMenu from '../../hook/useMenu';
import OrderCard from './OrderCard';
import OrderCards from './OrderCards';
import { useParams } from 'react-router-dom';

const Order = () => {
    const [items] = useMenu();
    const { id } = useParams()
    const menuList = ['salad', 'pizza', 'soup', 'dessert',]
    const initialIndex = menuList.indexOf(id);
    const drinks = items.filter(p => p.category === "drinks")
    const dessert = items.filter(p => p.category === "dessert")
    const salad = items.filter(p => p.category === "salad")
    const soup = items.filter(p => p.category === "soup")
    const pizza = items.filter(p => p.category === "pizza")

    const [tabIndex, setTabIndex] = useState(initialIndex);
    return (
        <div>
            <Cover
                img={orderImg}
                title={'Our Shop'}
            ></Cover>

            <Tabs className='my-10' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderCards items={salad}></OrderCards>
                </TabPanel>
                <TabPanel>   <OrderCards items={pizza}></OrderCards></TabPanel>
                <TabPanel>   <OrderCards items={soup}></OrderCards></TabPanel>
                <TabPanel>   <OrderCards items={dessert}></OrderCards></TabPanel>
                <TabPanel>   <OrderCards items={drinks}></OrderCards></TabPanel>


            </Tabs>
        </div>
    );
};

export default Order;