import React, { useState } from 'react'
import { useEffect } from 'react'
import './Row.css'
// import axios from '../tmdbfile/localaxios'
import axios from 'axios'
import YouTube from 'react-youtube'

function Row({title,isLargeRow,fetchurl}) {

  const [movies,setmovie]=useState([])
  const [trailerUrl, setTrailerUrl] = useState("");

  const image_url ='https://image.tmdb.org/t/p/original/'
    // Options for react-youtube
    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    };
  
useEffect(()=>{
  async function fetchdata(){
    try{
      const res = await axios.get(`https://api.themoviedb.org/3${fetchurl}`)
      setmovie(res.data.results)
    } catch(error){
      console.log(error)
      alert(error.message)
    }  
  }
  fetchdata();
},[fetchurl])

const handleClick = async (movie) => {
  if (trailerUrl) {
    setTrailerUrl("");
  } else {
    let trailerurl = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=32ce6adcd8f4737faa4cf686afa6b000`);
    setTrailerUrl(trailerurl.data.results[0]?.key);
  }
};
 
  return (
    <div className='row'>
      <h1>{title}</h1>
      
      <div className="row_posters">
        {
          movies.map(movie=>{
            return <img src={`${image_url}${movie.poster_path}`} className={`ri ${isLargeRow && 'large-image'}`}
            alt={movie.name}
            key={movie.id}
            onClick={() => handleClick(movie)} />
          })
        }
       
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
