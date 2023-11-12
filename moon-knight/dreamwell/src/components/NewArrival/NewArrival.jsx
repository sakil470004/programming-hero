import React from "react";
import JewelCard from "../JewelCollection/JewelCard";

const NewArrival = () => {
  return (
    <div className="bg-base-100 my-10 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-medium my-6">New Arrival</h1>
          <button className="btn btn-neutral btn-sm bg-mix-2 text-ellipsis text-white "> Show More</button>
        </div>
        {/* here is jewel card */}
        <div className="grid  md:grid-cols-4 gap-5">
          <JewelCard />
          <JewelCard />
          <JewelCard />
          <JewelCard />
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
