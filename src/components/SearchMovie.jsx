import React from "react";
import { Grid, Box, Container } from "@material-ui/core/";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StarsRoundedIcon from "@material-ui/icons/StarsRounded";

function SearchMovie() {
  const searchedMovie = useSelector((state) => state.searchMovie);

  return (
    <Container>
      <Box py={4}>
        <h1 style={{ paddingBottom: "22px" }}> Searched Movies</h1>
        {!searchedMovie ? (
          <p>Loading..</p>
        ) : (
          <Grid container spacing={3}>
            {searchedMovie.map((data) => (
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
                      {!data.poster_path ? (
                        <p style={{textAlign:"center"}}>No image Available</p>
                      ) : (
                        <img
                          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                          alt=""
                        />
                      )}
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

export default SearchMovie;
