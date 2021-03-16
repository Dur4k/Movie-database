import React, { useRef, useState } from "react";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";

import SidebarButton from "./components/Sidebar-button";
import { ReactComponent as Svg } from "./img/Screenshot 2021-03-03 at 16.52 1.svg";
import { useOutsideAlerter } from "./components/CloseSidebar.js";
import MainContent from "./components/MainContent";
import { fetchGenres } from "./api/api_components";
import { useFetchingUrl3 } from "./api/fetching";
const App = () => {
  const gendres = `https://api.themoviedb.org/3/genre/movie/list?api_key=a6cf54bca5a91f9a22017d7d14ad617a&language=en-UShttps://`;

  const { object3 } = useFetchingUrl3(gendres);
  const [active, setActive] = useState(true);

  // CloseSidebar when you click outside
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setActive);

  return (
    <div className="flex flex-row  w-full h-full min-h-screen  items-start ">
      <StickyBox className="z-40">
        <div
          class={`${
            active ? "invisible" : null
          } fixed   flex-none overflow-y-scroll h-full  bg-black bg-opacity-25 w-full lg:bg-white lg:static  sm:overflow-y-visible lg:pt-0 lg:w-72 xl:w-72 lg:visible`}
        >
          <div
            ref={wrapperRef}
            id="navWrapper"
            class="h-full   overflow-y-scroll   scrolling-touch lg:h-auto lg:block   overflow-hidden  bg-white w-72 "
          >
            <SidebarButton class="visible" active={active} setActive={setActive} />
            <div class="  hidden lg:block h-full overflow-y-scroll pointer-events-none   z-10 bg-gradient-to-b from-white"></div>
            <nav
              id="nav"
              class="w-72  flex-none  flex flex-col border-r-2 border-gray-100 py-10   h-full  px-1 pt-6 overflow-y-auto font-medium text-base   pb-10  "
            >
              <picture className="flex flex-col center items-center mb-16">
                <Svg />
              </picture>

              <film className="flex flex-none flex-col w-30 h-60 text-center ">
                <div className="font-rubik font-medium text-2xl mb-5">Film</div>

                <div className="font-mukta flex-none text-lg space-y-0 px-7 flex flex-col ">
                  <Link className="button-phill" to={"/movie/"}>
                    Popular
                  </Link>
                  <Link className="button-phill" to={"/movie/NowPlaying"}>
                    Now Playing
                  </Link>
                  <Link className="button-phill" to={"/movie/Upcoming"}>
                    Upcoming
                  </Link>
                  <Link className="button-phill" to={"/movie/TopRated"}>
                    Top Rated
                  </Link>
                </div>
              </film>
              <filmTags className="flex flex-none  flex-wrap w-auto h-30 text-center font-mukta  justify-center items-center ml-1">
                <div className=" flex   flex-wrap  ">
                  {object3.map((i) => (
                    <a href={`/gendre/${i.id}`}>
                      <button genre_id={i.id} className=" button-tag ">
                        {i.name}
                      </button>
                    </a>
                  ))}
                </div>
              </filmTags>
              <tvShows className="flex flex-none flex-col w-30 h-80  text-center pt-12">
                <div className="font-rubik font-medium text-2xl mb-5">TV Shows</div>
                <div className="font-mukta text-lg space-y-0 px-7 flex flex-col">
                  <Link to={"/tv/TvPopular"} className="button-phill">
                    Popular
                  </Link>
                  <Link to={"/tv/TvLatest"} className="button-phill">
                    Latest
                  </Link>
                  <Link to={"/tv/TvTopRated"} className="button-phill">
                    Top Rated
                  </Link>
                </div>
              </tvShows>
            </nav>
          </div>
        </div>
      </StickyBox>

      <content className="     overflow-y-auto flex flex-col   static  lg:max-h-full  max-h-screen w-full  ">
        <MainContent />
        {/* <MovieDetail /> */}
        {/* <PopularMovies popular={popularMovies} /> */}
        {/* <NowPlaying />
        <Upcoming />
        <TopRated /> */}
        {/* <ActorDetail /> */}
      </content>
    </div>
  );
};

export default App;
