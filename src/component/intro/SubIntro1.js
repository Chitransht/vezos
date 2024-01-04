import React from "react";
import { Link } from "react-router-dom";

const SubIntro1 = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-7/12  ">
        <div className="flex justify-center py-10 px-10 ">
          <h1 className="text-5xl font-bold text-purple-700 ">
            Check out our best services available for you now!!
          </h1>
        </div>
        <div className="flex justify-center py-4">
          <Link to="/service">
            <button className="border border-black px-9 py-5 rounded-r-full rounded-l-full cursor-pointer hover:bg-purple-700 hover:text-white">
              Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubIntro1;
