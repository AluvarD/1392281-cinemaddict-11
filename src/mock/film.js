import {TITLES} from "../const.js";
import {GENRES} from "../const.js";
import {POSTERS} from "../const.js";
import {DESCRIPTIONS} from "../const.js";

const getRandomArrayItem = (array) => {
  const randomIndex = randomIntegerNumber(0, array.length - 1);

  return array[randomIndex];
};

const randomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const FILM_COUNT = 20;

const generateFilms = () => {
  return Array(FILM_COUNT).fill(TITLES).map(() => {
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

export {generateFilms};
