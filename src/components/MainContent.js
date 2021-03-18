import React, { useEffect, useState } from "react";
import {
  fetchPopularMovies,
  fetchNowPlayingMovies,
  fetchUpcomingMovies,
  fetchTopRated,
  fetchOnTv,
  fetchTvTopRated,
  fetchTvPopular,
} from "../api/api_components.js";
import MovieElement from "./PopularMovies";
import MovieDetail from "./MovieDetail";

import { Switch, Route } from "react-router-dom";
import ActorDetail from "./ActorDetail.js";
import Genres from "./genres.js";
import GenresTv from "./GenresTv.js";

const MainContent = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setnowPlayingMovies] = useState([]);
  const [upcomingMovies, setupcomingMovies] = useState([]);
  const [topRatedMovies, settopRatedMovies] = useState([]);
  const [onTv, setonTv] = useState([]);
  const [tvTopRated, settvTopRated] = useState([]);
  const [tvPopular, settvPopular] = useState([]);
  // eslint-disable-next-line
  useEffect(async () => {
    setPopularMovies(await fetchPopularMovies());
    setnowPlayingMovies(await fetchNowPlayingMovies());
    setupcomingMovies(await fetchUpcomingMovies());
    settopRatedMovies(await fetchTopRated());
    setonTv(await fetchOnTv());
    settvTopRated(await fetchTvTopRated());
    settvPopular(await fetchTvPopular());
  }, []);
  return (
    <div>
      <Switch>
        <Route exact path="/movie">
          <MovieElement title="Popular" subTitle="movies" data_info={popularMovies} />
        </Route>
        <Route exact path="/movie/NowPlaying">
          <MovieElement title="Now Playing" subTitle="movies" data_info={nowPlayingMovies} />
        </Route>
        <Route exact path="/movie/Upcoming">
          <MovieElement title="Upcoming" subTitle="movies" data_info={upcomingMovies} />
        </Route>
        <Route exact path="/movie/TopRated">
          <MovieElement title="Top Rated" subTitle="movies" data_info={topRatedMovies} />
        </Route>
        <Route exact path="/tv/TvPopular">
          <MovieElement title="Popular" subTitle="TV Shows" data_info={tvPopular} />
        </Route>
        <Route exact path="/tv/TvLatest">
          <MovieElement title="Latest" subTitle="TV Shows" data_info={onTv} />
        </Route>

        <Route exact path="/tv/TvTopRated">
          <MovieElement title="Top Rated " subTitle="TV Shows" data_info={tvTopRated} />
        </Route>
        <Route path={`/movie/:id/`} component={MovieDetail} />
        <Route path={`/actor/:id/`} component={ActorDetail} />
        <Route path={`/tv/gendre/:id/`} component={GenresTv} />

        <Route path={`/gendre/:id/`} component={Genres} />
        <Route path={`/tv/:id/`} component={MovieDetail} />
        <Route path={`/gendre/:id/`} component={Genres} />
      </Switch>
    </div>
  );
};

export default MainContent;
