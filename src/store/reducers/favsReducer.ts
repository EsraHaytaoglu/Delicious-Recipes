import { FavAction, FavState } from "../../types/favs";

const defaultState: FavState = {
  data: [],
};
const favsReducer = (state: FavState = defaultState, action: FavAction) => {
  switch (action.type) {
    case "ADD_FAV_LIST":
      return { ...state, data:[...state.data, action.payload ]};
    case "DELETE_FAV":
      return { data:state.data.filter((recipe) => recipe.id !== action.payload)};
    default:
      return state;
  }
};

export default favsReducer;
