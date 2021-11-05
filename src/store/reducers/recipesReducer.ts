import { Recipe, RecipeAction, RecipeState } from "../../types/recipes";

const defaultState: RecipeState = {
    data: {} as Recipe,
    loading: false,
    error: ""
}

const recipesReducer = (state: RecipeState = defaultState, action: RecipeAction) => {
    return state;
}

export default recipesReducer;