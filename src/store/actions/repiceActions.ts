import { Recipe, RecipesDispatch } from "../../types/recipes";
import api from "../../utils/api";

export const getRecipes = () => async (dispatch: RecipesDispatch) => {
    dispatch({ type: "GET_RECIPES_START" });
    try {
      const response = await api().get<Recipe>("/recipes");
      dispatch({ type: "GET_RECIPES_SUCCES", payload: response.data });
    } catch {
      dispatch({ type: "GET_RECIPES_ERROR" });
    }
  };

  export const getRecipe = (id: number) => async (dispatch: RecipesDispatch) => {
    dispatch({ type: "GET_RECIPE_START" });
    try {
      const response = await api().get<Recipe>("/recipes/" + id );
      dispatch({ type: "GET_RECIPE_SUCCES", payload: response.data });
    } catch {
      dispatch({ type: "GET_RECIPE_ERROR" });
    }
  };

  export const deleteRecipe = (id: Recipe['id']) => async (dispatch: RecipesDispatch) => {
    dispatch({ type: "GET_RECIPE_START" });
    try {
      const response = await api().delete<Recipe>("/recipes/" + id );
      dispatch({ type: "GET_RECIPE_SUCCES", payload: response.data });
    } catch {
      dispatch({ type: "GET_RECIPE_ERROR" });
    }
  };

  
  export const addRecipe = (recipe: Recipe ) => async (dispatch: RecipesDispatch) => {
    dispatch({ type: "ADD_RECIPE_START" });
    try {
      const response = await api().post<Recipe>(`/recipes`, recipe);
      dispatch({ type: "ADD_RECIPE_SUCCES", payload: response.data });
    } catch {
      dispatch({ type: "ADD_RECIPE_ERROR" });
    }
  };
  