import React, { useState, useEffect } from 'react';
import SearchBox from './Search';
import Card from './Card';

function Main(props) {
  const [movieID, setMovieID] = useState(157336);
  const [movie, setMovie] = useState(null);

  function fetchApi(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovieID(data.id);
        setMovie({
          movieID: data.id,
          original_title: data.original_title,
          tagline: data.tagline,
          overview: data.overview,
          homepage: data.homepage,
          poster: data.poster_path,
          production: data.production_companies,
          production_countries: data.production_countries,
          genre: data.genres,
          release: data.release_date,
          vote: data.vote_average,
          runtime: data.runtime,
          revenue: data.revenue,
          backdrop: data.backdrop_path,
        });
      })
      .catch((err) => console.log('Movie not found!', err));
  }

  function fetchMovieID(movieID) {
    const url = `https://api.themoviedb.org/3/movie/${movieID}?&api_key=cfe422613b250f702980a3bbf9e90716`;
    fetchApi(url);
  }

  useEffect(() => {
    fetchMovieID(movieID);
  }, [movieID]);

  function handleMovieSelected(options) {
    // console.log(options);
    fetchMovieID(options.id);
  }

  return (
    <div>
      <SearchBox onSelectedItem={handleMovieSelected} />
      {movie && <Card data={movie} />}
    </div>
  );
}

export default Main;
