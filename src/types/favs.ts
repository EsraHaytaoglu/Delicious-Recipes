import { ThunkDispatch } from "redux-thunk";
import { Recipe } from "./recipes";



export interface FavState {
    data: Recipe[];
    loading: boolean;
    error: string;
}

interface GET_FAVS_START {
    type: "GET_FAVS_START"
}
interface GET_FAVS_SUCCESS {
   type: "GET_FAVS_SUCCESS";
   payload: Recipe[]; 
}
interface GET_FAVS_ERROR {
   type: "GET_FAVS_ERROR";

}

interface ADD_FAV_START {
    type: "ADD_FAV_START"
}
interface ADD_FAV_SUCCESS {
   type: "ADD_FAV_SUCCESS";
   payload: Recipe; 
}
interface ADD_FAV_ERROR {
   type: "ADD_FAV_ERROR";

}

interface DELETE_FAV_START {
    type: "DELETE_FAV_START"
}
interface DELETE_FAV_SUCCESS {
   type: "DELETE_FAV_SUCCESS";
   payload: Recipe['id']; 
}
interface DELETE_FAV_ERROR {
   type: "DELETE_FAV_ERROR";

}


export type FavAction = 
| GET_FAVS_START
| GET_FAVS_SUCCESS
| GET_FAVS_ERROR
| ADD_FAV_START
| ADD_FAV_SUCCESS
| ADD_FAV_ERROR
| DELETE_FAV_START
| DELETE_FAV_SUCCESS
| DELETE_FAV_ERROR


export type FavsDispatch = ThunkDispatch<FavState,void,FavAction>;
