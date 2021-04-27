import axios from "axios";
const apiKey = "a6cf54bca5a91f9a22017d7d14ad617a";
const url = "https://api.themoviedb.org/3";
const nowPlayingUrl = `${url}/movie/now_playing`;
const topratedUrl = `${url}/movie/top_rated`;
const popular = `${url}/movie/popular`;
const onTv = `${url}/tv/on_the_air`;
const tvPopular = `${url}/tv/popular`;
const tvTopRated = `${url}/tv/top_rated`;
const gendres = `https://api.themoviedb.org/3/genre/movie/list?api_key=a6cf54bca5a91f9a22017d7d14ad617a&language=en-UShttps://`;

const upcomingUrl = "https://api.themoviedb.org/3/movie/upcoming?";
////////////////////////////////////////////////////////////////////////
////////////////////// FETCHING DATA ///////////////////////////////////
////////////////////////////////////////////////////////////////////////
export const fetchOnTv = async (page) => {
  try {
    const { data } = await axios.get(onTv, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: page,
      },
    });

    const modifiedData = data.results.map((m) => m);
    return modifiedData;
  } catch (error) {}
};
export const fetchTvPopular = async (page) => {
  try {
    const { data } = await axios.get(tvPopular, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: page,
      },
    });

    const modifiedData = data.results.map((m) => m);
    return modifiedData;
  } catch (error) {}
};
export const fetchTvTopRated = async (page) => {
  try {
    const { data } = await axios.get(tvTopRated, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: page,
      },
    });

    const modifiedData = data.results.map((m) => m);
    return modifiedData;
  } catch (error) {}
};
export const fetchNowPlayingMovies = async (page) => {
  try {
    const { data } = await axios.get(nowPlayingUrl, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: page,
      },
    });

    const modifiedData = data.results.map((m) => m);
    return modifiedData;
  } catch (error) {}
};

export const fetchTopRated = async (page) => {
  try {
    const { data } = await axios.get(topratedUrl, {
      params: {
        api_key: apiKey,
        language: "en - US",
        page: page,
      },
    });
    const modifiedData = data.results.map((m) => m);
    return modifiedData;
  } catch (error) {}
};
export const fetchUpcomingMovies = async (page) => {
  try {
    const { data } = await axios.get(upcomingUrl, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: page,
      },
    });

    const modifiedData = data.results.map((m) => m);
    return modifiedData;
  } catch (error) {}
};

export const fetchPopularMovies = async (page) => {
  const { data } = await axios.get(popular, {
    params: {
      api_key: apiKey,
      language: "en_US",
      page: page,
    },
  });
  const modifiedData = data.results.map((m) => m);
  return modifiedData;
};

export const fetchGenres = async (page) => {
  try {
    const { data } = await axios.get(gendres, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: page,
      },
    });

    const modifiedData = data.genres.map((m) => m);
    return modifiedData;
  } catch (error) {}
};

////////////////////////////////////////////////////////////////////////
////////////////////// FETCHING DATA ///////////////////////////////////
////////////////////////////////////////////////////////////////////////
