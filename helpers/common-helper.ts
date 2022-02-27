export const SESSION_KEY = "myPokemon";
export const PER_PAGE = 20;

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

export const capitalizeWord = (wordList: string[]) => {
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
  let toReturn = {};
  const session = sessionStorage.getItem(SESSION_KEY);
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

export const getPokemonDataFromStorage = (
  data: any,
  page: number,
  perPage: number = PER_PAGE
) => {
  const offset = (page - 1) * perPage;
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

  const end = iteration - offset < perPage ? iteration : perPage;
  const toReturn = {
    data: pokemonList.slice(offset, end),
    maxPage: Math.ceil(pokemonList.length / perPage),
    totalOwned: pokemonList.length,
  };

  return toReturn;
};

export const setNewPokemonToStorage = (
  userData: any,
  pokemonData: any,
  name: string
) => {
  userData[`${pokemonData.id}`] = {
    names: [`${name}`],
    data: {
      id: pokemonData.id,
      name: pokemonData.name,
      image: pokemonData.image,
    },
  };
  const toBeStored = JSON.stringify(userData);
  sessionStorage.setItem(SESSION_KEY, toBeStored);

  return;
};

export const setExistingPokemonToStorage = (
  userData: any,
  pokemonData: any,
  name: string
) => {
  const existingPokemonNames = userData[`${pokemonData.id}`]["names"];
  existingPokemonNames.push(name);
  userData[`${pokemonData.id}`]["names"] = existingPokemonNames;
  const toBeStored = JSON.stringify(userData);
  sessionStorage.setItem(SESSION_KEY, toBeStored);

  return;
};

export const releasePokemon = (
  userData: any,
  releasedPokemon: any,
  page: number,
  perPage:number
) => {
  const pokemonNames = userData[`${releasedPokemon.id}`]["names"];
  const updatedPokemonNames = pokemonNames.filter(
    (value: string) => value != releasedPokemon.name
  );
  userData[`${releasedPokemon.id}`]["names"] = updatedPokemonNames;

  const toBeStored = JSON.stringify(userData);
  sessionStorage.setItem(SESSION_KEY, toBeStored);

  const sessionData = getSessionStorageData();

  return getPokemonDataFromStorage(sessionData, page, perPage);
};

export const getUrl = (url: string): string => {
  const isLocal = process.env.NEXT_PUBLIC_ENV == "local";
  const projectName = process.env.NEXT_PUBLIC_PROJECT_NAME;
  if (!isLocal) {
    return "/" + projectName + url;
  }

  return url;
};
