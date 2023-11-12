import React from 'react';
import MenuItemCard from '../../Shared/MenuItemCard';
import Cover from '../../Shared/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, img ,title}) => {
    return (
        <div className='my-16'>
            {title && <Cover className="py-10" img={img} title={title}></Cover>}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 '>
                {
                    items.map(item => <MenuItemCard key={item._id} item={item}
                    />)
                }
            </div>
           {title && <Link to={`/order/${title}`} className='btn btn-outline border-0 border-b-2 mt-10'>Buy Now</Link>}
        </div>
    );
};

export default MenuCategory;