import React from "react";

const TeamMember = (member) => {
  console.log(member.member);
  const { img, name, post, intro } = member.member;
  console.log(name);
  return (
    <div className="w-[300px] my-10">
      <div className="">
        <img className="rounded-t-3xl " src={img} alt="" />
      </div>
      <div className="shadow-2xl p-2 font-serif  rounded-2xl">
        <h1 className="font-bold text-3xl text-purple-700  text-center pt-3">
          {name}
        </h1>
        <h2 className="text-2xl text-purple-700  text-center py-3">{post}</h2>
        <p className="text-xl text-wrap text-center py-3">{intro}</p>
      </div>
    </div>
  );
};

export default TeamMember;
