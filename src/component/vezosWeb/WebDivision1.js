import React from "react";
import vezosWeb from "../images/vezosWeb.jpg";

const WebDivision1 = () => {
  return (
    <div>
      <div className="blur-lg">
        <img src={vezosWeb} alt="vezosWeb" className="w-full h-full" />
      </div>
      <div className=" absolute top-[40%] left-[350px] w-1/2 text-center   bg-gradient-to-b from-black">
        <p className="font-bold text-3xl text-white">
          We are Web development group of Vezos which will help you to create
          your website
        </p>
        <div>
          <p className="font-thin text-2xl text-white py-16">
            Vizos Web is a web development service which will help you to create
            you own website for your profile page, ecommerce store or your
            companies website if you don't know anything about webdevelopment
            but you want to sell your products online in your website then it
            will going to be a very helpful service for you
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-cyan-700 to-blue-950">
        <div className="flex  justify-center  p-20">
          <div className="  w-[75%]  border border-white ">
            <p className="text-white text-5xl font-light text-center  text-wrap p-20">
              We will give you our best results in creating your websites and it
              will be very greateful for us to create Keep supporting us and try
              our other best services also. Have Fun!!
            </p>
          </div>
        </div>
        <div className="flex justify-center pb-28 ">
          <button className="border border-white px-10 py-5  text-white hover:text-black hover:bg-white font-normal text-3xl">
            USE THIS SERVICE
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebDivision1;
