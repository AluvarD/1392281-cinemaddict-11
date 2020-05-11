import AbstractComponent from "./abstract-component.js";

const createButtonShowMore = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

export default class ButtonShow extends AbstractComponent {
  getTemplate() {
    return createButtonShowMore();
  }

  setClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }
}
