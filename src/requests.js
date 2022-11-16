const API_KEY = "2a6bd7378f6da6d891f541bb444ae164";

const requests = {
fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
fetchTrending: `/movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHororMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;
