import React from 'react'
import useApi from "./ContextApi";
import './whatchlist.css'
function Whached() {
  const apiFromContext = useApi();
  const arr = apiFromContext.props.value.whatched;
  const movies = Array.from([...arr]);
  return (
    <div className="container">
      {movies.length > 0 ? (
        <div className="containerWhichlist">
        {  movies.map((e) => {
            return   <div  className="child"  key={e.imdbID}><img src={e.Poster} alt="" />
            
            <div className="abs">{e.Title}</div>
            
            </div>
          })}
        </div>
      ) : (
        <div className="notfound">there is no films to show in whatch list</div>
      )}
    </div>
  );
}

export default Whached