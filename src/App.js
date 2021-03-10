import React, { useState } from "react";
import StickyBox from "react-sticky-box";
import ActorDetail from "./components/ActorDetail";
import MovieDetail from "./components/MovieDetail";
import PopularMovies from "./components/PopularMovies";
import Sidebar_button from "./components/Sidebar-button";
import { ReactComponent as Svg } from "./img/Screenshot 2021-03-03 at 16.52 1.svg";
const App = () => {
  const [heading, setHeading] = useState("Popular");
  const [active, setActive] = useState(true);
  return (
    <div className="flex flex-row  w-full h-full min-h-screen  items-start ">
      <Sidebar_button active={active} setActive={setActive} />
      <StickyBox>
        <div
          class={`${
            active ? "hidden" : ""
          } fixed z-40 flex-none overflow-y-scroll h-full bg-black bg-opacity-25 w-full lg:bg-white lg:static  sm:overflow-y-visible lg:pt-0 lg:w-72 xl:w-72 lg:block`}
        >
          <div id="navWrapper" class="h-full  overflow-y-scroll  scrolling-touch lg:h-auto lg:block   overflow-hidden  bg-white w-72 ">
            <div class=" hidden lg:block h-full overflow-y-scroll pointer-events-none   z-10 bg-gradient-to-b from-white"></div>
            <nav
              id="nav"
              class="w-72 flex-none  flex flex-col border-r-2 border-gray-100 py-10   h-full  px-1 pt-6 overflow-y-auto font-medium text-base   pb-10  "
            >
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
              <filmTags className="flex flex-none  flex-wrap w-auto h-30 text-center font-mukta  justify-center items-center ml-1">
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
            </nav>
          </div>
        </div>
      </StickyBox>
      <content className="     overflow-y-auto flex flex-col   static  lg:max-h-full  max-h-screen w-full  ">
        <MovieDetail />
        {/* <PopularMovies className="" /> */}
        {/* <ActorDetail /> */}
      </content>
    </div>
  );
};

export default App;
