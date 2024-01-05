import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-purple-900 h-[370px] w-full p-5 text-white">
      <div className=" flex justify-between  h-full w-full p-5">
        <div className="h-full w-64 p-5">
          <h1 className="font-bold py-4 text-2xl">VEZOS DIGITALS</h1>
          <p className="py-2">Mango , Azadnagar Jamshedpur , Jharkhand India</p>
          <p className="py-2">Phone: +91 62073 98003</p>
          <p className="py-2">Email: vezosdigitals@gmail.com</p>
        </div>
        <div className="h-full w-56 p-5">
          <h1 className="font-bold py-4 text-2xl">Useful Links</h1>
          <p className="py-2 text-lg">Home</p>
          <p className="py-2 text-lg">Services</p>
          <p className="py-2 text-lg">Service Form</p>
        </div>
        <div className=" h-full w-56 p-5">
          <h1 className="font-bold py-4 text-2xl">Services</h1>
          <Link to="/vezosWeb">
            <p className="py-2 cursor-pointer">Web Development</p>
          </Link>
          <Link to="/vezosmedia">
            <p className="py-2 cursor-pointer">
              Social Media account Management
            </p>
          </Link>
          <Link to="/vezosedit">
            <p className="py-2 cursor-pointer">
              Photos & Videos editting / Graphic Designs
            </p>
          </Link>
          <Link to="/vezosemarket">
            <p className="py-2 cursor-pointer">Digital Marketing</p>
          </Link>
        </div>
        <div className=" h-full w-72 p-5">
          <h1 className="font-bold py-4 text-2xl">Our Media Accounts</h1>
          <p className="py-2 text-lg">
            Follow us on social media for daily updates and informations
          </p>
          <div className="flex justify-between  mt-5">
            <YouTubeIcon className="cursor-pointer  hover:text-red-600" />
            <InstagramIcon className="cursor-pointer hover:text-red-600 " />
            <FacebookIcon className="cursor-pointer hover:text-blue-600" />
            <LinkedInIcon className="cursor-pointer hover:text-blue-600" />
            <TwitterIcon className="cursor-pointer hover:text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
