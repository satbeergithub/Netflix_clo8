// import axios from '../tmdbfile/axios'
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import userrequest from "../tmdbfile/request";

function Banner() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/discover/tv?api_key=32ce6adcd8f4737faa4cf686afa6b000&language=en-US"
        );
        const random = Math.floor(Math.random() * res.data.results.length) - 1;
        setmovie(res.data.results[random]);
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    }
    fetchdata();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner_content">
        <h1>{movie?.original_title || movie.name}</h1>
        {/* <div className="btn">
          <button>Play</button>
          <button>My List</button>
        </div> */}

        <div className="description">
          <p>{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
