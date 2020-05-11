import AbstractComponent from "./abstract-component.js";

export const SortType = {
  RATING: `rating`,
  DATE: `date`,
  DEFAULT: `default`,
};

const createSortMenu = () => {
  return (
    `<ul class="sort">
        <li><a href="#" data-sort-type="${SortType.DEFAULT}" class="sort__button sort__button--active">Sort by default</a></li>
        <li><a href="#" data-sort-type="${SortType.DATE}" class="sort__button ">Sort by date</a></li>
        <li><a href="#" data-sort-type="${SortType.RATING}" class="sort__button">Sort by rating</a></li>
     </ul>`
  );
};

export default class Menu extends AbstractComponent {
  constructor() {
    super();

    this._currenSortType = SortType.DEFAULT;
  }

  getTemplate() {
    return createSortMenu();
  }

  getSortType() {
    return this._currenSortType;
  }

  setSortTypeChangeHandler(handler) {
    this.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();

      if (evt.target.tagName !== `A`) {
        return;
      }

      const sortType = evt.target.dataset.sortType;

      if (this._currenSortType === sortType) {
        return;
      }

      this._currenSortType = sortType;

      handler(this._currenSortType);
    });
  }
}
