import { ThunkDispatch } from "redux-thunk";

export interface RecipeState {
    data: Recipe[];
    loading: boolean;
    error: string;
    currentRecipe: Recipe
}

export interface Recipe {
    id: Number,
    name: string,
    description: string,
    ingredients: Array<string>,
    servesNumber: Number,
    directions: Array<string>,
    totalTime: Number,
    image: any,
    author: string,
}

 interface GET_RECIPES_START {
     type: "GET_RECIPES_START"
}
interface GET_RECIPES_SUCCES {
    type: "GET_RECIPES_SUCCES";
    payload: Recipe; 
}
interface GET_RECIPES_ERROR {
    type: "GET_RECIPES_ERROR";

}
interface GET_RECIPE_START {
    type: "GET_RECIPE_START"
}
interface GET_RECIPE_SUCCES {
   type: "GET_RECIPE_SUCCES";
   payload: Recipe; 
}
interface GET_RECIPE_ERROR {
   type: "GET_RECIPE_ERROR";

}

export type RecipeAction = 
| GET_RECIPES_START
| GET_RECIPES_SUCCES
| GET_RECIPES_ERROR
| GET_RECIPE_START
| GET_RECIPE_SUCCES
| GET_RECIPE_ERROR

export type RecipesDispatch = ThunkDispatch<RecipeState,void,RecipeAction>;