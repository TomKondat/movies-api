import { callApi } from "./apiServices/movieServices.js";
import { createSingleMovieCard } from "./domFunctions.js";

const url = `https://www.omdbapi.com/?s=Dark&apikey=f19969c4`;

const contentEl = document.getElementById("content");

// callApi(url).then((data) => contentEl.append(createSingleMovieCard(data)));
// callApi(url).then((data) => console.log(data.Search[0]));

callApi(url).then((data) => {
  data.Search.map((film) => {
    contentEl.append(createSingleMovieCard(film));
  });
});
