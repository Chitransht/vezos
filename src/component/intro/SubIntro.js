import React from "react";

const SubIntro = () => {
  return (
    <div className="my-24 h-[550px] ml-20 flex">
      <div className=" p-16  w-1/2">
        <h1 className="font-bold text-4xl pb-5 font-serif text-purple-700">
          Leading Our Way Towards Digital World
        </h1>
        <p className="font-sans pb-10 text-xl font-semibold text-balance ">
          We will help you with all our digital services and will give our best
          results in your online project or business. We help people in
          <span className="text-purple-700"> executing their ideas</span> and
          also help them in growing it .We help poeple in standing out from
          their competition , maximizing their reach , creating brand awareness
          ,helping with digital and social media marketing with our{" "}
          <span className="text-purple-700">
            unique brand building stratergy
          </span>
          . We love working with our clients and completing their projects. We
          lead people in their digital journey and always helping them in
          building their dream.{" "}
          <span className="text-purple-700">We are always in motion</span> and
          love assisting people all the time with our amazing skilled members.
          <span className="text-purple-700">
            {" "}
            So, what are you waiting for? Take a look at our offerings!
          </span>
        </p>
      </div>

      <div className="flex justify-center  ">
        <img
          className=""
          src="https://vezosdigitals.netlify.app/img.png"
          alt="img"
        />
      </div>
    </div>
  );
};

export default SubIntro;
