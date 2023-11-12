import React from "react";
import yoona from "./../../assets/yoona.png";
const Banner = () => {
  return (
    <div className="bg-mix-3">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row gap-5 items-center  justify-around py-6">
          <div className="">
            <p className="font-medium text-xl ">Exclusive Offer -10% Off This Week</p>
            <h3 className="text-4xl font-semibold my-2">Yoona Arrival</h3>
            <h5 className="text-sm font-bold flex gap-3 items-end">Starting At <span className="text-mix-2 text-2xl">$29220.00</span></h5>
            <button className="btn btn-md btn-warning bg-mix-2 text-white mt-8">Shopping Now</button>
          </div>
          <div className="">
            <img className="h-auto max-w-[250px]"  src={yoona} />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
