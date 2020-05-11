import AbstractComponent from "./abstract-component.js";

const createSectionStatistic = () => {
  return (
    `<p>130 291 movies inside</p>`
  );
};

export default class Statistic extends AbstractComponent {
  getTemplate() {
    return createSectionStatistic();
  }
}
