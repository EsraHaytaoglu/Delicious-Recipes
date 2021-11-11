


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

}

interface ADD_FAV_LIST {
    type: "ADD_FAV_LIST"
    payload: FavRecipe; 
}
interface DELETE_FAV {
    type: "DELETE_FAV"
    payload: FavRecipe['id']; 
}


export type FavAction = 
| ADD_FAV_LIST
| DELETE_FAV

