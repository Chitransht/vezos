import React from "react";
import img1 from "../images/vezosMarketing1.jpg";
import img2 from "../images/vezosMarketing.webp";

const MarketingDevision1 = () => {
  return (
    <>
      <div className="pt-24">
        <div className="w-full">
          <img
            src={img1}
            alt="vezosDigital"
            className="w-full h-[600px] blur-md "
          />
        </div>
        <div className=" ">
          <h1 className=" absolute text-white w-[65%] text-5xl left-[5%] font-bold top-[25%] ">
            We are the Marketing Group of Vezos which will help you to grow your
            business by providing a good marketing service
          </h1>
          <p className="text-white border border-white absolute w-[55%] p-10 top-[65%]  left-[100px] text-xl font-medium ">
            We are Marketing Group of Vezos. If you are running your own
            business then this service will be very usefull for you. In this
            service we will be providing you our marketing service we will be
            providing you email and digital marketing for your business which
            will help you to grow your business. If you are planning to start a
            start up then this will definatly help you if you want to try check
            it out.
          </p>
        </div>
        <div className="bg-black h-[200px] ">
          <h1 className="text-white font-light text-center pt-12 text-5xl">
            WE WILL GIVE OUR BEST TO HELP YOU IN GROWING YOUR BUSINESS BY
            PROVIDING A BETTER MARKETING SERVICE
          </h1>
        </div>
        <div className="absolute w-full">
          <div className="w-full">
            <img
              src={img2}
              alt="vezosDigital"
              className="w-full h-[600px] blur-md"
            />
          </div>
          <div>
            <div className="absolute top-[10%] w-[65%] border border-white p-10 left-[250px]">
              <h1 className="py-5 text-white text-4xl">
                We will give you our best result to grow you your business and
                it will be very great full for us to have this opportunity
              </h1>
              <p className="py-5 text-white text-4xl">
                Keep supporting us and try our other best services also. Have
                Fun!!
              </p>
              <div className="flex justify-center py-3">
                <button className="border border-white px-10 py-5  text-white hover:text-black hover:bg-white font-normal text-3xl">
                  USE THIS SERVICE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketingDevision1;
