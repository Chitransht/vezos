import React from "react";

const ServiceCard = (data) => {
  const { Name, service } = data.Data;

  return (
    <div className="p-4 flex">
      <div className="w-[250px] text-white ">
        <div className="h-[80px]">
          <p className="font-bold text-2xl ">{Name}</p>
        </div>
        <div>
          <p className="text-xl font-serif">{service}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
