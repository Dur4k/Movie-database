import React from "react";

const ActorCard = () => {
  return (
    <div className="actor-card ">
      <div className="object-cover overflow-hidden   ">
        <img className="rounded-2xl  overflow-hidden flex-none " src="https://image.tmdb.org/t/p/w780/zmxUSYlVYflaNl5Ft2b7ayoFvA0.jpg" alt="" />
      </div>
      <div className="flex flex-col  text-center py-2 overflow-hidden flex-none h-14">
        <div className="text-sm font-medium leading-3">Scarlet Johannes thor </div>
        <div className="text-sm font-baloo font-extralight">Baker Lily doiil</div>
      </div>
    </div>
  );
};

export default ActorCard;
