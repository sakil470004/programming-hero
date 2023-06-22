import React from 'react';

const SliderCard = ({ img, des }) => {
    return (
        <div className="h-[550px] w-full bg-red-100 relative -z-10">
        <div className="flex items-center justify-center h-full">
          <img className="w-full h-full object-cover filter brightness-[85%] -z-10" src={img} alt="fight" />
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 -z-10 text-white p-4">
          <h3 className="text-center">{des}</h3>
        </div>
      </div>
    );
};

export default SliderCard;