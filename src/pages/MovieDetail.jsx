import { Button, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MovieDetail = () => {
  const navigate = useNavigate();
  const [detail, setDetail] = useState("");
  const { id } = useParams();
  console.log(id);
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

  const getMovieDetailFromApi = async () => {
    const { data } = await axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );
    setDetail(data);
    console.log(data);
  };

  useEffect(() => {
    getMovieDetailFromApi();
  }, []);

  const { overview, poster_path, release_date, vote_average, vote_count } =
    detail;
  return (
    <>
      <Container align="center">
        <img src="" alt="" />
      </Container>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={7} md={6} align="center">
            <img
              src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
              height={480}
              alt=""
              style={{ marginTop: "0.5rem" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            md={6}
            sx={{ border: "1px solid grey", padding: "5px" }}
          >
            <Typography variant="h5">Overview</Typography>
            <hr />
            <Typography height={260}>{overview}</Typography>
            <hr />
            <Typography>
              Release Date: {new Date(release_date).toLocaleDateString()}
            </Typography>
            <hr />
            <Typography>Rate: {Number(vote_average).toFixed(1)}</Typography>
            <hr />
            <Typography>Total Vote: {vote_count} </Typography>
            <hr />
            <Button onClick={() => navigate(-1)}>Go Back</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MovieDetail;
