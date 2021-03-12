import axios from "axios";
// import React, { useState, useEffect } from "react";
// import Index_child from "../service/index-child.js";

const apiKey = "a6cf54bca5a91f9a22017d7d14ad617a";
const url = "https://api.themoviedb.org/3";
const nowPlayingUrl = `${url}/movie/now_playing`;
const topratedUrl = `${url}/movie/top_rated`;
const popular = `${url}/movie/popular`;
const onTv = `${url}/tv/on_the_air`;
const tvPopular = `${url}/tv/popular`;
const tvTopRated = `${url}/tv/top_rated`;
// const movieUrl = `${url}/movie`;
// const genreUrl = `${url}/genre/movie/list`;
// const moviesUrl = `${url}/discover/movie`;
// const personUrl = `${url}/trending/person/week`;
// const posterUrl = "https://image.tmdb.org/t/p/original/";
const upcomingUrl = "https://api.themoviedb.org/3/movie/upcoming?";
////////////////////////////////////////////////////////////////////////
////////////////////// FETCHING DATA ///////////////////////////////////
////////////////////////////////////////////////////////////////////////
export const fetchOnTv = async () => {
  try {
    const { data } = await axios.get(onTv, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
      },
    });

    const modifiedData = data.results.map((m) => m);
    return modifiedData;
  } catch (error) {}
};
export const fetchTvPopular = async () => {
  try {
    const { data } = await axios.get(tvPopular, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
      },
    });

    const modifiedData = data.results.map((m) => m);
    return modifiedData;
  } catch (error) {}
};
export const fetchTvTopRated = async () => {
  try {
    const { data } = await axios.get(tvTopRated, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
      },
    });

    const modifiedData = data.results.map((m) => m);
    return modifiedData;
  } catch (error) {}
};
export const fetchNowPlayingMovies = async () => {
  try {
    const { data } = await axios.get(nowPlayingUrl, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
      },
    });

    const modifiedData = data.results.map((m) => m);
    return modifiedData;
  } catch (error) {}
};

export const fetchTopRated = async () => {
  try {
    const { data } = await axios.get(topratedUrl, {
      params: {
        api_key: apiKey,
        language: "en - US",
        page: 1,
      },
    });
    const modifiedData = data.results.map((m) => m);
    return modifiedData;
  } catch (error) {}
};
export const fetchUpcomingMovies = async () => {
  try {
    const { data } = await axios.get(upcomingUrl, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
      },
    });

    const modifiedData = data.results.map((m) => m);
    return modifiedData;
  } catch (error) {}
};

export const fetchPopularMovies = async () => {
  const { data } = await axios.get(popular, {
    params: {
      api_key: apiKey,
      language: "en_US",
      page: 1,
    },
  });
  const modifiedData = data.results.map((m) => m);
  return modifiedData;
};

////////////////////////////////////////////////////////////////////////
////////////////////// FETCHING DATA ///////////////////////////////////
////////////////////////////////////////////////////////////////////////
