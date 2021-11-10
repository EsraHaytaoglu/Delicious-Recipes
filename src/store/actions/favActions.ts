import { favItem, FavDispatch } from "../../types/favs";
import api from "../../utils/api";


export const addFavList = (id: favItem["favId"]) => async (dispatch: FavDispatch) => {
    dispatch({ type: "ADD_FAV_LIST_START" });
    try {
      const response = await api().post<favItem>("/favs", id);
      dispatch({ type: "ADD_FAV_LIST_SUCCESS", payload: response.data });
    } catch {
      dispatch({ type: "ADD_FAV_LIST_ERROR" });
    }
  };