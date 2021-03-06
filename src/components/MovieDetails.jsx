import React, { useEffect } from "react";
import "../css/MovieDetails.css";
import { useParams } from "react-router";
import { Grid, Box, Button } from "@material-ui/core/";
import { fetchMoviedata ,emptyData} from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import ScheduleIcon from '@material-ui/icons/Schedule';

function MovieDetails() {
  let { id } = useParams();

  const dispatch = useDispatch();

  const SingleMovie = useSelector((state) => state.singleMovie);

  useEffect(() => {
    dispatch(fetchMoviedata(id));
    return () =>{
       dispatch(emptyData());
    }
  }, [id, dispatch]);

  console.log("single", SingleMovie);
  return !SingleMovie ? (
    <div id="loader" className="nfLoader"></div>
  ) : (
    <Box>
      <Grid container className="movie__detailsparent">
        <Grid item lg={3} md={3} sm={3} xs={12} component={Box} p={4}>
          <div className="movieDetail__Img">
            {!SingleMovie.poster_path ? (
              <p>No image Available</p>
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/original/${SingleMovie.poster_path}`}
                alt=""
              />
            )}
          </div>
        </Grid>
        <Grid item lg={9} md={9} sm={9} xs={12} component={Box} p={4}>
          <div className="movieDetail__right">
            <h3>{SingleMovie.title}</h3>
            <div className="movieDetail__geres">
              
              {SingleMovie.genres.map((data) => (
                <span className="movie_detail__movieType" key={data.id}>
                  {data.name}
                </span>
              ))}
              
           
              <span className="movieDetail_duration">
                <ScheduleIcon />
                {SingleMovie.runtime}m

              </span>
            </div>

            <h4>
              <i>{SingleMovie.tagline}</i>
            </h4>

            <div className="moviDetail__overview">
              <h3>OverView</h3>
              <p> {SingleMovie.overview}</p>
            </div>

            <div className="movieDetail__author">
              <div className="movieDetail__production">
                <h4>Production </h4> :
                <div className="movieDetail__company">
                  <p>{SingleMovie.production_companies[0].name}</p>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${SingleMovie.production_companies[0].logo_path}`}
                    alt=""
                  />
                </div>
              </div>

              <h4>Release Date : {SingleMovie.release_date}</h4>
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
