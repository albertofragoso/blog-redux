import axios from 'axios'
import { GET_ALL, GET_BY_USER, LOADING, ERROR } from '../types/postsTypes'
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

  const user_id = users[userId].id
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)

  const updatedPosts = [
    ...posts,
    response.data
  ]

  const updatedUsers = [ ...users ]
  updatedUsers[userId].postsId = updatedPosts.length - 1

  dispatch({
    type: USERS_GET_ALL,
    payload: updatedUsers
  })

  dispatch({
    type: GET_BY_USER,
    payload: updatedPosts
  })
}