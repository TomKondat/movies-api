const createSingleMovieCard = (filmObj) => {
  const filmCardEl = document.createElement("div");
  filmCardEl.className = "single-film-card";

  // Generate a unique id for the modal
  const modalId = `modal-${filmObj.imdbID}`;
  filmCardEl.innerHTML = `
  <div class="card">
    <img src="${filmObj.Poster}" class="card-img-top" alt="${filmObj.Title}">
    <div class="card-body">
      <h5 class="card-title">${filmObj.Title}</h5>
      <p class="card-text">Year: ${filmObj.Year}</p>

      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${modalId}">
        Launch demo modal
      </button>

      <!-- Modal -->
      <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="${modalId}Label">${filmObj.Title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                  <img src="${filmObj.Poster}" "${filmObj.Title}">

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">More Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;

  return filmCardEl;
};
export { createSingleMovieCard };
