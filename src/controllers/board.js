import Film from "../components/filmcard.js";
import ButtonShow from "../components/buttonshowmore.js";
import FilmSectionTop from "../components/sectiontop.js";
import FilmSectionCommented from "../components/sectioncommented.js";
import {render, remove, RenderPosition} from "../utils/render.js";
import Menu, {SortType} from "../components/sortmenu.js";

// render films
const FILM_COUNT_TOP_COMMENTED = 2;
const FILM_COUNT_ON_START = 5;
const FILM_COUNT_BY_BUTTON = 5;
const siteMainElement = document.querySelector(`.main`);


const renderFilm = (filmElement, film) => {
  const filmCardComponent = new Film(film);
  render(filmElement, filmCardComponent, RenderPosition.BEFOREEND);
};

const getSortedFilms = (films, sortType, from, to) => {
  let sortedFilms = [];
  const showingFilms = films.slice();

  switch (sortType) {
    case SortType.DATE:
      sortedFilms = showingFilms.sort((a, b) => a.year - b.year);
      break;
    case SortType.RATING:
      sortedFilms = showingFilms.sort((a, b) => a.rating - b.rating);
      break;
    case SortType.DEFAULT:
      sortedFilms = showingFilms;
      break;
  }

  return sortedFilms.slice(from, to);
};

export default class BoardController {
  constructor(container) {
    this._showMoreButton = new ButtonShow();
    this._sortComponent = new Menu();
    this._container = container;
  }

  render(films, filmsTopCommented) {

    const showMoreButton = () => {
      const buttonPosition = container.querySelector(`.films-list`);
      render(buttonPosition, this._showMoreButton, RenderPosition.BEFOREEND);
      this._showMoreButton.setClickHandler(() => {
        const prevFilmCount = filmCountAtWork;
        filmCountAtWork = filmCountAtWork + FILM_COUNT_BY_BUTTON;

        films.slice(prevFilmCount, filmCountAtWork).forEach((film) => {
          renderFilm(filmElement, film);
        });

        if (filmCountAtWork >= films.length) {
          remove(this._showMoreButton);
        }
      });
    };

    const container = this._container.getElement();

    render(container, this._sortComponent, RenderPosition.AFTERBEGIN);

    let filmCountAtWork = FILM_COUNT_ON_START;
    const filmElement = siteMainElement.querySelector(`.films-list__container`);

    films.slice(0, filmCountAtWork).forEach((film) => {
      renderFilm(filmElement, film);
    });

    // render buttonshowmore
    showMoreButton();

    this._sortComponent.setSortTypeChangeHandler((sortType) => {
      filmCountAtWork = FILM_COUNT_BY_BUTTON;

      const sortedFilms = getSortedFilms(films, sortType, 0, filmCountAtWork);

      sortedFilms.slice(0, filmCountAtWork).forEach((film) => {
        renderFilm(filmElement, film);
      });

      showMoreButton();
    });

    // render top and commented film elements
    const filmListElemetTop = siteMainElement.querySelector(`.films`);
    const filmListElemetCommented = siteMainElement.querySelector(`.films`);
    const filmSectionTop = new FilmSectionTop();
    const filmSectionCommented = new FilmSectionCommented();
    render(filmListElemetTop, filmSectionTop, RenderPosition.BEFOREEND);
    render(filmListElemetCommented, filmSectionCommented, RenderPosition.BEFOREEND);

    const siteRatingEelement = document.querySelectorAll(`.films-list--extra`);
    const filmCardTop = siteRatingEelement[0].querySelector(`.films-list__container`);
    const filmCardCommented = siteRatingEelement[1].querySelector(`.films-list__container`);

    filmsTopCommented.slice(0, FILM_COUNT_TOP_COMMENTED).forEach((film) => {
      renderFilm(filmCardTop, film);
    });

    filmsTopCommented.slice(0, FILM_COUNT_TOP_COMMENTED).forEach((film) => {
      renderFilm(filmCardCommented, film);
    });
  }
}
