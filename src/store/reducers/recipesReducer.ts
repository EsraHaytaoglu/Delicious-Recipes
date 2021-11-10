import { RecipeAction, RecipeState } from "../../types/recipes";

const defaultState: RecipeState = {
    data: [],
    loading: false,
    error: ""
}

const recipesReducer = (state: RecipeState = defaultState, action: RecipeAction) => {
    switch (action.type) {
        case "GET_RECIPES_START":
          return { ...state, loading: true, error: "" };
        case "GET_RECIPES_SUCCES":
          return { ...state, loading: false, data: action.payload };
        case "GET_RECIPES_ERROR":
          return { ...state, loading: false, error: "Error fetching recipes" };
        default:
            return state;
    }
}

export default recipesReducer;