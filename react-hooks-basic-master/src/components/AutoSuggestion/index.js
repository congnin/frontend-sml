import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import logo from "../../logo.svg";
import "./AutoSuggestion.scss";

function AutoSuggestionExample(props) {
  const URL_SEARCH = "https://api.themoviedb.org/3/search/movie?query=";
  const URL_IMG = "https://image.tmdb.org/t/p/";
  const IMG_SIZE_XSMALL = "w45/";
  const API_KEY_ALT = "&api_key=4d4ed145d3584846f5922b6a467e1f85";
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onSuggestionsFetchRequested = ({ value }) => {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 0) {
      let url = URL_SEARCH + trimmedValue + API_KEY_ALT;
      fetch(url)
        .then((response) => response.json())
        .then((json) => json.results)
        .then((data) => {
          const results = data.map((movie) => {
            let temp = {};
            temp.id = movie.id;
            temp.title = movie.title;
            temp.img = movie.poster_path;
            temp.year = !movie.release_date
              ? ""
              : movie.release_date.substring(0, 4);
            return temp;
          });
          setSuggestions(results);
        })
        .catch((error) => console.log("Exception to get Suggestions"));
    }
  };

  const onSuggestionSelected = (event, { suggestion, method }) => {
    if (method === "enter") event.preventDefault();
    alert(suggestion.id);
    setValue("");
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = (suggestion) => {
    return suggestion.title;
  };

  const renderSuggestion = (suggestion) => {
    return (
      <div>
        <img
          alt=''
          className='searchResult-image'
          src={
            suggestion.img == null
              ? logo
              : URL_IMG + IMG_SIZE_XSMALL + suggestion.img
          }
        />
        <div className='searchResult-text'>
          <div className='searchResult-name'>{suggestion.title}</div>
          {suggestion.year}
        </div>
      </div>
    );
  };

  const onChange = (event, { newValue, method }) => {
    setValue(newValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      return handleSubmit(value);
    }
  };

  const inputProps = {
    value,
    onChange: onChange,
    onKeyPress: handleKeyDown,
    placeholder: "Search Movie Title...",
  };

  const handleSubmit = (searchText) => {
    alert(`Pitcock ${searchText}`);
    setValue("");
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionSelected={onSuggestionSelected}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
}

export default AutoSuggestionExample;
