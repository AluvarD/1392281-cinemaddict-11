import { createUserRating } from "./components/userrating.js";
import { createNavigationMenu } from "./components/navigationmenu.js";
import { createSortMenu } from "./components/sortmenu.js";
import { createFilmCard } from "./components/filmcard.js";
import { createButtonShowMore } from "./components/buttonshowmore.js";
import { createSectionFilm } from "./components/sectionfilm.js";
import { createSectionTop } from "./components/sectiontop.js";
import { createSectionCommented } from "./components/sectioncommented.js";
import { createSectionStatistic } from "./components/statistic.js";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

// собираем header
const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, createUserRating(), `beforeend`);

// собираем main
const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, createNavigationMenu(), `beforeend`);

// sort menu
render(siteMainElement, createSortMenu(), `beforeend`);

// собираем фильмы
const FILM_COUNT = 5;
render(siteMainElement, createSectionFilm(), `beforeend`);
const filmCard = siteMainElement.querySelector(`.films-list__container`);
for (let i = 0; i < FILM_COUNT; i++) {
  render(filmCard, createFilmCard(), `beforeend`);
}

// button
const buttonShowMore = siteMainElement.querySelector(`.films-list`);
render(buttonShowMore, createButtonShowMore(), `beforeend`);

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
for (let i = 0; i < FILM_COUNT_TOP_COMMENTED; i++) {
  render(filmCardTop, createFilmCard(), `beforeend`);
}

// film to commented
const filmCardCommented = siteRatingEelement[1].querySelector(`.films-list__container`);
for (let i = 0; i < FILM_COUNT_TOP_COMMENTED; i++) {
  render(filmCardCommented, createFilmCard(), `beforeend`);
}

// statistic
const siteFooterElement = document.querySelector(`.footer`);
const statisticElement = siteFooterElement.querySelector(`.footer__statistics`);
render(statisticElement, createSectionStatistic(), `beforeend`);
