import React, { useState } from "react";
import ActorDetail from "./components/ActorDetail";
import MovieDetail from "./components/MovieDetail";
import PopularMovies from "./components/PopularMovies";
import { ReactComponent as Svg } from "./img/Screenshot 2021-03-03 at 16.52 1.svg";
const App = () => {
  const [heading, setHeading] = useState("Popular");
  return (
    <div className="flex flex-row  w-full h-full min-h-screen ">
      <sidebar className="w-72 flex-none  flex flex-col border-r-2 border-gray-100 py-10 ">
        <picture className="flex flex-col center items-center mb-16">
          <Svg />
        </picture>
        <film className="flex flex-none flex-col w-30 h-60 text-center ">
          <div className="font-rubik font-medium text-2xl mb-5">Film</div>

          <div className="font-mukta flex-none text-lg space-y-0 px-7 flex flex-col ">
            <button className="button-phill  ">Popular</button>
            <button className="button-phill">Now Playing</button>
            <button className="button-phill">Upcoming</button>
            <button className="button-phill">Top Rated</button>
          </div>
        </film>
        <filmTags className="flex flex-none  flex-wrap w-auto h-30 text-center font-mukta  justify-center items-center ml-2">
          <div className=" flex   flex-wrap  ">
            <button className="button-tag ">drama</button>
            <button className="button-tag">western</button>
            <button className="button-tag ">documentary</button>
            <button className="button-tag">advanture</button>
            <button className="button-tag">romance</button>
            <button className="button-tag ">sci-fi</button>
            <button className="button-tag">advanture</button>
            <button className="button-tag ">sci-fi</button>
            <button className="button-tag ">sci-fi</button>
            <button className="button-tag ">sci-fi</button>
            <button className="button-tag ">sci-fi</button>
            <button className="button-tag ">sci-fi</button>
          </div>
        </filmTags>
        <tvShows className="flex flex-none flex-col w-30 h-80  text-center pt-12">
          <div className="font-rubik font-medium text-2xl mb-5">TV Shows</div>
          <div className="font-mukta text-lg space-y-0 px-7 flex flex-col">
            <button className="button-phill">Popular</button>
            <button className="button-phill">On Tv</button>
            <button className="button-phill">Top Rated</button>
          </div>
        </tvShows>
      </sidebar>
      <content className="  w-3/4  max-w-screen-xl   flex flex-col   ">
        {/* <MovieDetail /> */}
        {/* <PopularMovies /> */}
        <ActorDetail />
      </content>
    </div>
  );
};

export default App;
