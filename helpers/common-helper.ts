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

export const getPokemonDataFromStorage = (data: any) => {
  const limitPerPage = 20;
  const uniqueKey = -1;
  console.log("data", data);
  const ids = Object.keys(data);
  const pokemonList: any[] = [];
  console.log("ids", ids);
  ids.map((id: string) => {
    const pokemonData = data[`${id}`];
    const pokemonNames = pokemonData["names"];
    pokemonNames.map((name: string) => {
      const data = {
        name,
        pokemonName: pokemonData.data.name,
        id: pokemonData.data.id,
        image: pokemonData.data.image,
        uniqueKey: uniqueKey + 1,
      };
      pokemonList.push(data);
    });
  });
  const toReturn = {
    data: pokemonList,
    maxPage: Math.ceil(pokemonList.length / limitPerPage),
  };

  return toReturn;
};
