const createSingleMovieCard = (filmObj) => {
  const filmCardEl = document.createElement("div");
  filmCardEl.className = "single-film-card";

  // Create the button
  const button2 = document.createElement("button");
  button2.textContent = "Open Modal";
  button2.className = "open-modal-button";
  console.log(filmObj);
  filmCardEl.innerHTML = `
  
  <div class="card">
  <img src="${filmObj.Poster}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${filmObj.Title}</h5>
    <p class="card-text">Year:${filmObj.Year}</p>

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      ${filmObj.Title}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

  </div>
  </div>
 </div>
    `;
  console.log(filmObj);
  return filmCardEl;
};

export { createSingleMovieCard };
