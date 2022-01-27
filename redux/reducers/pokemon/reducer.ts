const INITIAL_STATE = {
  pokemonLists: {
    data: [],
    maxPage: 0,
  },
  pokemonDetails: {
    ability: "",
    moves: [],
    type: [],
    height: 0,
    weight: 0,
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
        pokemonDetail: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
