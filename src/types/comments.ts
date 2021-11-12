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
export interface AddCommentForm {
    author: string;
    body: string;
    postId: Number;
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
interface ADD_COMMENT_START {
    type: "ADD_COMMENT_START"
}
interface ADD_COMMENT_SUCCES {
   type: "ADD_COMMENT_SUCCES";
   payload: AddCommentForm; 
}
interface ADD_COMMENT_ERROR {
   type: "ADD_COMMENT_ERROR";

}
interface DELETE_COMMENT_START {
    type: "DELETE_COMMENT_START"
}
interface DELETE_COMMENT_SUCCES {
   type: "DELETE_COMMENT_SUCCES";
   payload: Comment['id']; 
}
interface DELETE_COMMENT_ERROR {
   type: "DELETE_COMMENT_ERROR";

}
export type CommentAction = 
| GET_COMMENTS_START
| GET_COMMENTS_SUCCES
| GET_COMMENTS_ERROR
| ADD_COMMENT_START
| ADD_COMMENT_SUCCES
| ADD_COMMENT_ERROR
| DELETE_COMMENT_START
| DELETE_COMMENT_SUCCES
| DELETE_COMMENT_ERROR


export type CommentsDispatch = ThunkDispatch<CommentState,void,CommentAction>;