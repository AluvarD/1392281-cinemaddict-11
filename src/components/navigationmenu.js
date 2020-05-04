import {createElement} from "../utils.js";

const createNavigationMarkup = (navigation, isActive) => {
  const {name, count} = navigation;
  const countInfo = (name === `All`) ? `` : `<span class="main-navigation__item-count">${count}</span>`;
  const activeCheck = isActive ? `--active` : ``;

  return (
    `<a href="#${name.toLowerCase()}" class="main-navigation__item main-navigation__item${activeCheck}">${name} movies${countInfo}</a>`
  );
};

const createNavigationMenu = (navigations) => {
  const navigationMurkup = navigations.map((it, i) => createNavigationMarkup(it, i === 0)).join(`\n`);

  return (
    `<nav class="main-navigation">
        <div class="main-navigation__items">
          ${navigationMurkup}
        </div>
        <a href="#stats" class="main-navigation__additional">Stats</a>
      </nav>`
  );
};

export default class Navigation {
  constructor(navigations) {
    this._navigations = navigations;

    this._element = null;
  }

  getTemplate() {
    return createNavigationMenu(this._navigations);
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
