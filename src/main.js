import Rating from "./components/userrating.js";
import Navigation from "./components/navigationmenu.js";
import Menu from "./components/sortmenu.js";
import Statistic from "./components/statistic.js";
import {generateFilms} from "./mock/film.js";
import {genrateDetailsTable} from "./mock/film.js";
import {generateHead} from "./mock/film.js";
import {generatePoster} from "./mock/film.js";
import {generateDescrWide} from "./mock/film.js";
import {generateNavigation} from "./mock/navigation.js";
import {render, RenderPosition} from "./utils/render.js";
import BoardController from "./controllers/board.js";
import DetailController from "./controllers/details.js";
import FilmSection from "./components/sectionfilm.js";

const FILM_COUNT = 5;
const FILM_COUNT_TOP_COMMENTED = 2;

// render header
const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, new Rating(), RenderPosition.BEFOREEND);
// render main
const siteMainElement = document.querySelector(`.main`);
const navigations = generateNavigation();
render(siteMainElement, new Navigation(navigations), RenderPosition.BEFOREEND);
render(siteMainElement, new Menu(), RenderPosition.BEFOREEND);

const films = generateFilms(FILM_COUNT);
const filmsTopCommented = generateFilms(FILM_COUNT_TOP_COMMENTED);

const filmBoard = new FilmSection();
render(siteMainElement, filmBoard, RenderPosition.BEFOREEND);

const boardController = new BoardController(filmBoard);
boardController.render(films, filmsTopCommented);
// render footer
const siteFooterElement = document.querySelector(`.footer`);
const statisticElement = siteFooterElement.querySelector(`.footer__statistics`);
render(statisticElement, new Statistic(), RenderPosition.BEFOREEND);

// render film details

const siteDetailsElement = document.querySelector(`.footer`);
const filmPoster = document.querySelector(`.film-card__poster`);
const table = genrateDetailsTable();
const head = generateHead();
const poster = generatePoster();
const descr = generateDescrWide();
const detailController = new DetailController(siteDetailsElement);

filmPoster.addEventListener(`click`, () => {
  detailController.render(table, head, poster, descr);
});
