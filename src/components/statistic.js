import {createElement} from "../utils.js";

const createSectionStatistic = () => {
  return (
    `<p>130 291 movies inside</p>`
  );
};

export default class Statistic {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSectionStatistic();
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
