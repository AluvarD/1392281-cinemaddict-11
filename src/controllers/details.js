import FilmDetails from "../components/filmdetails.js";
import FilmDetailsTable from "../components/filmdetailstable.js";
import FilmDetailsDescr from "../components/filmdetailsdescr.js";
import FilmDetailsPoster from "../components/filmdetailsposter.js";
import FilmDetailsTittle from "../components/filmdetailstittle.js";
import FilmComments from "../components/filmdetailscomments.js";
import {render, remove, RenderPosition} from "../utils/render.js";

const renderFilmDetailsTable = (filmDetailsTablePosition, table) => {
  const genreDetails = new FilmDetailsTable(table);
  render(filmDetailsTablePosition, genreDetails, RenderPosition.BEFOREEND);
};

const renderFilmDetailsDescr = (filmDetailsTablePosition, descr) => {
  const genreDetails = new FilmDetailsDescr(descr);
  render(filmDetailsTablePosition, genreDetails, RenderPosition.BEFOREEND);
};

const renderFilmDetailsPoster = (filmDetailsPosterPosition, poster) => {
  const genreDetails = new FilmDetailsPoster(poster);
  render(filmDetailsPosterPosition, genreDetails, RenderPosition.AFTERBEGIN);
};

const renderFilmDetailsTittle = (filmDetailsTittlePosition, head) => {
  const genreDetails = new FilmDetailsTittle(head);
  render(filmDetailsTittlePosition, genreDetails, RenderPosition.AFTERBEGIN);
};

const renderFilmComments = (filmDetailsCommentsPosition) => {
  const comments = new FilmComments();
  render(filmDetailsCommentsPosition, comments, RenderPosition.AFTERBEGIN);
};

const renderFilmDetailsBoard = (siteDetailsElement, table, head, poster, descr) => {
  const filmDetails = new FilmDetails();
  render(siteDetailsElement, filmDetails, RenderPosition.BEFOREEND);

  const filmDetailsTittlePosition = document.querySelector(`.film-details__info`);
  head.slice().forEach((name) => {
    renderFilmDetailsTittle(filmDetailsTittlePosition, name);
  });

  const filmDetailsPosterPosition = document.querySelector(`.film-details__info-wrap`);
  poster.slice().forEach((pos) => {
    renderFilmDetailsPoster(filmDetailsPosterPosition, pos);
  });

  const filmDetailsTablePosition = document.querySelector(`.film-details__info`);
  table.slice().forEach((info) => {
    renderFilmDetailsTable(filmDetailsTablePosition, info);
  });

  descr.slice().forEach((desc) => {
    renderFilmDetailsDescr(filmDetailsTablePosition, desc);
  });

  const filmDetailsCommentsPosition = document.querySelector(`.film-details__comments-list`);
  renderFilmComments(filmDetailsCommentsPosition);

  filmDetails.setCloseHandler(() => {
    remove(filmDetails);
  });
};

export default class DetailController {
  constructor(container) {
    this._container = container;
  }

  render(table, head, poster, descr) {
    renderFilmDetailsBoard(this._container, table, head, poster, descr);
  }
}
