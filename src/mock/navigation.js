const navigationNames = [
  `All`, `Watchlist`, `History`, `Favorites`
];

const generateNavigation = () => {
  return navigationNames.map((id) => {
    return {
      name: id,
      count: Math.floor(Math.random() * 10),
    };
  });
};

export { generateNavigation };
