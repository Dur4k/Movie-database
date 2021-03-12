import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieElement = ({ data_info, title }) => {
  const MovieCard_map = data_info.map((i) => (
    <Link to={`NowPlaying/${i.id}`}>
      <MovieCard key={i.id} data_info={i} />
    </Link>
  ));
  return (
    <div className=" mb-10 mt-5 flex justify-self-center content-center self-center place-content-center items-center justify-center    justify-items-center	">
      <div className="mt-3 text-center   ">
        <div className="font-rubik font-light italic -mb-1  self-center	 text-2xl ">{title}</div>
        <div className="font-mukta font-bold">movies</div>
        <div className="  p-8 mt-20 md:ml-0  md:gap-x-1 xl:ml-10  gap-y-8 place-items-auto   grid grid-cols-2  sm:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5   self-center       justify-items-center     ">
          {MovieCard_map}
        </div>
      </div>
    </div>
  );
};

export default MovieElement;
