import { AddCommentForm, CommentsDispatch, Comment} from "../../types/comments";
import { Recipe } from "../../types/recipes";
import api from "../../utils/api";

export const getComments = (id: Recipe['id']) => async (dispatch: CommentsDispatch) => {
    dispatch({ type: "GET_COMMENTS_START" });
    try {
      const response = await api().get<Comment>(`/recipes/${id}/comments`);
      dispatch({ type: "GET_COMMENTS_SUCCES", payload: response.data });
    } catch {
      dispatch({ type: "GET_COMMENTS_ERROR" });
    }
  };

  export const addComment = (comment: AddCommentForm ) => async (dispatch: CommentsDispatch) => {
    dispatch({ type: "ADD_COMMENT_START" });
    try {
      const response = await api().post<AddCommentForm>(`/comments`, comment);
      dispatch({ type: "ADD_COMMENT_SUCCES", payload: response.data });
    } catch {
      dispatch({ type: "ADD_COMMENT_ERROR" });
    }
  };

  export const deleteComment = ( id: Comment['id']) => async (dispatch: CommentsDispatch) => {
    dispatch({ type: "DELETE_COMMENT_START" });
    try {
      await api().delete<Comment>("/comments/"+ id );
      dispatch({ type: "DELETE_COMMENT_SUCCES", payload: id });
    } catch {
      dispatch({ type: "DELETE_COMMENT_ERROR" });
    }
  };