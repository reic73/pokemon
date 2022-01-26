import { combineReducers } from "redux";

import userReducer from "Redux/reducers/user/reducer";
import pokemonReducer from "Redux/reducers/pokemon/reducer";

export default combineReducers({
  user: userReducer,
  pokemon: pokemonReducer
})