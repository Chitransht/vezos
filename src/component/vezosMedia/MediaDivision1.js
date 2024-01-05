import React from "react";
import vezosDigital from "../images/vezosDigital.jpg";

const MediaDivision1 = () => {
  return (
    <div className="pt-24">
      <div className="w-full">
        <img src={vezosDigital} alt="vezosDigital" className="w-full blur-md" />
      </div>
      <div className=" ">
        <h1 className=" absolute text-white w-1/2 text-4xl left-[5%] font-bold top-[45%] ">
          We are the Media Group of Vezos which will provide you social media
          services and it will be usefull for your social media account
        </h1>
        <p className="text-white border border-white absolute w-[28%] p-10 top-[25%]  left-[850px] text-xl font-medium ">
          We are Media Group of Vezos .This service helps client by managing
          their social media account creating thumbnails for their youtube
          videos and many more works in social media like content writing
          ,photos or videos uploading, helping their products to promote on
          social media and etc. If you are a social media influencer you might
          check our service.
        </p>
      </div>
      <div className="bg-black h-[200px]">
        <h1 className="text-white text-center pt-12 font-bold text-5xl">
          WE WILL GIVE OUR BEST TO HELP YOU REGARDING YOUR SOCIAL MEDIA WORK
        </h1>
      </div>
      <div className="absolute">
        <div className="w-full">
          <img
            src={vezosDigital}
            alt="vezosDigital"
            className="w-full h-full blur-md"
          />
        </div>
        <div>
          <div className="absolute top-[10%] w-[65%] border border-white p-10 left-[250px]">
            <h1 className="py-5 text-white text-4xl">
              We will give you our best results in managing your account and it
              will be very greateful for us to manage
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
  );
};

export default MediaDivision1;
