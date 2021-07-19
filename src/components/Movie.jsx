import React, { useEffect } from "react";
import { Grid, Box, Container } from "@material-ui/core/";
import StarsRoundedIcon from "@material-ui/icons/StarsRounded";
import SearchMovie from "./SearchMovie";
import "../css/movie.css";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../actions/actions";

function Movie({movieName}) {
  const dispatch = useDispatch();
  const Movies = useSelector((state) => state.movies);
  const searchedMovie = useSelector((state) => state.searchMovie);
  
  useEffect(() => {
    dispatch(fetchMovie());
  }, [dispatch]);
  console.log("movies", Movies);
  console.log("searchedmovie", searchedMovie);
  console.log("from parent" , movieName);
  return (
    <Container>
      <Box py={4}>
        {searchedMovie ? <SearchMovie movieName={movieName} /> : null}
        <h1 style={{ paddingBottom: "22px" }}> POPULAR MOVIES</h1>
        {!Movies ? ( 
          <div id="loader" className="nfLoader"></div>
        ) : (
          <Grid container spacing={3}>
            {Movies.map((data) => (
              <Grid
                key={data.id}
                item
                md={2}
                sm={3}
                xs={6}
                lg={3}
                className="movie"
              >
                <Link to={`/movieDetail/${data.id}`}>
                  <div className="movie__Card">
                    <div className="movie__img">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                        alt=""
                      />
                      <div className="movie__rating">
                        <span>
                          {data.vote_average === 0 ? 0.0 : data.vote_average}
                        </span>
                      </div>
                    </div>
                    <div className="movie__name">
                      <p>{data.title}</p>
                    </div>
                    <div className="movie__footer">
                      <span>
                        <StarsRoundedIcon /> &nbsp;{data.vote_count}{" "}
                      </span>
                      <span>{data.release_date}</span>
                    </div>
                  </div>
                </Link>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
}

export default Movie;
