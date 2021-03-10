import React from "react";

const MovieCard = () => {
  return (
    <div className="grid mr-3   ">
      <div class="flex-col   w-56 bg-white rounded-xl shadow-xl  ">
        <img
          class=" border rounded-b-lg  overflow-hidden rounded-xl bg-cover object-cover flex-none"
          src="https://www.themoviedb.org/t/p/w1280/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg"
          alt=""
        />
        <div class=" mt-3 flex-col text-lg  font-bold text-center">The Mandalorian </div>
        <div class="-mt-1 mb-2 flex-col  t-12 font-thin text-center text-sm ">12 Nov 2019</div>
        <div class="pt-1 flex-col py-3 px-5">
          <div class="overflow-hidden h-3 mb-4 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: "44%" }}
              class=" place-items-center   justify-center items-center shadow-none flex flex-col text-center whitespace-nowrap text-white  bg-red-700"
            >
              44%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
