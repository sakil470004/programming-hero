import React from 'react';
import OrderCard from './OrderCard';

const OrderCards = ({items}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {
            items.map(item => <OrderCard
                  key={item._id}
                  item={item}
              ></OrderCard>)
          }
        </div>
    );
};

export default OrderCards;