import { combineReducers } from "redux";



import {  RecipeState } from "../types/recipes";
import {FavState} from "../types/favs"
import recipesReducer from "./reducers/recipesReducer";
import favsReducer from "./reducers/favsReducer";
import { CommentState } from "../types/comments";
import commentsReducer from "./reducers/commentsReducer";

export interface AppState {
    recipes: RecipeState;
    favList: FavState;
    comments: CommentState;
}
const rootReducer = combineReducers({
    recipes: recipesReducer,
    favList: favsReducer,
    comments: commentsReducer,

});

export default rootReducer;

