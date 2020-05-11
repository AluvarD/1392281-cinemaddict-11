import AbstractComponent from "./abstract-component.js";

const createSectionFilmDetailsDecsr = (descr) => {
  const {description} = descr;
  return (
    `<p class="film-details__film-description">
        ${description}
     </p>`
  );
};

export default class FilmDetailsDescr extends AbstractComponent {
  constructor(descr) {
    super();
    this._descr = descr;
  }

  getTemplate() {
    return createSectionFilmDetailsDecsr(this._descr);
  }
}
