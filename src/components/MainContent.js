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

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

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
        <Route exact path="/">
          <MovieElement title="Popular" data_info={popularMovies} />
        </Route>
        <Route exact path="/NowPlaying">
          <MovieElement title="Now Playing" data_info={nowPlayingMovies} />
        </Route>
        <Route exact path="/Upcoming">
          <MovieElement title="Upcoming" data_info={upcomingMovies} />
        </Route>
        <Route exact path="/TopRated">
          <MovieElement title="Top Rated" data_info={topRatedMovies} />
        </Route>
        <Route exact path="/TvPopular">
          <MovieElement title="Popular" data_info={tvPopular} />
        </Route>
        <Route exact path="/TvLatest">
          <MovieElement title="Popular" data_info={onTv} />
        </Route>
        <Route exact path="/TvTopRated">
          <MovieElement title="Popular" data_info={tvTopRated} />
        </Route>
        <Route path="/NowPlaying/:id" component={MovieDetail} />
      </Switch>
    </div>
  );
};

export default MainContent;
