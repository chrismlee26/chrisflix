import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="CHRISFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title="Probably Terrible But Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated by Plebians" fetchUrl={requests.fetchTopRated} />
      <Row title="People Fighting" fetchUrl={requests.fetchActionMovies} />
      <Row title="Funny by Committee" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Somewhat Scary" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Awful Movies for Soulless People" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Pretend to Learn while watching Movies" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>  
  );
}

export default App;
