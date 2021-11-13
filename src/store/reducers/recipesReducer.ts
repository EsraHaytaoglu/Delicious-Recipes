import { RecipeAction, RecipeState } from "../../types/recipes";

const defaultState: RecipeState = {
    data: [],
    loading: false,
    error: "",
    currentRecipe: {
      id: 0,
      name: "",
      description: "",
      ingredients: "",
      servesNumber: 0,
      directions: "",
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
        case "DELETE_RECIPE_START":
          return { ...state, loading: true, error: "" };
        case "DELETE_RECIPE_SUCCES":
          return { ...state, loading: false, data: state.data.filter((recipe) =>
            recipe.id !== action.payload) };
        case "DELETE_RECIPE_ERROR":
          return { ...state, loading: false, error: "Error deleting recipe" };
        case "ADD_RECIPE_START":
          return { ...state, loading: true, error: "" };
        case "ADD_RECIPE_SUCCES":
          return { ...state, loading: false,  data: [action.payload, ...state.data], };
        case "ADD_RECIPE_ERROR":
          return { ...state, loading: false, error: "Error adding recipe" };
        default:
            return state;
    }
}

export default recipesReducer;