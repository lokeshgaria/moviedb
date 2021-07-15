import React, { useEffect } from "react";
import { Grid, Box, Container } from "@material-ui/core/";
import StarsRoundedIcon from "@material-ui/icons/StarsRounded";
import "../css/movie.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../actions/actions";

function Movie() {
  const dispatch = useDispatch();
  const Movies = useSelector((state) => state.movies);

  useEffect(() => {
    const getResponse = async () => {
      const response = await axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
        )
        .catch((err) => console.log(err));
      dispatch(getData(response.data.results));
    };
    getResponse();
  }, [dispatch]);
  console.log("movies", Movies);
  return (
    <Container>
      <Box py={4}>
        <h1 style={{ paddingBottom: "22px" }}> POPULAR MOVIES</h1>
        {!Movies ? (
          <p>Loading..</p>
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
