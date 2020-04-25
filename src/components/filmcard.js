import {createElement} from "../utils.js";

const createFilmCard = ({name, rating, year, duration, genre, poster, description, comments}) => {

  return (
    `<article class="film-card">
      <h3 class="film-card__title">${name}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${year}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${genre}</span>
      </p>
      <img src="./images/posters/${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <a class="film-card__comments">${comments} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>`
  );
};

export default class Film {
  constructor(name, rating, year, duration, genre, poster, description, comments) {
    this._name = name;
    this._rating = rating;
    this._year = year;
    this._duration = duration;
    this._genre = genre;
    this._poster = poster;
    this._description = description;
    this._comments = comments;

    this._element = null;
  }

  getTemplate() {
    return createFilmCard(this._name, this._rating, this._year, this._duration, this._genre, this._poster, this._description, this._comments);
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
