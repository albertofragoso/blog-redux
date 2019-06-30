import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles/Posts.css'

import * as usersActions from '../actions/usersActions'
import * as postsActions from '../actions/postsActions'

const { getAll: getAllUsers } = usersActions
const { getAll: getAllPosts } = postsActions

class Posts extends Component {
  render() {
    console.log(this.props)
    return(
      <div className="Post">
        <div className="Posts__hero">
          <h1>Post</h1>
        </div>
        <div className="Posts__container">
          ...
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ usersReducer, postsReducer }) => {
  return {
    usersReducer,
    postsReducer
  }
}

const mapActionsToProps = {
  getAllUsers,
  getAllPosts
}

export default connect(mapStateToProps, mapActionsToProps)(Posts)