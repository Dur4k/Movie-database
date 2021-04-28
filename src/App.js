import React, { useRef, useState, useEffect } from "react";
import StickyBox from "react-sticky-box";
import { Link, useLocation } from "react-router-dom";
import SidebarButton from "./components/Sidebar-button";
import { ReactComponent as Svg } from "./img/Screenshot 2021-03-03 at 16.52 1.svg";
import { useOutsideAlerter } from "./components/CloseSidebar.js";
import MainContent from "./components/MainContent";
import { useFetchingUrl3 } from "./api/fetching";
import axios from "axios";
import SreachBar from "./components/sreachbar";
import writing from "./img/sign.png";
const App = () => {
  const gendres = `https://api.themoviedb.org/3/genre/movie/list?api_key=a6cf54bca5a91f9a22017d7d14ad617a&language=en-UShttps://`;
  const sreachToken = "https://api.themoviedb.org/3/search/multi?api_key=a6cf54bca5a91f9a22017d7d14ad617a&language=en-US&include_adult=false";
  const { object3 } = useFetchingUrl3(gendres);
  const [active, setActive] = useState(true);
  const [movieSreach, setMovieSreach] = useState([]);
  const [page, setPage] = useState(1);
  const [numbOfPages, setNumbOfPages] = useState();
  const [imp, setimp] = useState();
  const location = useLocation();
  console.log(location);
  // CloseSidebar when you click outside
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setActive);

  //getting sreach result
  const onSreachUserInput = async (userInput) => {
    try {
      const { data } = await axios.get(sreachToken, {
        params: {
          query: userInput,
          page: page,
        },
      });
      const modifiedData = data.results.filter((row) => row.media_type === "movie" || row.media_type === "tv");
      setNumbOfPages(data.total_pages);
      setMovieSreach(modifiedData);
      setimp(userInput);

      return imp === userInput ? null : setPage(1);
    } catch (error) {}
  };
  useEffect(() => {
    onSreachUserInput("i ");
  }, []);
  useEffect(() => {
    onSreachUserInput(imp);
  }, [page, imp]);

  return (
    <div className="flex flex-row overflow-hidden lg:overflow-visible  w-full    items-start ">
      <StickyBox className="z-40 ">
        <div
          className={`${
            active ? "invisible" : null
          } fixed   flex-none overflow-y-scroll h-full  bg-black bg-opacity-25 w-full lg:bg-white lg:static  sm:overflow-y-visible lg:pt-0 lg:w-72 xl:w-72 lg:visible`}
        >
          <div
            ref={wrapperRef}
            id="navWrapper"
            className="h-full   overflow-y-scroll   scrolling-touch lg:h-auto lg:block   overflow-hidden  bg-white w-72 "
          >
            <SidebarButton className="visible" active={active} setActive={setActive} />
            <div className="  hidden lg:block h-full overflow-y-scroll pointer-events-none   z-10 bg-gradient-to-b from-white"></div>
            <nav
              id="nav"
              className="w-72  flex-none  flex flex-col border-r-2 border-gray-100 py-10   h-full  px-1 pt-6 overflow-y-auto font-medium text-base   pb-10  "
            >
              <picture className="flex flex-col center items-center mb-16">
                <a href="/movie/">
                  <Svg />
                </a>
              </picture>

              <div className="sm:mt-0 mt-36 flex flex-none flex-col w-30 h-60 text-center ">
                <div className="font-rubik font-medium text-2xl mb-5">Film</div>

                <div className="font-mukta flex-none text-lg space-y-0 px-7 flex flex-col ">
                  <Link className="button-phill" to={"/movie/Popular"}>
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
              </div>
              <div className="flex flex-none  flex-wrap w-auto h-30 text-center font-mukta  justify-center items-center ml-1">
                <div className=" flex   flex-wrap  ">
                  {object3.map((i) => (
                    <a href={`/gendre/${i.id}`}>
                      <button key={i.id} genre_id={i.id} className=" button-tag ">
                        {i.name}
                      </button>
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex flex-none flex-col w-30 h-80  text-center pt-12">
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
              </div>
              <a href="https://www.facebook.com/jdurcak">
                <div className="w-28 ml-20 opacity-30">
                  <img src={writing} />
                </div>
              </a>
            </nav>
          </div>
        </div>
      </StickyBox>
      <div className="overflow-y-auto  flex flex-col   static  lg:max-h-full  w-1280   ">
        <SreachBar onSreachUserInput={onSreachUserInput} />

        <MainContent movieSreach={movieSreach} class=" relative" page={page} setPage={setPage} numbOfPages={numbOfPages} />
      </div>
    </div>
  );
};

export default App;
