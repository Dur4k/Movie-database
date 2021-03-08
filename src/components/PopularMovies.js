import React from "react";
import MovieCard from "./MovieCard";

const PopularMovies = () => {
  return (
    <div className=" mb-10 mt-5	">
      <div className="mt-3 text-center   ">
        <div className="font-rubik font-light italic -mb-1  self-center	 text-2xl ">Top Rated</div>
        <div className="font-mukta font-bold">movies</div>
        <movieCardDiv className=" p-8 mt-20 md:ml-0  md:gap-x-1 xl:ml-10  gap-y-8 place-items-auto   grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5   self-center       justify-items-center     ">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </movieCardDiv>
      </div>
    </div>
  );
};

export default PopularMovies;
