import { FavAction, FavState } from "../../types/favs";

const defaultState: FavState = {
    data: [],
    loading: false,
    error: "",
}
const favsReducer = (state: FavState = defaultState, action: FavAction) => {
    switch (action.type) {
        case "ADD_FAV_LIST_START":
            return { ...state, loading: true, error: "" };
          case "ADD_FAV_LIST_SUCCESS":
            return { ...state, loading: false, data: action.payload };
          case "ADD_FAV_LIST_ERROR":
            return { ...state, loading: false, error: "Error adding fav list." };

        default:
            return state;
    }
}

export default favsReducer;