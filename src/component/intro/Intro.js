import React from "react";
import Service from "./Service";
import SubIntro from "./SubIntro";
import MainIntro from "./MainIntro";
import SubIntro1 from "./SubIntro1";
import Teams from "../teams/Teams";
import Footer from "../footer/Footer";

const Intro = () => {
  return (
    <>
      <MainIntro />
      <Service />
      <SubIntro />
      <SubIntro1 />
      <Teams />
      <Footer />
    </>
  );
};

export default Intro;
