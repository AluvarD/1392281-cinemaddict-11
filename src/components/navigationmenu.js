const createNavigationMarkup = (navigation, isActive) => {
  const {name, count} = navigation;
  const tagName = (name === `All`);
  const nonAllTag = tagName ? `` : `<span class="main-navigation__item-count">${count}</span>`;

  return (
    `<a href="#${name.toLowerCase()}" class="main-navigation__item main-navigation__item${isActive ? `--active` : ``}">${name} movies${nonAllTag}</a>`
  );
};

export const createNavigationMenu = (navigations) => {
  const navigationMurkup = navigations.map((it, i) => createNavigationMarkup(it, i === 0)).join(`\n`);

  return (
    `<nav class="main-navigation">
        <div class="main-navigation__items">
          ${navigationMurkup}
        </div>
        <a href="#stats" class="main-navigation__additional">Stats</a>
      </nav>`
  );
};
