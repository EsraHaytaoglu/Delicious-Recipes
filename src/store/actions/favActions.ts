import { FavRecipe, FavsDispatch } from "../../types/favs";
import api from "../../utils/api";


export const getFavs = () => async (dispatch: FavsDispatch) => {
  dispatch({ type: "GET_FAVS_START" });
  try {
    const response = await api().get<FavRecipe>("/favs");
    dispatch({ type: "GET_FAVS_SUCCESS", payload: response.data });
  } catch {
    dispatch({ type: "GET_FAVS_ERROR" });
  }
};

export const addFavList = (recipe: FavRecipe)  => {
    return { type: "ADD_FAV_LIST", payload: recipe  }
  };

export const deleteFav = (id: FavRecipe['id'] ) => {
  return { type: "DELETE_FAV", payload: id}
}
