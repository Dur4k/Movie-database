import React from "react";
import { useFetchingUrl } from "../api/fetching";
import ActorCard from "./ActorCard";
import MovieCard from "./MovieCard";

const MovieDetail = ({ match }) => {
  const { data, loading } = useFetchingUrl(
    `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=a6cf54bca5a91f9a22017d7d14ad617a&language=en-US`
  );

  return (
    <div className=" mb-10	">
      {/* picture---------------------------------------------------------------*/}
      <topColumn className="flex flex-row xl:bg-cover ml-0 mt-16  xl:content-around  xl:ml-7 ">
        <div className="m-10 flex-none  ">
          <img
            className=" h-96 shadow-2xl xl:w-62 xl:h-lg overflow-hidden rounded-xl bg-cover object-cover flex-none "
            src="https://image.tmdb.org/t/p/w780/6KErczPBROQty7QoIsaa6wJYXZi.jpg"
            alt=""
          />
        </div>
        {/* picture--------------------------------------------------------------*/}
        {/* info ---------------------------------------------------------------- */}
        <div className="mt-12 ">
          <headTitle className="flex xl:flex-row xl:self-end flex-col">
            <div className="font-mukta text-4xl font-bold ">ddd</div>
            <div className=" font-baloo   xl:px-8 xl:self-end mt-3  text-gray-700  ">best and worsddssdfdsfdsfsdt</div>
          </headTitle>
          <info className="flex-row flex font-jura space-x-6 py-3 text-gray-700">
            <div>1h 45min</div>
            <div>2021</div>
            <div>Eng</div>
          </info>
          <ratingT className="">
            <div className="medium-header ">Rating</div>
            <div className="relative pt-3 ml-7 w-6/12  ">
              <div className="overflow-hidden h-4 mb-4  text-xs flex rounded bg-gray-300 shadow-md  ">
                <div style={{ width: "77%" }} class=" flex flex-col text-center whitespace-nowrap text-white justify-center bg-black shadow-md">
                  77%
                </div>
              </div>
            </div>
          </ratingT>
          <genres>
            <div className="medium-header">Genres</div>
            <button className=" button-tag ">drama</button>
            <button className="button-tag">western</button>
            <button className="button-tag ">documentary</button>
            <button className="button-tag">advanture</button>
          </genres>
          <overview className="flex flex-col  mr-10 mt-10 ">
            <div className="font-mukta font-medium text-lg mb-1">Overview</div>
            <p className="text-left text-gray-600 ">
              ...best anverry moves into New York City's finest hotel on the eve of the wedding of the century, forcing the desperate event planner to
              hire Tom to get rid of him. As mayhem ensues, the escalating cat-and-mouse battle soon threatens to destroy her career, the wedding, and
              possibly the hotel itself. friends
            </p>
          </overview>
        </div>
        {/* info ---------------------------------------------------------------- */}
      </topColumn>
      <casT className=" flex flex-col mx-16 pb-5  ">
        <div className="medium-header  ">Cast</div>
        <div className="flex flex-row space-x-3 overflow-x-auto h-64 ml-4 ">
          {/* card-------------- */}

          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />

          {/* card-------------- */}
        </div>
      </casT>
      {/* SIMILAR MOVIES */}

      <div className="flex flex-col 	 w-auto  ">
        <div className="mt-3 mb-10 text-center">
          <div className="font-rubik font-light italic -mb-1	 text-2xl ">Related</div>
          <div className="font-mukta font-bold">movies</div>
        </div>
        {/* card */}
        <movieCardDiv className="  md:ml-5    md:gap-x-1 xl:ml-10 gap-x-20 gap-y-20 place-items-auto   grid sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5   self-center       justify-items-center     ">
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

export default MovieDetail;
