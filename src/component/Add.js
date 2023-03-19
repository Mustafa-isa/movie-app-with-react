import { React ,useState ,useEffect} from 'react'
import "./Add.css"
import axios from 'axios'
import Resultmovie from './Resultmovie'
function Add() {
  const [movie,setValue] =useState("")
  let [movies ,setArr] = useState([])
  useEffect( ()=>{
axios.get(`http://www.omdbapi.com/?s=${movie}&apikey=cddd6b3b`)
.then(res =>{
  let m =res.data.Search
  console.log([...m])
  setArr(m)
})
  },[movie])
  console.log(movies)
  return (
    <div className='container'>

      <div className="input">
        <input type="text" placeholder=' enter movie name'  value={movie} onChange={(e) =>{ setValue(e.target.value)}}/>
      </div>
      <div className="results">
{ movies.length > 0 && <ul>
  
  { movies.map((element) =>{
    return <li key={element.imdbID}>
      <Resultmovie  element ={element}/>
    </li>
  })}
  </ul>}
  
      </div>
    </div>
  )
}

export default Add