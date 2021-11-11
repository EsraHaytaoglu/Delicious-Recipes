import { CommentAction, CommentState } from "../../types/comments";

const defaultState: CommentState = {
    data: [],
    loading: false,
    error: "",
}



const commentsReducer = (state: CommentState = defaultState, action: CommentAction) => {
    switch (action.type) {
        case "GET_COMMENTS_START":
          return { ...state, loading: true, error: "" };
        case "GET_COMMENTS_SUCCES":
          return { ...state, loading: false, data: action.payload };
        case "GET_COMMENTS_ERROR":
          return { ...state, loading: false, error: "Error fetching comments" };
        case "ADD_COMMENT_START":
          return { ...state, loading: true, error: "" };
        case "ADD_COMMENT_SUCCES":
          return { ...state, loading: false,  data: [action.payload, ...state.data], };
        case "ADD_COMMENT_ERROR":
          return { ...state, loading: false, error: "Error adding comments" };
        default:
            return state;
    }
}

export default commentsReducer;