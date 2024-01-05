import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const MarketingHeader = () => {
  return (
    <div className="z-50 w-full px-10 bg-white text-purple-800 flex justify-between shadow-xl fixed">
      <h1 className="font-medium text-4xl py-8  pl-20  font-sans">
        VEZOS DIGITALS
      </h1>
      <div className=" pt-9 cursor-pointer">
        <MenuIcon />
      </div>
    </div>
  );
};

export default MarketingHeader;
