import Rating from "./components/userrating.js";
import Navigation from "./components/navigationmenu.js";
import Menu from "./components/sortmenu.js";
import Film from "./components/filmcard.js";
import ButtonShow from "./components/buttonshowmore.js";
import FilmSection from "./components/sectionfilm.js";
import FilmSectionTop from "./components/sectiontop.js";
import FilmSectionCommented from "./components/sectioncommented.js";
import Statistic from "./components/statistic.js";
import {generateFilms} from "./mock/film.js";
import {generateNavigation} from "./mock/navigation.js";
import {render, RenderPosition} from "./utils.js";

// render films
const FILM_COUNT = 5;
const FILM_COUNT_TOP_COMMENTED = 2;
const FILM_COUNT_ON_START = 5;
const FILM_COUNT_BY_BUTTON = 5;

const renderFilm = (filmElement, film) => {
  const filmCardComponent = new Film(film);
  render(filmElement, filmCardComponent.getElement(), RenderPosition.BEFOREEND);
};

const renderFilmBoard = (filmBoard, films, filmsTopCommented) => {
  // render main film elements

  let filmCountAtWork = FILM_COUNT_ON_START;

  films.slice(0, filmCountAtWork).forEach((film) => {
    renderFilm(filmElement, film);
  });

  // render buttonshowmore
  const showMoreButton = new ButtonShow();
  const buttonPosition = filmBoard.getElement().querySelector(`.films-list`);
  render(buttonPosition, showMoreButton.getElement(), RenderPosition.BEFOREEND);

  showMoreButton.getElement().addEventListener(`click`, () => {
    const prevFilmCount = filmCountAtWork;
    filmCountAtWork = filmCountAtWork + FILM_COUNT_BY_BUTTON;

    films.slice(prevFilmCount, filmCountAtWork).forEach((film) => {
      renderFilm(filmElement, film);
    });

    if (filmCountAtWork >= films.length) {
      showMoreButton.getElement().remove();
      showMoreButton.removeElement();
    }
  });

  // render top and commented film elements
  const filmListElemetTop = siteMainElement.querySelector(`.films`);
  const filmListElemetCommented = siteMainElement.querySelector(`.films`);
  render(filmListElemetTop, new FilmSectionTop().getElement(), RenderPosition.BEFOREEND);
  render(filmListElemetCommented, new FilmSectionCommented().getElement(), RenderPosition.BEFOREEND);

  const siteRatingEelement = document.querySelectorAll(`.films-list--extra`)
  const filmCardTop = siteRatingEelement[0].querySelector(`.films-list__container`);
  const filmCardCommented = siteRatingEelement[1].querySelector(`.films-list__container`);

  filmsTopCommented.slice(0, FILM_COUNT_TOP_COMMENTED).forEach((film) => {
    renderFilm(filmCardTop, film);
  });

  filmsTopCommented.slice(0, FILM_COUNT_TOP_COMMENTED).forEach((film) => {
    renderFilm(filmCardCommented, film);
  });
};

// render header
const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, new Rating().getElement(), RenderPosition.BEFOREEND);
// render main
const siteMainElement = document.querySelector(`.main`);
const navigations = generateNavigation();
render(siteMainElement, new Navigation(navigations).getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new Menu().getElement(), RenderPosition.BEFOREEND);

const films = generateFilms(FILM_COUNT);
const filmsTopCommented = generateFilms(FILM_COUNT_TOP_COMMENTED);

const filmBoard = new FilmSection();
render(siteMainElement, filmBoard.getElement(), RenderPosition.BEFOREEND);
const filmElement = siteMainElement.querySelector(`.films-list__container`);

renderFilmBoard(filmBoard, films, filmsTopCommented);

// render footer
const siteFooterElement = document.querySelector(`.footer`);
const statisticElement = siteFooterElement.querySelector(`.footer__statistics`);
render(statisticElement, new Statistic().getElement(), RenderPosition.BEFOREEND);
