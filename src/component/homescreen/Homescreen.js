import React from "react";
import Banner from "./Banner";
import "./Homescreen.css";
import Navbar from "./Navbar";
import Row from "./Row";
import userrequest from "../tmdbfile/request";
function Homescreen() {
  return (
    <>
      <div className="homescreen">
        <Navbar />
        <Banner />
        <Row
          title="Trending Now"
          isLargeRow
          fetchurl={userrequest.fetchTrending}
        />
        <Row title="Top Rated Movie" fetchurl={userrequest.fetchTopRated} />
        <Row title="Comedy Movie" fetchurl={userrequest.fetchComedyMovies} />
        <Row title="Horror Movie" fetchurl={userrequest.fetchHorrorMovies} />
        <Row title="Action Movie" fetchurl={userrequest.fetchActionMovies} />
        <Row title="Romance Movie" fetchurl={userrequest.fetchRomanceMovies} />
        <Row title="Documentries" fetchurl={userrequest.fetchDocumentaries} />
      </div>
    </>
  );
}

export default Homescreen;
