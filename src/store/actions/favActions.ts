import { FavsDispatch } from "../../types/favs";
import { Recipe } from "../../types/recipes";
import api from "../../utils/api";


export const getFavs = () => async (dispatch: FavsDispatch) => {
  dispatch({ type: "GET_FAVS_START" });
  try {
    const response = await api().get<Recipe[]>("/favs");
    dispatch({ type: "GET_FAVS_SUCCESS", payload: response.data });
  } catch {
    dispatch({ type: "GET_FAVS_ERROR" });
  }
};

export const addFavList = (recipe: Recipe)  => async (dispatch: FavsDispatch) =>  {
  dispatch({ type: "ADD_FAV_START" });
    try {
      const response = await api().post<Recipe>("/favs", recipe );
      dispatch({ type: "ADD_FAV_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "ADD_FAV_ERROR" });
      
    }
  };

  export const deleteFav = ( id: Recipe['id']) => async (dispatch: FavsDispatch) => {
    dispatch({ type: "DELETE_FAV_START" });
    try {
      await api().delete<Recipe>("/favs/" + id);
      dispatch({ type: "DELETE_FAV_SUCCESS", payload: id });
    } catch {
      dispatch({ type: "DELETE_FAV_ERROR" });
    }
  };