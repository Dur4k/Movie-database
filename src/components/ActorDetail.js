import React from "react";
import { Link } from "react-router-dom";
import { useFetchingUrl, useFetchingUrl1 } from "../api/fetching";
import { filterThumbnails } from "./functions";
import MovieCard from "./MovieCard";

const ActorDetail = ({ match }) => {
  const actorsDetailUrl = `https://api.themoviedb.org/3/person/${match.params.id}?api_key=a6cf54bca5a91f9a22017d7d14ad617a&language=en-US`;
  const actorCreditsUrl = `https://api.themoviedb.org/3/person/${match.params.id}/movie_credits?api_key=a6cf54bca5a91f9a22017d7d14ad617a&language=en-US`;
  const { object } = useFetchingUrl(actorsDetailUrl);
  const { object1 } = useFetchingUrl1(actorCreditsUrl);

  const filterDates = object1.filter((movie) => {
    return movie.release_date;
  });

  const MovieYearsFromUp = filterDates.sort(function (a, b) {
    return b.release_date.substring(0, 4) - a.release_date.substring(0, 4);
  });
  const popularityUp = object1.sort(function (a, b) {
    return b.popularity - a.popularity;
  });
  // const noThumbnail = popularityUp.filter((i) => {
  //   return i.poster_path !== null;
  // });

  return (
    <div className=" mb-10 mt-14	">
      {/* picture---------------------------------------------------------------*/}
      <div className="flex flex-row xl:bg-cover ml-0 mt-15  xl:content-around  xl:ml-7 ">
        <div className="m-10 flex-none  ">
          <img
            className=" h-96 shadow-2xl xl:w-62 xl:h-lg overflow-hidden rounded-xl bg-cover object-cover flex-none "
            src={"https://image.tmdb.org/t/p/w780/" + object.profile_path}
            alt=""
          />
        </div>
        {/* picture--------------------------------------------------------------*/}
        {/* info ---------------------------------------------------------------- */}
        <div className="mt-12 ">
          <div className="flex xl:flex-row xl:self-end flex-col">
            <div className="font-mukta text-4xl font-bold ">{object.name}</div>
          </div>
          <div className="flex-col flex font-jura  py-3 text-gray-700">
            <div>
              {object.birthday}
              {object.deathday ? " - " + object.deathday : null}{" "}
            </div>
          </div>
          <div className="">
            {/* <div className="relative pt-3 ml-7 w-6/12  "> */}
            <div className="text-gray-600 ">{object.place_of_birth}</div>
          </div>

          <div className="flex flex-col  mr-10 mt-10 ">
            <div className="font-mukta font-medium text-lg mb-1">Overview</div>
            <p className="text-left text-gray-600    ">{object.biography}</p>
          </div>
        </div>
        {/* info ---------------------------------------------------------------- */}
      </div>

      {/* SIMILAR MOVIES */}
      <div className="mt-3 mb-10 text-center">
        <div className="font-rubik font-light italic 	 text-2xl ">Acting</div>
        <div className="bg-gray-100 flex flex-col  mx-2.5  xl:mx-52 lg:mx-24 md:mx-28 sm:mx-10 rounded-xl mt-10 shadow-xl p-4  ">
          {MovieYearsFromUp.map((i) => (
            <div className=" border-fuchsia-600 flex flex-row  space-x-2 lg:ml-4   ">
              <div className=" w-10 mr-2 ">{i.release_date.substring(0, 4)}</div>
              <i className="fas  fa-ellipsis-h flex items-center  "></i>
              <div className="   flex text-justify break-all">
                <Link className="ml-3 font-medium" to={`/movie/${i.id}`}>
                  {i.title}
                </Link>
                <div className=" mx-1 font-extralight"> as</div> <div className="font-light">{i.character}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col 	 w-auto  ">
        <div className="mt-3 mb-10 text-center">
          <div className="font-rubik font-light italic mb-6 text-2xl ">Seen in</div>
          {/* <div className="font-mukta font-bold">in</div> */}
        </div>
        {/* card */}
        <div className="  md:ml-0  md:gap-x-4 xl:ml-10 xl:gap-x-6 gap-y-5 place-items-auto   grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5   self-center       justify-items-center     ">
          {filterThumbnails(popularityUp).map((i) => (
            <a href={`/movie/${i.id}`}>
              <MovieCard key={i.id} data_info={i} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActorDetail;
