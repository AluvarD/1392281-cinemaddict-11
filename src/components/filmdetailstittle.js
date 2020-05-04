import {createElement} from "../utils.js";

const createSectionFilmDetailsTittle = (head) => {
  const {name, rating} = head;

  return (
    `<div class="film-details__info-head">
       <div class="film-details__title-wrap">
         <h3 class="film-details__title">${name}</h3>
         <p class="film-details__title-original">Original: ${name}</p>
       </div>
       <div class="film-details__rating">
         <p class="film-details__total-rating">${rating}</p>
       </div>
      </div>`
  );
};

export default class FilmDetailsPosterTittle {
  constructor(head) {
    this._head = head;
    this._element = null;
  }

  getTemplate() {
    return createSectionFilmDetailsTittle(this._head);
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
