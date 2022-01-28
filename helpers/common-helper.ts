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

export const slugToCapitalizeEachWord = (slug: string) => {
  const wordList: string[] = slug.split("-");

  return capitalizeWord(wordList);
};

export const capitalizeEachWord = (words: string) => {
  const wordList: string[] = words.split(" ");

  return capitalizeWord(wordList);
};

const capitalizeWord = (wordList: string[]) => {
  const length: number = wordList.length;
  let toReturn = "";
  wordList.map((word, index: number) => {
    const isLastIndex = index == length - 1;
    const space = isLastIndex ? "" : " ";
    toReturn += word[0].toUpperCase() + word.slice(1) + space;
  });

  return toReturn;
};

export const isJson = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }

  return true;
};

export const getPokemonDataFromStorage = (data: any, page: number) => {
  const limitPerPage = 20;
  const offset = (page - 1) * 20;
  let uniqueKey = 0;
  const ids = Object.keys(data);
  const pokemonList: any[] = [];

  ids.map((id: string) => {
    const pokemonData = data[`${id}`];
    const pokemonNames = pokemonData["names"];
    pokemonNames.map((name: string) => {
      uniqueKey++;
      const data = {
        name,
        pokemonName: pokemonData.data.name,
        id: pokemonData.data.id,
        image: pokemonData.data.image,
        uniqueKey,
      };
      pokemonList.push(data);
    });
  });

  const end = uniqueKey - offset < limitPerPage ? uniqueKey : limitPerPage;
  const toReturn = {
    data: pokemonList.slice(offset, end),
    maxPage: Math.ceil(pokemonList.length / limitPerPage),
  };

  return toReturn;
};
