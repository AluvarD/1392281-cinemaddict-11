import AbstractComponent from "./abstract-component.js";

const createSectionFilmDetailsPoster = (poster) => {
  const {image} = poster;
  return (
    `<div class="film-details__poster">
       <img class="film-details__poster-img" src="./images/posters/${image}" alt="">
       <p class="film-details__age">18+</p>
     </div>`
  );
};

export default class FilmDetailsPoster extends AbstractComponent {
  constructor(poster) {
    super();
    this._poster = poster;
  }

  getTemplate() {
    return createSectionFilmDetailsPoster(this._poster);
  }
}
