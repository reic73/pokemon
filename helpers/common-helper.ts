export const pokemonNumberHelper = (data: number) => {
  const isUnit = data / 10 < 1;
  const isTens = data / 100 < 1;

  if (isUnit) {
    return `#00${data}`;
  } else if (isTens) {
    return `#0${data}`;
  } else {
    return `#${data}`;
  }
};
