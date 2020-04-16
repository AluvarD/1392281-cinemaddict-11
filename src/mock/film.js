import { TITTLE } from "../const.js";
import { GENRE } from "../const.js";
import { POSTER } from "../const.js";
import { DESCRIPTION } from "../const.js";

const getRandomArrayItem = (array) => {
  const randomIndex = randomIntegerNumber(0, array.length);

  return array[randomIndex];
};

const randomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const generateFilms = () => {
  return TITTLE.map((it) => {
    return {
      name: it,
      rating: Math.floor(Math.random() * 9) + `.` + Math.floor(Math.random() * 9),
      year: randomIntegerNumber(1950, 2019),
      duration: Math.floor(Math.random() * 250),
      genre: getRandomArrayItem(GENRE),
      poster: getRandomArrayItem(POSTER),
      description: getRandomArrayItem(DESCRIPTION),
      comments: Math.floor(Math.random() * 100),
    };
  });
};

export { generateFilms };
