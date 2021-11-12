import { ThunkDispatch } from "redux-thunk";



export interface FavRecipe {
    id: Number,
    name: string,
    description: string,
    ingredients: Array<string>,
    servesNumber: Number,
    directions: Array<string>,
    totalTime: Number,
    image: any,
    author: string,
}
export interface FavState {
    data: FavRecipe[];
    loading: boolean;
    error: string;

}

interface ADD_FAV_LIST {
    type: "ADD_FAV_LIST"
    payload: FavRecipe; 
}
interface DELETE_FAV {
    type: "DELETE_FAV"
    payload: FavRecipe['id']; 
}
interface GET_FAVS_START {
    type: "GET_FAVS_START"
}
interface GET_FAVS_SUCCESS {
   type: "GET_FAVS_SUCCESS";
   payload: FavRecipe; 
}
interface GET_FAVS_ERROR {
   type: "GET_FAVS_ERROR";

}


export type FavAction = 
| ADD_FAV_LIST
| DELETE_FAV
| GET_FAVS_START
| GET_FAVS_SUCCESS
| GET_FAVS_ERROR


export type FavsDispatch = ThunkDispatch<FavState,void,FavAction>;
