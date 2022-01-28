export interface IPokemonDetails {
  ability: string;
  moves: string[];
  types: string[];
  weight: number;
  height: number;
  name: string;
  image: string;
  id: number;
}

export interface IPokemonLists {
  data: {
    id: number;
    image: string;
    name: string;
    owned: number;
    url: string;
  }[];
  maxPage: number;
}

const INITIAL_STATE = {
  pokemonLists: {
    data: [],
    maxPage: 0,
  },
  pokemonDetails: {
    ability: "",
    moves: [],
    types: [],
    weight: 0,
    height: 0,
    name: "",
    image: "",
    id: 0,
  },
};

const pokemonReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "RETRIEVE_POKEMON_LIST":
      return {
        ...state,
        pokemonLists: action.payload,
      };
    case "RETRIEVE_POKEMON_DETAILS":
      return {
        ...state,
        pokemonDetails: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
