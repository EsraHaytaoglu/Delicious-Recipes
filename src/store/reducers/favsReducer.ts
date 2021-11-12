import { FavAction, FavState } from "../../types/favs";

const defaultState: FavState = {
  data: [],
  loading: false,
  error: "",
};
const favsReducer = (state: FavState = defaultState, action: FavAction) => {
  switch (action.type) {
    case "GET_FAVS_START":
      return { ...state, loading: true, error: "" };
    case "GET_FAVS_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_FAVS_ERROR":
      return { ...state, loading: false, error: "Error fetching favs" };
    case "ADD_FAV_START":
      return { ...state, loading: true, error: "" };
    case "ADD_FAV_SUCCESS":
      return { ...state, loading: false,  data: [action.payload, ...state.data], };
    case "ADD_FAV_ERROR":
      return { ...state, loading: false, error: "Error adding favs" };
      case "DELETE_FAV_START":
        return { ...state, loading: true, error: "" };
      case "DELETE_FAV_SUCCESS":
        return {
          ...state,
          loading: false,
          data: state.data.filter((fav) =>
            fav.id !== action.payload
          ),
        };
      case "DELETE_FAV_ERROR":
        return { ...state, loading: false, error: "Error deleting fav" };
    default:
      return state;
  }
};

export default favsReducer;
