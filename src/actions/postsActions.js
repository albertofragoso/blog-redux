import axios from 'axios'
import { GET_ALL, UPDATE, LOADING, ERROR, COMMENTS_UPDATE, COMMENTS_LOADING, COMMENTS_ERROR } from "../types/postsTypes";
import * as userTypes from '../types/usersTypes'

const { GET_ALL: USERS_GET_ALL } = userTypes

export const getAll = () => async dispatch => {
  dispatch({
    type: LOADING
  })

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch({
      type: GET_ALL,
      payload: response.data
    })
  } catch(error) {
    dispatch({
      type: ERROR,
      payload: error.message
    })
  }
}

export const getByUser = userId => async (dispatch, getState) => {
  const { users } = getState().usersReducer
  const { posts } = getState().postsReducer

  dispatch({
    type: LOADING
  })

  try {
    const user_id = users[userId].id
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
  
    
    const newPosts = response.data.map(post => ({
      ...post,
      comments: [],
      isOpen: false
    }))

    const updatedPosts = [
      ...posts,
      newPosts
    ]
    
    dispatch({
      type: UPDATE,
      payload: updatedPosts
    })
  
    const updatedUsers = [ ...users ]
    updatedUsers[userId].postsId = updatedPosts.length - 1
  
    dispatch({
      type: USERS_GET_ALL,
      payload: updatedUsers
    })
  } catch(error) {
    dispatch({
      type: ERROR,
      payload: 'Posts were not found'
    })
  }
}

export const openToClose = (postsId, commentId) => (dispatch, getState) => {
  const { posts } = getState().postsReducer
  const choosenPost = posts[postsId][commentId]

  const updatedPost = {
    ...choosenPost,
    isOpen: !choosenPost.isOpen
  }

  const updatedPosts = [...posts]
  updatedPosts[postsId] = [
    ...posts[postsId]
  ]
  
  updatedPosts[postsId][commentId] = updatedPost

  dispatch({
    type: UPDATE,
    payload: updatedPosts
  })

}

export const getComments = (postId, commentId) => async (dispatch, getState) => {
  const { posts } = getState().postsReducer
  const choosenPost = posts[postId][commentId]

  dispatch({
    type: COMMENTS_LOADING
  })

  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${choosenPost.id}`)
  
    const updatedPost = {
      ...choosenPost,
      comments: response.data
    }
  
    const updatedPosts = [...posts]
    updatedPosts[postId] = [
      ...posts[postId]
    ]
    updatedPosts[postId][commentId] = updatedPost
  
    dispatch({
      type: COMMENTS_UPDATE,
      payload: updatedPosts,
    })
  } catch(error) {
    dispatch({
      type: COMMENTS_ERROR,
      payload: 'Comments were not found'
    })
  }
}