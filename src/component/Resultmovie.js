import { React, } from "react";
import "./resultmovie.css";
import useApi from "./ContextApi";
function Resultmovie(props) {
  const api = useApi();
  console.log(api.props.value.whatchlist);
  console.log(api.props.value.whatched);
  const  movieStored =api.props.value
  let action =api.props.value.dispatch
  let storedMovie = Array.from([...movieStored.whatchlist]).find(e => e.imdbID ===props.element.imdbID)
  let storeMovieWhatched =Array.from([...movieStored.whatched]).find(e => e.imdbID ===props.element.imdbID)
  const whatchlistBtn = storedMovie ?true :storeMovieWhatched? true :false
  const whatchedBtn= storeMovieWhatched ?true :false
  return (
    <div className="container-movies">
      <img src={props.element.Poster} alt="" />
      <div className="info">
        <div>
          <h3>{props.element.Title}</h3>
          <h4>{props.element.Year}</h4>
        </div>
        <div className="constrols">
          <button
          disabled={whatchlistBtn}
            className="btn"
            onClick={() =>
              action({ type: "ADD_TO_WHATCHLIST", add: props.element })
            }
          >
            add to whatchlist
          </button>
          <button disabled={whatchedBtn} className="btn"   onClick={() =>
              action({ type: "ADD_TO_WHATCHED", add: props.element })
            }>add to whatched</button>
        </div>
      </div>
    </div>
  );
}

export default Resultmovie;
