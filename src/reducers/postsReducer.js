import { GET_ALL, UPDATE, LOADING, ERROR, COMMENTS_UPDATE, COMMENTS_LOADING, COMMENTS_ERROR } from "../types/postsTypes";

const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: null,
  commentsLoading: false,
  commentsError: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_ALL:
      return { ...state, posts: action.payload, loading: false, error: null }

    case UPDATE:
      return { ...state, posts: action.payload, loading: false, error: null }

    case LOADING:
      return { ...state, loading: true, error: null }

    case ERROR:
      return { ...state, error: action.payload, loading: false }

      case COMMENTS_UPDATE:
        return { ...state, posts: action.payload, commentsLoading: false, commentsError: null }
    
    case COMMENTS_LOADING:
      return { ...state, loading: true, error: null }

    case COMMENTS_ERROR:
      return { ...state, error: action.payload, loading: false }

    default: return state
    
  }
}