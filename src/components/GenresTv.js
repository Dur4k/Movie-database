import React from "react";
import MovieCard from "./MovieCard";
import { useFetchingUrl2 } from "../api/fetching";
import { MatchIdNames, gendresId } from "../api/mapingForm";

const GenresTv = ({ match }) => {
  const genresSreachUrl = `https://api.themoviedb.org/3/discover/tv?api_key=a6cf54bca5a91f9a22017d7d14ad617a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${match.params.id}`;
  const { object2, loading2 } = useFetchingUrl2(genresSreachUrl);
  var result = MatchIdNames(gendresId, match.params.id);
  return (
    <div className=" mb-10 mt-5 flex justify-self-center content-center self-center place-content-center items-center justify-center    justify-items-center	">
      <div className="mt-3 text-center   ">
        <div className="font-rubik font-light italic -mb-1  self-center	 text-2xl ">{result.name}</div>
        <div className="font-mukta font-bold">in TV genres</div>
        <div className="  p-8 mt-20 md:ml-0  md:gap-x-1 xl:ml-10  gap-y-8 place-items-auto   grid grid-cols-2  sm:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5   self-center       justify-items-center     ">
          {object2.map((i) => (
            <a href={`/tv/${i.id}`}>
              <MovieCard key={i.id} data_info={i} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenresTv;
