import AbstractComponent from "./abstract-component.js";

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

export default class FilmDetailsPosterTittle extends AbstractComponent {
  constructor(head) {
    super();
    this._head = head;
  }

  getTemplate() {
    return createSectionFilmDetailsTittle(this._head);
  }
}
