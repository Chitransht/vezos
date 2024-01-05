import React from "react";
import vezosWeb from "../images/vezosWeb.jpg";
import Edit from "../images/vezosEdits.webp";
import Marketing from "../images/vezosMarketing.webp";
import vezosMedia from "../images/vezosMedia.webp";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap  cursor-pointer ">
        <Link to="/vezosWeb" className="w-1/2 h-[400px]">
          <div className="">
            <img
              className="w-full h-[400px] -z-20 transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110  duration-300  "
              src={vezosWeb}
              alt="vezosweb"
            />
            <h1 className="absolute top-36 left-[15%] text-white font-bold text-5xl text-center font-serif z-10 ">
              Vezos Web
            </h1>
          </div>
        </Link>
        <Link to="/vezosedit" className="w-1/2 h-[400px]">
          <img
            className=" w-full h-[400px] -z-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 "
            src={Edit}
            alt=""
          />
          <h1 className="absolute top-36 left-[65%] text-white font-bold text-5xl text-center font-serif z-10 ">
            Vezos Edit
          </h1>
        </Link>
        <Link to="/vezosemarket" className="w-1/2 h-[400px]">
          <div>
            <img
              className="w-full h-[400px] -z-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
              src={Marketing}
              alt=""
            />

            <h1 className="absolute top-[600px] left-[10%] text-white font-bold text-5xl text-center font-serif z-10 ">
              Vezos Marketing
            </h1>
          </div>
        </Link>
        <Link to="/vezosmedia" className="w-1/2 h-[400px]">
          <div className="">
            <img
              className="w-full h-[400px] -z-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
              src={vezosMedia}
              alt="vezosMedia"
            />
            <h1 className="absolute top-[600px] left-[65%] text-white font-bold text-5xl text-center font-serif z-10 ">
              Vezos Media
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServicesPage;
