import React, { useState, useEffect } from "react";
import "../css/MovieDetails.css";
import { useParams } from "react-router";
import { Grid, Box, Button } from "@material-ui/core/";
 
import axios from "axios";

function MovieDetails() {
  let { id } = useParams();
  const [movieDetails, setMovieDetail] = useState([]);

  useEffect(() => {
    const getMovieDetails = async () => {
      const response = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        )
        .catch((error) => console.log(error));

      setMovieDetail(response.data);
    };
    getMovieDetails();
  }, [id]);
 

  return movieDetails.length === 0 ? (
    <p>Loading</p>
  ) : (
    <Box>
      <Grid container className="movie__detailsparent">
        <Grid item lg={3} md={3} sm={3} xs={12} component={Box} p={4}>
          <div className="movieDetail__Img">
            <img
              src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
              alt=""
            />
          </div>
        </Grid>
        <Grid item lg={9} md={9} sm={9} xs={12} component={Box} p={4}>
          <div className="movieDetail__right">
            <h3>{movieDetails.title}</h3>
            <div className="movieDetail__geres">
              <span>
                {" "}
                {movieDetails.genres.map((data) => (
                  <span key={data.id} style={{ paddingRight: "5px" }}>
                    {data.name} ,
                  </span>
                ))}{" "}
                {movieDetails.runtime}m
              </span>
            </div>

            <h4>
              <i>{movieDetails.tagline}</i>
            </h4>

            <div className="moviDetail__overview">
              <h3>OverView</h3>
              <p> {movieDetails.overview}</p>
            </div>

            <div className="movieDetail__author">
              <div className="movieDetail__production">
                <h4>Production </h4> :
                <div className="movieDetail__company">
                  <p>{movieDetails.production_companies[0].name}</p>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movieDetails.production_companies[0].logo_path}`}
                    alt=""
                  />
                </div>
              </div>

              <h4>Release Date : {movieDetails.release_date}</h4>
              <div className="movieDetail__watch">
                <Button variant="contained" color="primary">
                  <span>Watch Trailer</span> 
                   
                </Button>
                 


                <Button variant="contained" color="secondary">
                  <span>Add to Favourite</span> 
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MovieDetails;
