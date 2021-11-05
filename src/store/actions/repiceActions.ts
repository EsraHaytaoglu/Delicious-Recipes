import { Recipe, RecipesDispatch } from "../../types/recipes";
import api from "../../utils/api";

export const getRecipes = () => async (dispatch: RecipesDispatch) => {
    dispatch({ type: "GET_RECIPES_START" });
    try {
      const response = await api().get<Recipe[]>("/feeds/list");
      dispatch({ type: "GET_RECIPES_SUCCES", payload: response.data });
    } catch {
      dispatch({ type: "GET_RECIPES_ERROR" });
    }
  };
  