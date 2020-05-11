import AbstractComponent from "./abstract-component.js";

const createSectionFilmDetails = (table) => {
  const {genre, country, director, wrirters, actors, hour, minute, date} = table;

  return (
    `<table class="film-details__table">
    <tr class="film-details__row">
      <td class="film-details__term">Director</td>
      <td class="film-details__cell">${director}</td>
    </tr>
    <tr class="film-details__row">
      <td class="film-details__term">Writers</td>
      <td class="film-details__cell">${wrirters}</td>
    </tr>
    <tr class="film-details__row">
      <td class="film-details__term">Actors</td>
      <td class="film-details__cell">${actors}</td>
    </tr>
    <tr class="film-details__row">
      <td class="film-details__term">Release Date</td>
      <td class="film-details__cell">${date}</td>
    </tr>
    <tr class="film-details__row">
      <td class="film-details__term">Runtime</td>
      <td class="film-details__cell">${hour}h ${minute}m</td>
    </tr>
    <tr class="film-details__row">
      <td class="film-details__term">Country</td>
      <td class="film-details__cell">${country}</td>
    </tr>
    <tr class="film-details__row">
      <td class="film-details__term">Genres</td>
      <td class="film-details__cell">
        <span class="film-details__genre">${genre}</span>
      </td>
    </tr>
  </table>`
  );
};

export default class FilmDetailsTable extends AbstractComponent {
  constructor(table) {
    super();
    this._table = table;
  }

  getTemplate() {
    return createSectionFilmDetails(this._table);
  }
}
