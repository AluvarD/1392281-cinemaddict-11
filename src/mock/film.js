import {TITLES} from "../const.js";
import {GENRES} from "../const.js";
import {POSTERS} from "../const.js";
import {DESCRIPTIONS} from "../const.js";
import {COUNTRY} from "../const.js";
import {ACTORS} from "../const.js";
import {WRITERS} from "../const.js";
import {DIRECTOR} from "../const.js";
import {DATE} from "../const.js";
import {DESCRWIDE} from "../const.js";

const getRandomArrayItem = (array) => {
  const randomIndex = randomIntegerNumber(0, array.length - 1);

  return array[randomIndex];
};

const randomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const FILM_COUNT = 20;

const generateFilms = () => {
  return Array.from(Array(FILM_COUNT).keys()).map(() => {
    return {
      name: getRandomArrayItem(TITLES),
      rating: Math.floor(Math.random() * 9) + `.` + Math.floor(Math.random() * 9),
      year: randomIntegerNumber(1950, 2019),
      duration: Math.floor(Math.random() * 250),
      genre: getRandomArrayItem(GENRES),
      poster: getRandomArrayItem(POSTERS),
      description: getRandomArrayItem(DESCRIPTIONS),
      comments: Math.floor(Math.random() * 100),
    };
  });
};

const genrateDetailsTable = () => {
  return Array.from(Array(1).keys()).map(() => {
    return {
      country: getRandomArrayItem(COUNTRY),
      genre: getRandomArrayItem(GENRES),
      actors: getRandomArrayItem(ACTORS),
      wrirters: getRandomArrayItem(WRITERS),
      director: getRandomArrayItem(DIRECTOR),
      hour: Math.floor(Math.random() * 23),
      minute: Math.floor(Math.random() * 59),
      date: randomIntegerNumber(1, 31) + ` ` + getRandomArrayItem(DATE) + ` ` + randomIntegerNumber(1950, 2019),
    };
  });
};

const generateHead = () => {
  return Array.from(Array(1).keys()).map(() => {
    return {
      name: getRandomArrayItem(TITLES),
      rating: Math.floor(Math.random() * 9) + `.` + Math.floor(Math.random() * 9),
    };
  });
};

const generatePoster = () => {
  return Array.from(Array(1).keys()).map(() => {
    return {
      poster: getRandomArrayItem(POSTERS),
    };
  });
};

const generateDescrWide = () => {
  return Array.from(Array(1).keys()).map(() => {
    return {
      description: getRandomArrayItem(DESCRWIDE),
    };
  });
};

export {generateFilms};
export {genrateDetailsTable};
export {generateHead};
export {generatePoster};
export {generateDescrWide};
