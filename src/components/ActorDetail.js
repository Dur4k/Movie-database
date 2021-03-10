import React from "react";
import MovieCard from "./MovieCard";

const ActorDetail = () => {
  return (
    <div className=" mb-10 mt-14	">
      {/* picture---------------------------------------------------------------*/}
      <topColumn className="flex flex-row xl:bg-cover ml-0 mt-15  xl:content-around  xl:ml-7 ">
        <div className="m-10 flex-none  ">
          <img
            className=" h-96 shadow-2xl xl:w-62 xl:h-lg overflow-hidden rounded-xl bg-cover object-cover flex-none "
            src="https://image.tmdb.org/t/p/w780/gDMgBz8Kc1E2A8f1t4fMVoiYcpB.jpg"
            alt=""
          />
        </div>
        {/* picture--------------------------------------------------------------*/}
        {/* info ---------------------------------------------------------------- */}
        <div className="mt-12 ">
          <headTitle className="flex xl:flex-row xl:self-end flex-col">
            <div className="font-mukta text-4xl font-bold ">Natalie Morales</div>
          </headTitle>
          <info className="flex-col flex font-jura  py-3 text-gray-700">
            <div>1985-02-15 </div>
          </info>
          <ratingT className="">
            {/* <div className="relative pt-3 ml-7 w-6/12  "> */}
            <div className="text-gray-600 ">Brooklyn, New York</div>
          </ratingT>

          <overview className="flex flex-col  mr-10 mt-10 ">
            <div className="font-mukta font-medium text-lg mb-1">Overview</div>
            <p className="text-left text-gray-600  ">
              ...best anverry moves into New York City's finest hotel on the eve of the wedding of the century, forcing the desperate event planner to
              hire Tom to get rid of him. As mayhem ensues, the escalating cat-and-mouse battle soon threatens to destroy her career, the wedding, and
              possibly the hotel itself. friends
            </p>
          </overview>
        </div>
        {/* info ---------------------------------------------------------------- */}
      </topColumn>

      {/* SIMILAR MOVIES */}
      <div className="mt-3 mb-10 text-center">
        <div className="font-rubik font-light italic 	 text-2xl ">Acting</div>
        <div className="bg-gray-100 flex flex-col mx-40 rounded-xl mt-10 shadow-xl p-4  ">
          <div className=" border-fuchsia-600 flex flex-row space-x-6 ml-4 items-center  ">
            <div>2004</div>
            <i class="fas fa-ellipsis-h"></i> <div>Evicted as Bob</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col 	 w-auto  ">
        <div className="mt-3 mb-10 text-center">
          <div className="font-rubik font-light italic mb-6 text-2xl ">Seen in</div>
          {/* <div className="font-mukta font-bold">in</div> */}
        </div>
        {/* card */}
        <movieCardDiv className="  md:ml-0  md:gap-x-4 xl:ml-10 xl:gap-x-6 gap-y-5 place-items-auto   grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5   self-center       justify-items-center     ">
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

export default ActorDetail;
