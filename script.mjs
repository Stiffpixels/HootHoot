import { movies } from "./dataStore/moviesJSON.mjs";
const randomBtn = document.querySelector(".random-btn");
const randomMovieContainer = document.querySelector(".random-movie__container");
const randomMovieTitle = document.querySelector(".random-movie__title");
const randomMovieImage = document.querySelector(".random-movie__image");
const randomMovieLink = document.querySelector(".random-movie__more-details a");

const getRandomMovie = async () => {
  randomMovieContainer.style.display = "flex";
  const movie = movies["" + Math.floor(Math.random() * 502)].Search[0];
  randomMovieTitle.textContent = movie.Title + " " + movie.Year;
  randomMovieImage.src = movie.Poster;
  randomMovieLink.href = `https://www.imdb.com/title/${movie.imdbID}`;
};
randomBtn.addEventListener("click", getRandomMovie);

window.addEventListener("load", getRandomMovie);
