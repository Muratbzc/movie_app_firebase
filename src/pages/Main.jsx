import { Container, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Main = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const getMovieFromApi = async () => {
    const res = await axios(url);
    const data = res.data.results;
    setMovies(data);
    console.log(data);
  };

  useEffect(() => {
    getMovieFromApi();
  }, []);

  const getMovieFromApiToSearch = async () => {
    const res = await axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );
    const data = res.data.results;
    setMovies(data);
    console.log(data);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getMovieFromApiToSearch();
    setQuery("");
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <Container
          maxWidth="string"
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            background: "lightgrey",
            padding: "1rem",
            flexWrap: "wrap",
          }}
        >
          <TextField
            label="Search a movie.."
            type="search"
            size="small"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button variant="outlined" type="submit">
            Search
          </Button>
        </Container>
      </form>

      <Container maxWidth="xl" sx={{ marginTop: "15px" }}>
        <Grid container spacing={4} align="center" justifyContent="center">
          {movies?.map((item) => {
            const { backdrop_path, id, original_title } = item;
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                <Card>
                  <CardMedia
                    component="img"
                    height={400}
                    image={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
                    alt="movie"
                  />
                  <CardContent
                    sx={{ padding: "2px", backgroundColor: "lightblue" }}
                  >
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ fontWeight: "bold", color: "white" }}
                    >
                      {original_title}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ padding: "2px", justifyContent: "center" }}
                  >
                    <Button
                      id={item?.id}
                      variant="contained"
                      size="small"
                      color="warning"
                      onClick={() => {
                        navigate(`${id}`);
                        !currentUser && alert("please log in to see details");
                      }}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Main;
