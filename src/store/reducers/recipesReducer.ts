import { RecipeAction, RecipeState } from "../../types/recipes";

const defaultState: RecipeState = {
    data: [],
    loading: false,
    error: "",
    currentRecipe: {
      id: 0,
      name: "",
      description: "",
      ingredients: [],
      servesNumber: 0,
      directions: [],
      totalTime: 0,
      image: "",
      author: "",
    },
}

const recipesReducer = (state: RecipeState = defaultState, action: RecipeAction) => {
    switch (action.type) {
        case "GET_RECIPES_START":
          return { ...state, loading: true, error: "" };
        case "GET_RECIPES_SUCCES":
          return { ...state, loading: false, data: action.payload };
        case "GET_RECIPES_ERROR":
          return { ...state, loading: false, error: "Error fetching recipes" };
        case "GET_RECIPE_START":
          return { ...state, loading: true, error: "" };
        case "GET_RECIPE_SUCCES":
          return { ...state, loading: false, currentRecipe: action.payload };
        case "GET_RECIPE_ERROR":
          return { ...state, loading: false, error: "Error fetching recipe" };
        default:
            return state;
    }
}

export default recipesReducer;