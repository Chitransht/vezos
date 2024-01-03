import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <div className=" w-full px-10 bg-purple-700 text-white flex justify-between shadow-xl fixed">
      <h1 className="font-bold text-4xl py-8  pl-20  font-serif">VEZOS DIGITALS</h1>
      <div className=" pt-9 cursor-pointer">
        <MenuIcon />
      </div>
    </div>
  );
};

export default Header;
