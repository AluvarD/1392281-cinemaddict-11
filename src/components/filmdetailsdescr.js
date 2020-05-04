import {createElement} from "../utils.js";

const createSectionFilmDetailsDecsr = (descr) => {
  const {description} = descr;
  return (
    `<p class="film-details__film-description">
        ${description}
     </p>`
  );
};

export default class FilmDetailsDescr {
  constructor(descr) {
    this._descr = descr;
    this._element = null;
  }

  getTemplate() {
    return createSectionFilmDetailsDecsr(this._descr);
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
