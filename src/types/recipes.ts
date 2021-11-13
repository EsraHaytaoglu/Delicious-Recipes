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
    ingredients: string,
    servesNumber: Number,
    directions: string,
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
interface DELETE_RECIPE_START {
    type: "DELETE_RECIPE_START"
}
interface DELETE_RECIPE_SUCCES {
   type: "DELETE_RECIPE_SUCCES";
   payload: Recipe['id']; 
}
interface DELETE_RECIPE_ERROR {
   type: "DELETE_RECIPE_ERROR";

}

interface ADD_RECIPE_START {
    type: "ADD_RECIPE_START"
}
interface ADD_RECIPE_SUCCES {
   type: "ADD_RECIPE_SUCCES";
   payload: Recipe; 
}
interface ADD_RECIPE_ERROR {
   type: "ADD_RECIPE_ERROR";

}

export type RecipeAction = 
| GET_RECIPES_START
| GET_RECIPES_SUCCES
| GET_RECIPES_ERROR
| GET_RECIPE_START
| GET_RECIPE_SUCCES
| GET_RECIPE_ERROR
| DELETE_RECIPE_START
| DELETE_RECIPE_SUCCES
| DELETE_RECIPE_ERROR
| ADD_RECIPE_START
| ADD_RECIPE_SUCCES
| ADD_RECIPE_ERROR

export type RecipesDispatch = ThunkDispatch<RecipeState,void,RecipeAction>;