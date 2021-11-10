import { combineReducers } from "redux";



import {  RecipeState } from "../types/recipes";
import {FavState} from "../types/favs"
import recipesReducer from "./reducers/recipesReducer";
import favsReducer from "./reducers/favsReducer";

export interface AppState {
    recipes: RecipeState;
    favList: FavState;
}
const rootReducer = combineReducers({
    recipes: recipesReducer,
    favList: favsReducer,

});

export default rootReducer;

