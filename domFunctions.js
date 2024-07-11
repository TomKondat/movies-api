const content = document.getElementById("content");

const createSingleMovieCard = (filmObj) => {
  const filmCardEl = document.createElement("div");
  filmCardEl.className = "single-film-card";
  filmCardEl.innerHTML = `
  <div class="card">
  <img src="${filmObj.Poster}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${filmObj.Title}</h5>
    <p class="card-text">Year:${filmObj.Year}</p>
    <a href="#" class="btn btn-primary">Go Movie Page</a>
  </div>
  </div>
 </div>
    `;
  console.log(filmObj);
  content.append(filmCardEl);
  return filmCardEl;
};

export { createSingleMovieCard };
