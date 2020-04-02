"use strict";

const FILM_COUNT = 5;
const FILM_COUNT_TOP_COMMENTED = 2;

const createUserRating = () => {
    return (
        `<section class="header__profile profile">
        <p class="profile__rating">Movie Buff</p>
        <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
      </section>`
    );
};

const createNavigationMenu = () => {
    return (
        `<nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
        <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
        <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
    );
};

const createSortMenu = () => {
    return (
        `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`
    );
};

const createFilmCard = () => {
    return (
        `<article class="film-card">
      <h3 class="film-card__title">The Dance of Life</h3>
      <p class="film-card__rating">8.3</p>
      <p class="film-card__info">
        <span class="film-card__year">1929</span>
        <span class="film-card__duration">1h 55m</span>
        <span class="film-card__genre">Musical</span>
      </p>
      <img src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
      <p class="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…</p>
      <a class="film-card__comments">5 comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>`
    );
};

const createButtonShowMore = () => {
    return (
        `<button class="films-list__show-more">Show more</button>`
    );
};

const createSectionFilm = () => {
    return (
        `<section class="films">
      <section class="films-list">
        <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

        <div class="films-list__container">

        </div>
     </section>`
    );
};

const createSectionTop = () => {
    return (
        `<section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>

      <div class="films-list__container">

      </div>
    </section>`
    );
};

const createSectionCommented = () => {
    return (
        `<section class="films-list--extra">
      <h2 class="films-list__title">Most commented</h2>

      <div class="films-list__container">

      </div>
    </section>
      `
    );
};

const createSectionStatistic = () => {
    return (
        `<p>130 291 movies inside</p>`
    );
};

const render = (container, template, place) => {
    container.insertAdjacentHTML(place, template);
};

// собираем header
const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, createUserRating(), `beforeend`);

// собираем main
const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, createNavigationMenu(), `beforeend`);

//sort menu
render(siteMainElement, createSortMenu(), `beforeend`);

// собираем фильмы
const filmListElemet = siteMainElement.querySelector(`.main`);
render(siteMainElement, createSectionFilm(), `beforeend`);
const filmCard = siteMainElement.querySelector(`.films-list__container`);
for (let i = 0; i < FILM_COUNT; i++) {
    render(filmCard, createFilmCard(), `beforeend`);
}

// button
const buttonShowMore = siteMainElement.querySelector(`.films-list`);
render(buttonShowMore, createButtonShowMore(), `beforeend`);

//top
const filmListElemetTop = siteMainElement.querySelector(`.films`);
render(filmListElemetTop, createSectionTop(), `beforeend`);

//comented
const filmListElemetCommented = siteMainElement.querySelector(`.films`);
render(filmListElemetCommented, createSectionCommented(), `beforeend`);

//film to top
const siteRatingEelement = document.querySelectorAll(`.films-list--extra`)
const filmCardTop = siteRatingEelement[0].querySelector(`.films-list__container`);
for (let i = 0; i < FILM_COUNT_TOP_COMMENTED; i++) {
    render(filmCardTop, createFilmCard(), `beforeend`);
}

//film to commented
const filmCardCommented = siteRatingEelement[1].querySelector(`.films-list__container`);
for (let i = 0; i < FILM_COUNT_TOP_COMMENTED; i++) {
    render(filmCardCommented, createFilmCard(), `beforeend`);
}

//statistic
const siteFooterElement = document.querySelector(`.footer`);
console.log(siteFooterElement);
const statisticElement = siteFooterElement.querySelector(`.footer__statistics`);
render(statisticElement, createSectionStatistic(), `beforeend`);