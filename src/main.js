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
import {genrateDetailsTable} from "./mock/film.js";
import {generateHead} from "./mock/film.js";
import {generatePoster} from "./mock/film.js";
import {generateDescrWide} from "./mock/film.js";
import {generateNavigation} from "./mock/navigation.js";
import {render, RenderPosition} from "./utils.js";
import FilmDetails from "./components/filmdetails.js";
import FilmDetailsTable from "./components/filmdetailstable.js";
import FilmDetailsDescr from "./components/filmdetailsdescr.js";
import FilmDetailsPoster from "./components/filmdetailsposter.js";
import FilmDetailsTittle from "./components/filmdetailstittle.js";
import FilmComments from "./components/filmdetailscomments.js";

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

// render film details
const renderFilmDetailsTable = (filmDetailsTablePosition, table) => {
  const genreDetails = new FilmDetailsTable(table);
  render(filmDetailsTablePosition, genreDetails.getElement(), RenderPosition.BEFOREEND);
};

const renderFilmDetailsDescr = (filmDetailsTablePosition, descr) => {
  const genreDetails = new FilmDetailsDescr(descr);
  render(filmDetailsTablePosition, genreDetails.getElement(), RenderPosition.BEFOREEND);
};

const renderFilmDetailsPoster = (filmDetailsPosterPosition, poster) => {
  const genreDetails = new FilmDetailsPoster(poster);
  render(filmDetailsPosterPosition, genreDetails.getElement(), RenderPosition.AFTERBEGIN);
};

const renderFilmDetailsTittle = (filmDetailsTittlePosition, head) => {
  const genreDetails = new FilmDetailsTittle(head);
  render(filmDetailsTittlePosition, genreDetails.getElement(), RenderPosition.AFTERBEGIN);
};

const renderFilmComments = (filmDetailsCommentsPosition) => {
  const comments = new FilmComments();
  render(filmDetailsCommentsPosition, comments.getElement(), RenderPosition.AFTERBEGIN);
};

const renderFilmDetailsBoard = (siteDetailsElement, table, head, poster, descr) => {
  const filmDetails = new FilmDetails();
  render(siteDetailsElement, filmDetails.getElement(), RenderPosition.BEFOREEND);

  const filmDetailsTittlePosition = document.querySelector(`.film-details__info`);
  head.slice().forEach((name) => {
    renderFilmDetailsTittle(filmDetailsTittlePosition, name);
  });

  const filmDetailsPosterPosition = document.querySelector(`.film-details__info-wrap`);
  poster.slice().forEach((pos) => {
    renderFilmDetailsPoster(filmDetailsPosterPosition, pos);
  });

  const filmDetailsTablePosition = document.querySelector(`.film-details__info`);
  table.slice().forEach((info) => {
    renderFilmDetailsTable(filmDetailsTablePosition, info);
  });

  descr.slice().forEach((desc) => {
    renderFilmDetailsDescr(filmDetailsTablePosition, desc);
  });

  const filmDetailsCommentsPosition = document.querySelector(`.film-details__comments-list`);
  renderFilmComments(filmDetailsCommentsPosition);

  const filmDetailsCloseButton = document.querySelector(`.film-details__close-btn`);

  filmDetailsCloseButton.addEventListener(`click`, () => {
    filmDetails.getElement().remove();
    filmDetails.removeElement();
  });
};

const siteDetailsElement = document.querySelector(`.footer`);
const filmPoster = document.querySelector(`.film-card__poster`);
const table = genrateDetailsTable();
const head = generateHead();
const poster = generatePoster();
const descr = generateDescrWide();
console.log(poster);
console.log(table);
console.log(head);

filmPoster.addEventListener(`click`, () => {
  renderFilmDetailsBoard(siteDetailsElement, table, head, poster, descr);
});
