import { Comment, CommentsDispatch } from "../../types/comments";
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