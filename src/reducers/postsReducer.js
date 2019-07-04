import { GET_ALL, UPDATE, LOADING, ERROR } from "../types/postsTypes";

const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: null
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

    default: return state
    
  }
}