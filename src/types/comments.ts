import { ThunkDispatch } from "redux-thunk";

export interface CommentState {
    data: Comment[];
    loading: boolean;
    error: string;
}
export interface Comment {
    id: Number;
    body: string;
    postId: number;
    author: string;
}
interface GET_COMMENTS_START {
    type: "GET_COMMENTS_START"
}
interface GET_COMMENTS_SUCCES {
   type: "GET_COMMENTS_SUCCES";
   payload: Comment; 
}
interface GET_COMMENTS_ERROR {
   type: "GET_COMMENTS_ERROR";

}
export type CommentAction = 
| GET_COMMENTS_START
| GET_COMMENTS_SUCCES
| GET_COMMENTS_ERROR


export type CommentsDispatch = ThunkDispatch<CommentState,void,CommentAction>;