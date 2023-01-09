import React from "react";
import json from './movie.json'

function Movies(props){
  return (
      <div className="movie">
        <img src={props.poster} alt="img"/>
        <h3>{props.title}</h3>
        <h4>Year:{props.year}</h4>
      </div>
  );
}

export default Movies;
