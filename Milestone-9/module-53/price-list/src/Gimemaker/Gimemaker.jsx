import React, { useEffect, useState } from 'react';
import PriceCard from './PriceCard';

const Gimemaker = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrices(data));
    }, [])
    return (
        <div className='p-4'>
          <h2 className='text-center text-indigo-500 text-5xl font-extrabold bg-green-300 my-5'>Awesome Affordable Price</h2>  
          <div className='grid md:grid-cols-3 gap-3'>
                {
                    prices.map(price => <PriceCard
                        key={price.id}
                        price={price}
                    ></PriceCard>)
                }
            </div>
        </div>
    );
};

export default Gimemaker;