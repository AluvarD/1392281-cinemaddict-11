import {createElement} from "../utils.js";

const createSectionFilmDetailsPoster = (poster) => {
  const {image} = poster;
  return (
    `<div class="film-details__poster">
       <img class="film-details__poster-img" src="./images/posters/${image}" alt="">
       <p class="film-details__age">18+</p>
     </div>`
  );
};

export default class FilmDetailsPoster {
  constructor(poster) {
    this._poster = poster;
    this._element = null;
  }

  getTemplate() {
    return createSectionFilmDetailsPoster(this._poster);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
