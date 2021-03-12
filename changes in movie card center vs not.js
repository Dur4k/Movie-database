Movie card entered
<div className="grid mr-3    ">
      <div class="flex-col relative   w-56 bg-white border-white rounded-xl  shadow hover:shadow-3xl  ">
        <img
          class=" border rounded-b-lg  overflow-hidden rounded-xl bg-cover  object-cover  flex-none"
          src={"https://www.themoviedb.org/t/p/w1280/" + popular.poster_path}
          alt=""
        />
        <div class=" mt-3 flex-col text-lg  font-bold text-center leading-4">{popular.title}</div>
        <div class="mt-1 mb-8 flex-col  t-12 font-thin text-center text-sm  ">{popular.release_date}</div>
        <div className="absolute bottom-0 left-10  ">
          <div class=" flex-col   absolute bottom-0 -left-6  ">
            <div class=" overflow-hidden h-3 mb-4 w-48 text-xs flex rounded bg-gray-200">
              <div
                style={style_percentige}
                class={` place-items-center   justify-center items-center shadow-none flex flex-col text-center whitespace-nowrap text-white  ${calc_color(
                  rating_percentige
                )}`}
              >
                {rating_percentige}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



Movie card before
<div className="grid mr-3    ">
      <div class="flex-col   w-56 bg-white border-white rounded-xl  shadow hover:shadow-3xl  ">
        <img
          class=" border rounded-b-lg  overflow-hidden rounded-xl bg-cover  object-cover  flex-none"
          src={"https://www.themoviedb.org/t/p/w1280/" + popular.poster_path}
          alt=""
        />
        <div class=" mt-3 flex-col text-lg  font-bold text-center leading-4">{popular.title}</div>
        <div class="mt-1 mb-2 flex-col  t-12 font-thin text-center text-sm  ">{popular.release_date}</div>
        <div class="pt-1 flex-col py-3 px-5">
          <div class="overflow-hidden h-3 mb-4 text-xs flex rounded bg-gray-200">
            <div
              style={style_percentige}
              class={` place-items-center   justify-center items-center shadow-none flex flex-col text-center whitespace-nowrap text-white  ${calc_color(
                rating_percentige
              )}`}
            >
              {rating_percentige}%
            </div>
          </div>
        </div>
      </div>
    </div>


