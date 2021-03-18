import React from "react";

const ActorCard = ({ probs }) => {
  return (
    <div className="actor-card ">
      <div className="object-cover overflow-hidden   ">
        <img className="rounded-2xl  overflow-hidden flex-none " src={"https://image.tmdb.org/t/p/w780/" + probs.profile_path} alt="" />
      </div>
      <div className="flex flex-col  text-center py-2 overflow-hidden flex-none h-14">
        <div className="text-sm font-medium mb-1  leading-3">{probs.name} </div>
        <div className="text-sm font-baloo leading-4 font-extralight">{probs.character}</div>
      </div>
    </div>
  );
};

export default ActorCard;
