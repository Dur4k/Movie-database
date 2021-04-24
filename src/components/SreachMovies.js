import React from "react";
import MovieCard from "./MovieCard";
import img2 from "../img/k3.png";

// {i.media_type === "movie" ? href={`/movie/${i.id}`} :return href={`/movie/${i.id}`}}
const SreachMovies = ({ movieSreach }) => {
  const MovieCard_map = movieSreach.map((i, index) => (
    <a href={`/${i.media_type}/${i.id}`}>
      <MovieCard key={index.id} data_info={i} />
    </a>
  ));
  if (movieSreach.length === 0) {
    return (
      <div className="fixed left-1/4 top-2/4 lg:left-1/3 lg:top-1/4 ">
        <div className="w-10/12   ">
          <img alt="img" className="" src={img2} />
        </div>
      </div>
    );
  }
  return (
    <div className=" mb-10 mt-5 flex justify-self-center content-center self-center place-content-center items-center justify-center    justify-items-center	">
      <div className="mt-3 text-center   ">
        <div className="font-rubik font-light italic -mb-1 mt-8 sm:m-0 self-center	 text-2xl ">Search</div>
        <div className="font-mukta -mb-10  sm:mb-0 font-bold"></div>
        <div className="  sm:p-8 mt-20 md:ml-0  md:gap-x-1 xl:ml-10  gap-y-8 place-items-auto   grid grid-cols-2  sm:grid-cols-3 xl:grid-cols-4    self-center       justify-items-center     ">
          {MovieCard_map}
        </div>
      </div>
    </div>
  );
};

export default SreachMovies;
