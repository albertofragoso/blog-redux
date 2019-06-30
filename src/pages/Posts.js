import React from 'react'
import { connect } from 'react-redux'

import './styles/Posts.css'

const Posts = () => {
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

const mapStateToProps = ({ usersReducer, postsReducer }) => {
  return {
    usersReducer,
    postsReducer
  }
}

export default connect(mapStateToProps, {})(Posts)