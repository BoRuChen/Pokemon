import { combineReducers } from "redux";
import PokemonListReducer from "./PokemonListReducer";
import PokemonReducer from "./PokemonReducer";

const Reducers = combineReducers({
    pokemonList : PokemonListReducer,
    pokemon: PokemonReducer
});

export default Reducers;