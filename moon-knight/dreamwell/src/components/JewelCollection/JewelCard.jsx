import React from 'react';

const JewelCard = () => {
    return (
        <div className="card  bg-base-100 shadow-lg hover:transition-transform hover:scale-95">
        <figure><img src="https://th.bing.com/th/id/R.1cd26e5d69c47eb28c4705318915970c?rik=gCL9DaY8WQrkOg&pid=ImgRaw&r=0" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title" title='show more'>
            Diamond!
            <div className="badge  bg-mix-2 text-white">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end  hover:block">
           <button className='w-full btn btn-sm bg-mix-2 text-white hover:text-black'>
           Show Details
           </button>
          </div>
        </div>
      </div>
    );
};

export default JewelCard;