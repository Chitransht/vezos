import React from "react";
import vezosDigital from "../images/vezosDigital1.jpg";

const EditDevision1 = () => {
  return (
    <>
      <div className="pt-24">
        <div className="w-full">
          <img
            src={vezosDigital}
            alt="vezosDigital"
            className="w-full h-[600px] blur-md "
          />
        </div>
        <div className=" ">
          <h1 className=" absolute text-white w-[65%] text-5xl left-[5%] font-bold top-[25%] ">
            We are the Edit Group of Vezos we do all the work regarding editing
            and photoshops
          </h1>
          <p className="text-white border border-white absolute w-[35%] p-10 top-[55%]  left-[100px] text-xl font-medium ">
            We are Edit Group of Vezos and our work is vidoe editing photoshops
            and etc we also create creative logos and thumbnails which will help
            you a lot .We do our work with our creative mind and will try to
            give you our best results.
          </p>
        </div>
        <div className="bg-black h-[300px] flex justify-evenly">
          <div className="w-[25%]">
            <h1 className="text-white font-light text-center pt-12 text-5xl">
              We will give you our best service for any editing work you require
            </h1>
          </div>
          <div className="w-[25%]">
            <p className="text-white text-center pt-12 font-light text-2xl">
              We will build a creative logo or video for your page, company, or
              store which will create a good impact on your customers or
              audience so what are you waiting for go try this.
            </p>
          </div>
        </div>
        <div className="absolute w-full">
          <div className="w-full">
            <img
              src={vezosDigital}
              alt="vezosDigital"
              className="w-full h-[600px] blur-md"
            />
          </div>
          <div>
            <div className="absolute top-[10%] w-[65%] border border-white p-10 left-[250px]">
              <h1 className="py-5 text-white text-4xl">
                We will give you our best results in creating your edit and it
                will be very great full for us to create
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

export default EditDevision1;
