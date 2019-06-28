import axios from 'axios'
import { GET_ALL } from '../types/usersTypes'

export const getAll = () => async dispatch => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch({
      type: GET_ALL,
      payload: response.data
    })
  } catch(error) {
    console.log('Error: ', error.message)
  }
  
}