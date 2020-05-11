import AbstractComponent from "./abstract-component.js";

const createSectionTop = () => {
  return (
    `<section class="films-list--extra">
        <h2 class="films-list__title">Top rated</h2>
        <div class="films-list__container"> </div>
      </section>`
  );
};

export default class FilmSectionTop extends AbstractComponent {
  getTemplate() {
    return createSectionTop();
  }
}
