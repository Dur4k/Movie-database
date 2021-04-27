import React from "react";
import { useFetchingUrl, useFetchingUrl1, useFetchingUrl2 } from "../api/fetching";
import ActorCard from "./ActorCard";
import MovieCard from "./MovieCard";
import { style_percentige, calc_color } from "../components/MovieCard.js";
import { Link } from "react-router-dom";
import { filterThumbnails } from "./functions";
import { Checkiftv } from "../api/mapingForm";
import img1 from "../img/pic2.png";

const MovieDetail = ({ match }) => {
  const similarUrl = `https://api.themoviedb.org/3/${Checkiftv(match)}/${
    match.params.id
  }/similar?api_key=a6cf54bca5a91f9a22017d7d14ad617a&language=en-US&page=1`;
  const actorsUrl = `https://api.themoviedb.org/3/${Checkiftv(match)}/${
    match.params.id
  }/credits?api_key=a6cf54bca5a91f9a22017d7d14ad617a&language=en-US`;
  const movieDetailUrl = `https://api.themoviedb.org/3/${Checkiftv(match)}/${
    match.params.id
  }?api_key=a6cf54bca5a91f9a22017d7d14ad617a&language=en-US`;
  const { object1 } = useFetchingUrl1(actorsUrl);
  const { object } = useFetchingUrl(movieDetailUrl);
  const { object2 } = useFetchingUrl2(similarUrl);
  const roundRating = object.vote_average < 10 ? object.vote_average * 10 : null;
  const rating_percentige = (roundRating + "").replace(".", "");
  const checkActorAvatar = object1.filter((i) => i.profile_path);
  const checkposter = object.poster_path ? "https://www.themoviedb.org/t/p/w1280/" + object.poster_path : img1;

  return (
    <div className=" mb-10	">
      {/* picture---------------------------------------------------------------*/}
      <div className="mt-14 flex flex-col  sm:flex-row xl:bg-cover ml-0 mt-15  content-center items-center justify-center xl:content-around  xl:ml-7 ">
        <div className=" sm:m-10 flex-none  ">
          <img
            className="h-md  w-80 sm-lg shadow-2xl xl:w-80 xl:h-lg overflow-hidden rounded-xl bg-cover object-cover flex-none"
            src={checkposter}
            alt=""
          />
        </div>
        {/* picture--------------------------------------------------------------*/}
        {/* info ---------------------------------------------------------------- */}
        <div className="p-4 sm:p-0 mt-12 ">
          <div className="flex xl:flex-row xl:self-end flex-col">
            <div className="font-mukta text-4xl font-bold ">{object.title ? object.title : object.name}</div>
            <div className=" font-baloo   xl:px-8 xl:self-end mt-3  text-gray-700  ">{object.tagline}</div>
          </div>
          {object.runtime ? (
            <div className="flex-row flex font-jura space-x-6 py-3 text-gray-700">
              <div>{object.runtime}min</div>
              <div>{object.release_date}</div>
              <div>EN</div>
            </div>
          ) : (
            <div className="flex-row flex font-jura space-x-6 py-3 text-gray-700">
              <div>{object.number_of_seasons} seasons</div>
              <div>{object.number_of_episodes} episodes</div>
            </div>
          )}
          <div className="">
            <div className="medium-header  ">Rating</div>
            <div className="  bottom-0 left-10  ">
              <div className=" flex-col     bottom-0 -left-6  ">
                <div className=" overflow-hidden mt-3 ml-10 h-4 mb-4 sm:w-6/12 w-9/12 text-xs flex rounded bg-gray-200">
                  <div
                    style={style_percentige(rating_percentige)}
                    className={` place-items-center   justify-center items-center shadow-none flex flex-col text-center whitespace-nowrap text-white  ${calc_color(
                      rating_percentige
                    )}`}
                  >
                    {rating_percentige === 0 ? "No Rating Yet" : rating_percentige + "%"}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <genres>
            <div className="medium-header">Genres</div>
            {object.genres &&
              object.genres.map((i) => (
                <a href={`${match.path === "/tv/:id/" ? "/tv" : ""}/gendre/${i.id}/`}>
                  <button key={i.id} genre_id={i.id} className=" button-tag ">
                    {i.name}
                  </button>
                </a>
              ))}
          </genres>
          <overview className="flex flex-col  sm:mr-10 mt-10 ">
            <div className="font-mukta font-medium text-lg mb-1">Overview</div>
            <p className="text-justify sm:text-left text-gray-600 ">{object.overview}</p>
          </overview>
        </div>
        {/* info ---------------------------------------------------------------- */}
      </div>
      <div className=" flex flex-col  mx-2 sm:mx-16 sm:pb-5  ">
        <div className="medium-header  ">Cast</div>
        <div className="flex flex-row space-x-3 overflow-x-auto h-64 sm:ml-4 ">
          {/* card-------------- */}
          {checkActorAvatar.map((i, index) => (
            <Link to={`/actor/${i.id}`}>
              <ActorCard key={i.id} probs={i} />
            </Link>
          ))}

          {/* card-------------- */}
        </div>
      </div>
      {/* SIMILAR MOVIES */}
      <div className="flex flex-col 	 w-auto  ">
        <div className="mt-3 mb-10 text-center">
          <div className="font-rubik font-light italic -mb-1	 text-2xl ">Related</div>
          <div className="font-mukta font-bold">movies</div>
        </div>
        {/* card */}
        <div className="grid-cols-2 gap-x-0  md:ml-0  md:gap-x-4 xl:ml-10 xl:gap-x-1 gap-y-5 place-items-auto   grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4    self-center       justify-items-center     ">
          {filterThumbnails(object2).map((i) => (
            <a href={`/${Checkiftv(match)}/${i.id}`}>
              <MovieCard key={i.id} data_info={i} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
