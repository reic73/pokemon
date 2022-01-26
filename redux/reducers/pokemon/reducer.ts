const INITIAL_STATE = {
  pokemonLists:null
}
const pokemonReducer = (state=INITIAL_STATE, action:any)=>{
  switch(action.type){
    case 'RETRIEVE_POKEMON_LIST':
      return {
        ...state,
        pokemonLists: action.payload
      }
    default:
      return state;
  }
}

export default pokemonReducer