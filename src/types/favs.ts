import { ThunkDispatch } from "redux-thunk";

export interface favItem {
    favId: Number
}

export interface FavState {
    data: favItem[];
    loading: boolean;
    error: string;
}

interface ADD_FAV_LIST_START {
    type: "ADD_FAV_LIST_START"
}
interface ADD_FAV_LIST_SUCCESS {
    type: "ADD_FAV_LIST_SUCCESS"
    payload: favItem; 
}
interface ADD_FAV_LIST_ERROR {
    type: "ADD_FAV_LIST_ERROR"
}

export type FavAction = 
| ADD_FAV_LIST_START
| ADD_FAV_LIST_SUCCESS
| ADD_FAV_LIST_ERROR

export type FavDispatch = ThunkDispatch<FavState,void,FavAction>;