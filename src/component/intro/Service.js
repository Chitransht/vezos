import React from "react";
import ServiceCard from "./ServiceCard";
import { Data } from "../../data/Data";

const Service = () => {
  return (
    <div className="mx-12 bg-purple-700 h-[250px] my-24 rounded-lg shadow-xl">
      <div className="p-10 flex flex-wrap  justify-center">
        {Data.map((data, i) => (
          <ServiceCard Data={data} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Service;
