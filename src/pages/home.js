import React from 'react'
import Banner from '../Banner';
import Nav from '../Nav';
import requests from '../requests';
import Row from '../Row';
import List from '../List/List';
function Home() {
  return (
   <>
      <Nav />
     <Banner />
     <Row title="Netflix original" fetchUrl={requests.fetchNetflixOriginals} isLarge={true} />
     <Row title="Trending" fetchUrl={requests.fetchTrending}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies}/>
     <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horor" fetchUrl={requests.fetchHororMovies}/>
     <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentary" fetchUrl={requests.fetchDocumentaryMovies}/>
     <List title="Documentary" fetchUrl={requests.fetchDocumentaryMovies}/>
   </>
  )
}

export default Home