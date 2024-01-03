import React from "react";
import TeamMember from "./TeamMember";
import { member } from "../../data/Data";

const Teams = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center py-16">
          <h1 className="text-5xl font-bold text-purple-700">
            Our Team of Experts
          </h1>
        </div>
      </div>
      <div className="flex justify-evenly">
        {member.map((member, i) => (
          <TeamMember key={i} member={member} />
        ))}
      </div>
    </>
  );
};

export default Teams;
