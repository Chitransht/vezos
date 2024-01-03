import React from "react";

const MainIntro = () => {
  return (
    <div className="pt-28  justify-center px-36  pb-5">
      <div className="h-[950px] w-full mt-12 rounded-3xl shadow-2xl border border-gray-300">
        <div className="pt-16 pl-32">
          <p className="text-purple-800 font-bold text-5xl pb-2 font-serif">
            Hii Everybody!!
          </p>
          <p className="text-purple-800 font-bold text-5xl pb-5 font-serif">
            This is VEZOS DIGITALS
          </p>
        </div>
        <div className="w-3/4 pl-32">
          <p className="h-2 bg-purple-700 "></p>
        </div>
        <div className=" flex justify-center pt-10 ">
          <img
            className="h-[400px] rounded-full shadow-2xl border border-gray-300"
            src="https://vezosdigitals.netlify.app/vezosdigitalslogo.png"
            alt="veoz_logo"
          />
        </div>
        <div className=" ml-28 mt-24 w-[700px] flex justify-center ">
          <p className="font-serif font-bold text-3xl  text-blue-700">
            We are VEZOS DIGITALS a digital service providing company that works
            with various client projects and businesses and help them to succeed
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainIntro;
