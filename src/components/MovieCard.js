import React from "react";
import img1 from "../img/pic1.png";
export function style_percentige(rating_percentige) {
  if (rating_percentige < 15 && rating_percentige > 2) {
    return { width: `${15 + "%"}` };
  } else if (rating_percentige == 0) {
    return { width: `${100 + "%"}` };
  } else {
    return { width: `${rating_percentige + "%"}` };
  }
}
export function calc_color(r) {
  if (r >= 80) {
    return "bg-green-500";
  } else if (r < 80 && r >= 70) {
    return "bg-green-600";
  } else if (r < 70 && r > 55) {
    return "bg-yellow-400";
  } else if (r < 55 && r > 1) {
    return "bg-red-500";
  } else {
    return "bg-blue-500";
  }
}
const MovieCard = ({ data_info }) => {
  const checkposter = !data_info.poster_path ? img1 : "https://www.themoviedb.org/t/p/w1280/" + data_info.poster_path;

  const roundRating = data_info.vote_average < 10 ? data_info.vote_average * 10 : null;
  const rating_percentige = (roundRating + "").replace(".", "");

  return (
    <div>
      <div className="grid  sm:mr-3 sm:p-0  p-1   ">
        <div className="flex-col relative   sm:w-56 bg-white border-white rounded-xl  shadow hover:shadow-3xl   ">
          <img className=" border rounded-b-lg  overflow-hidden rounded-xl bg-cover  object-cover  flex-none" src={checkposter} alt="" />
          <div className=" mt-3 flex-col  text-lg  font-bold text-center leading-4">{data_info.title ? data_info.title : data_info.name}</div>
          <div className="mt-1 mb-9 flex-col  t-12 font-thin text-center text-sm  ">
            {data_info.release_date ? data_info.release_date : data_info.first_air_date}
          </div>
          <div className="absolute  bottom-0 left-9 sm:left-10  ">
            <div className=" flex-col    absolute bottom-0 -left-6  ">
              <div className=" overflow-hidden  h-3 mb-4 w-40 sm:w-48 text-xs flex rounded bg-gray-200">
                <div
                  style={style_percentige(rating_percentige)}
                  className={` place-items-center   justify-center items-center shadow-none flex flex-col text-center whitespace-nowrap text-white  ${calc_color(
                    rating_percentige
                  )}`}
                >
                  {rating_percentige == 0 || rating_percentige == 10 ? "No Rating Yet" : rating_percentige + "%"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
