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

export const isJson = (str: string): boolean => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }

  return true;
};

export const getSessionStorageData = (): { [index: string]: any } => {
  const sessionKey = "myPokemon";
  let toReturn = {};
  const session = sessionStorage.getItem(sessionKey);
  if (session && isJson(session)) {
    toReturn = JSON.parse(session);
  }

  return toReturn;
};

export const getOwnedPokemonOuantity = (id: number, data: any): number => {
  let toReturn = 0;
  const isOwned = data[`${id}`] != undefined;
  if (isOwned) {
    const quantity = data[`${id}`].names.length;
    toReturn = quantity;
  }

  return toReturn;
};

export const getPokemonAbilities = (data: any): string => {
  const numberOfAbilities = 1;

  return slugToCapitalizeEachWord(
    data[`${numberOfAbilities - 1}`].ability.name
  );
};

export const getPokemonMoves = (data: any): string[] => {
  const numberOfMoves = 3;
  const moveLists: string[] = [];
  const moves = data.slice(0, numberOfMoves);
  moves.map((move: any) => {
    const movesName = slugToCapitalizeEachWord(move.move.name);
    moveLists.push(movesName);
  });

  return moveLists;
};

export const getPokemonTypes = (data: any): string[] => {
  const numberOfTypes = 3;
  const typeLists: string[] = [];
  const types = data.slice(0, numberOfTypes);
  types.map((type: any) => {
    const typesName = slugToCapitalizeEachWord(type.type.name);
    typeLists.push(typesName);
  });

  return typeLists;
};

export const getPokemonDataFromStorage = (data: any, page: number) => {
  const limitPerPage = 20;
  const offset = (page - 1) * 20;
  let iteration = 0;
  const ids = Object.keys(data);
  const pokemonList: any[] = [];

  ids.map((id: string) => {
    const pokemonData = data[`${id}`];
    const pokemonNames = pokemonData["names"];
    pokemonNames.map((name: string) => {
      const data = {
        name,
        pokemonName: pokemonData.data.name,
        id: pokemonData.data.id,
        image: pokemonData.data.image,
      };
      pokemonList.push(data);
      iteration++;
    });
  });

  const end = iteration - offset < limitPerPage ? iteration : limitPerPage;
  const toReturn = {
    data: pokemonList.slice(offset, end),
    maxPage: Math.ceil(pokemonList.length / limitPerPage),
  };

  return toReturn;
};
