import React from "react";
import MovieCard from "./MovieCard";

const MovieElement = ({ data_info, title, subTitle }) => {
  const MovieCard_map = data_info.map((i) => (
    <a href={`${i.id}`}>
      <MovieCard key={i.id} data_info={i} />
    </a>
  ));
  return (
    <div className=" mb-10 mt-5 flex justify-self-center content-center self-center place-content-center items-center justify-center    justify-items-center	">
      <div className="mt-3 text-center   ">
        <div className="font-rubik font-light italic -mb-1 mt-8 sm:m-0 self-center	 text-2xl ">{title}</div>
        <div className="font-mukta -mb-10  sm:mb-0 font-bold">{subTitle}</div>
        <div className=" sm:p-8 mt-20 md:ml-0  md:gap-x-1 xl:ml-10  gap-y-8 place-items-auto   grid grid-cols-2  sm:grid-cols-3 xl:grid-cols-4     self-center       justify-items-center     ">
          {MovieCard_map}
        </div>
      </div>
    </div>
  );
};

export default MovieElement;
