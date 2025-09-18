import React, { useEffect } from "react";
import { Card } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import { api, api_key } from "../api/index";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedMovie, selectedMovie } from "../redux/action/movies";
import { Spinner } from "flowbite-react";

const Details = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const movieDetail = async () => {
    const res = await api.get(`movie/${id}?api_key=${api_key}`);

    dispatch(selectedMovie(res.data));
    // console.log(res.data);
  };
  useEffect(() => {
    if(id) {
      movieDetail();
    }

    return () => dispatch(removeSelectedMovie({}));
  }, []);

  let movie = useSelector((state) => state.movies.movie);
  console.log(movie);

  const navigate = useNavigate();
  return (
    <div className="d-flex container mx-auto">
      <div>
        <span style={{ fontSize: "20px" }} onClick={() => navigate("/")}>
          Back
        </span>
      </div>
      
      {JSON.stringify(movie) == {} ? (
        <div className="text-center">
          <h1>
            <Spinner aria-label="Extra large spinner example" size="xl" />
          </h1>
        </div>
      ) : (
        <div className="mx-auto">
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {movie.overview}
            </p>
            <div>
              <span>
                <i className="fa-solid fa-star  mb-3"></i>
                {movie.vote_average}
              </span>
              <span className="ms-3 mb-2 me-2">
                <i className="fa-solid fa-calendar-day"></i>
                {movie.release_date}
              </span>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Details;
