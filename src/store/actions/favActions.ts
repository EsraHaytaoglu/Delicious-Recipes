import { FavRecipe } from "../../types/favs";


export const addFavList = (recipe: FavRecipe)  => {
    return { type: "ADD_FAV_LIST", payload: recipe  }
  };

export const deleteFav = (id: FavRecipe['id'] ) => {
  return { type: "DELETE_FAV", payload: id}
}