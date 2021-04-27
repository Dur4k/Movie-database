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
import Pagination from "./pagination";
import { Switch, Route, useLocation } from "react-router-dom";
import ActorDetail from "./ActorDetail.js";
import Genres from "./genres.js";
import GenresTv from "./GenresTv.js";
import SreachMovies from "./SreachMovies.js";

const MainContent = ({ movieSreach, page, setPage, numbOfPages }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setnowPlayingMovies] = useState([]);
  const [upcomingMovies, setupcomingMovies] = useState([]);
  const [topRatedMovies, settopRatedMovies] = useState([]);
  const [onTv, setonTv] = useState([]);
  const [tvTopRated, settvTopRated] = useState([]);
  const [tvPopular, settvPopular] = useState([]);
  const location = useLocation();
  // eslint-disable-next-line
  useEffect(async () => {
    setPopularMovies(await fetchPopularMovies(page));
    setnowPlayingMovies(await fetchNowPlayingMovies(page));
    setupcomingMovies(await fetchUpcomingMovies(page));
    settopRatedMovies(await fetchTopRated(page));
    setonTv(await fetchOnTv(page));
    settvTopRated(await fetchTvTopRated(page));
    settvPopular(await fetchTvPopular(page));
  }, [page]);

  // check if is new path, if yes set pagination to 1
  useEffect(() => {
    const { pathname } = location;
    setPage(1);
  }, [location.pathname]);
  return (
    <div>
      <Switch>
        <Route exact path="/movie/Popular">
          <MovieElement title="Popular" subTitle="movies" data_info={popularMovies} />
          <Pagination setPage={setPage} page={page} numbOfPages={numbOfPages} />
        </Route>
        <Route exact path="/movie/NowPlaying">
          <MovieElement title="Now Playing" subTitle="movies" data_info={nowPlayingMovies} />
          <Pagination setPage={setPage} page={page} numbOfPages={numbOfPages} />
        </Route>
        <Route exact path="/movie/Upcoming">
          <MovieElement title="Upcoming" subTitle="movies" data_info={upcomingMovies} />
          <Pagination setPage={setPage} page={page} numbOfPages={numbOfPages} />
        </Route>
        <Route exact path="/movie/TopRated">
          <MovieElement title="Top Rated" subTitle="movies" data_info={topRatedMovies} />
          <Pagination setPage={setPage} page={page} numbOfPages={numbOfPages} />
        </Route>
        <Route exact path="/tv/TvPopular">
          <MovieElement title="Popular" subTitle="TV Shows" data_info={tvPopular} />
          <Pagination setPage={setPage} page={page} numbOfPages={numbOfPages} />
        </Route>
        <Route exact path="/tv/TvLatest">
          <MovieElement title="Latest" subTitle="TV Shows" data_info={onTv} />
          <Pagination setPage={setPage} page={page} numbOfPages={numbOfPages} />
        </Route>
        <Route exact path="/:id">
          <SreachMovies title="Latest" movieSreach={movieSreach} subTitle="Sreach results of" />
          <Pagination setPage={setPage} page={page} numbOfPages={numbOfPages} />
        </Route>
        <Route exact path="/">
          <SreachMovies title="Latest" movieSreach={movieSreach} subTitle="Sreach results of" />
          <Pagination setPage={setPage} page={page} numbOfPages={numbOfPages} />
        </Route>

        <Route exact path="/tv/TvTopRated">
          <MovieElement title="Top Rated " subTitle="TV Shows" data_info={tvTopRated} />
        </Route>
        <Route path={`/movie/:id/`} component={MovieDetail} />
        <Route path={`/actor/:id/`} component={ActorDetail} />
        <Route
          path={`/tv/gendre/:id/`}
          render={(props) => (
            <>
              <GenresTv {...props} page={page} />
              <Pagination setPage={setPage} page={page} numbOfPages={numbOfPages} />
            </>
          )}
        />

        <Route
          path={`/gendre/:id/`}
          render={(props) => (
            <>
              <Genres {...props} page={page} />
              <Pagination setPage={setPage} page={page} numbOfPages={numbOfPages} />
            </>
          )}
        />
        <Route path={`/tv/:id/`} component={MovieDetail} />
        <Route path={`/gendre/:id/`} component={Genres} />
      </Switch>
    </div>
  );
};

export default MainContent;
