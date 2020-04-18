import { createUserRating } from "./components/userrating.js";
import { createNavigationMenu } from "./components/navigationmenu.js";
import { createSortMenu } from "./components/sortmenu.js";
import { createFilmCard } from "./components/filmcard.js";
import { createButtonShowMore } from "./components/buttonshowmore.js";
import { createSectionFilm } from "./components/sectionfilm.js";
import { createSectionTop } from "./components/sectiontop.js";
import { createSectionCommented } from "./components/sectioncommented.js";
import { createSectionStatistic } from "./components/statistic.js";
import { generateFilms } from "./mock/film.js";
import { generateNavigation } from "./mock/navigation.js";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

// собираем header
const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, createUserRating(), `beforeend`);

// собираем main
const navigations = generateNavigation();
const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, createNavigationMenu(navigations), `beforeend`);

// sort menu
render(siteMainElement, createSortMenu(), `beforeend`);

// собираем место для карточек фильмов
render(siteMainElement, createSectionFilm(), `beforeend`);
const filmCard = siteMainElement.querySelector(`.films-list__container`);


// собираем фильмы
const FILM_COUNT = 20;
const FILM_COUNT_ON_START = 5;
const FILM_COUNT_BY_BUTTON = 5;
let filmCountOnStart = FILM_COUNT_ON_START;
const films = generateFilms(FILM_COUNT);
films.slice(0, filmCountOnStart).forEach((films) => render(filmCard, createFilmCard(films), `beforeend`));

// button
const buttonShowMore = siteMainElement.querySelector(`.films-list`);
render(buttonShowMore, createButtonShowMore(), `beforeend`);
const buttonShowMoreActive = buttonShowMore.querySelector(`.films-list__show-more`);
buttonShowMoreActive.addEventListener(`click`, () => {
  const prevFilmCount = filmCountOnStart;
  filmCountOnStart = filmCountOnStart + FILM_COUNT_BY_BUTTON;
  films.slice(prevFilmCount, filmCountOnStart).forEach((films) => render(filmCard, createFilmCard(films), `beforeend`));

  if (filmCountOnStart >= films.length) {
    buttonShowMoreActive.remove();
  }
});

// top
const filmListElemetTop = siteMainElement.querySelector(`.films`);
render(filmListElemetTop, createSectionTop(), `beforeend`);

// comented
const filmListElemetCommented = siteMainElement.querySelector(`.films`);
render(filmListElemetCommented, createSectionCommented(), `beforeend`);

// film to top
const FILM_COUNT_TOP_COMMENTED = 2;
const siteRatingEelement = document.querySelectorAll(`.films-list--extra`)
const filmCardTop = siteRatingEelement[0].querySelector(`.films-list__container`);
films.slice(0, FILM_COUNT_TOP_COMMENTED).forEach((films) => render(filmCardTop, createFilmCard(films), `beforeend`));

// film to commented
const filmCardCommented = siteRatingEelement[1].querySelector(`.films-list__container`);
films.slice(0, FILM_COUNT_TOP_COMMENTED).forEach((films) => render(filmCardCommented, createFilmCard(films), `beforeend`));

// statistic
const siteFooterElement = document.querySelector(`.footer`);
const statisticElement = siteFooterElement.querySelector(`.footer__statistics`);
render(statisticElement, createSectionStatistic(), `beforeend`);
