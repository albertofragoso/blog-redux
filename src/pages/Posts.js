import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles/Posts.css'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

import * as usersActions from '../actions/usersActions'
import * as postsActions from '../actions/postsActions'

const { getAll: getAllUsers } = usersActions
const { getByUser: getPostsByUser } = postsActions

class Posts extends Component {

  async componentDidMount() {
    const { 
      getAllUsers,
      getPostsByUser,
      match: { params: { userId } }
    } = this.props

    if(!this.props.usersReducer.users.length) await getAllUsers()

    if(!('postsId' in this.props.usersReducer.users[userId])) getPostsByUser(userId)
  }

  putUser = () => {
    const {
      usersReducer: { users },
      usersReducer: { loading },
      usersReducer: { error },
      match: { params: { userId } }
    } = this.props

    const user = users[userId]

    if(!users.length || loading) return <PageLoading />

    if(error) return <PageError error={error} />

    return(
      <div className="Posts__hero">
        <h1>{user.name}</h1>
      </div>
    )
  }

  putPosts = () => {
    const {
      usersReducer,
      usersReducer: { users },
      postsReducer: { posts },
      postsReducer:  { loading },
      postsReducer: { error },
      match: { params: { userId } }
    } = this.props

    if(!users.length) return

    if(usersReducer.error) return

    if(loading) return <PageLoading />

    if(error) return <PageError error={error} />

    if(!posts.length) return

    if(!('postsId' in users[userId])) return

    const { postsId } = users[userId]

    return posts[postsId].map((post, i) => (
        <div className="" key={i}>
          <h4>{post.title}</h4>
          <p>{post.description}</p>
        </div>
    ))
  }

  render() {
    console.log(this.props)

    return (
      <div className="Post">
        { this.putUser() }
        <div className="Posts__container">
          { this.putPosts() }
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
  getPostsByUser
}

export default connect(mapStateToProps, mapActionsToProps)(Posts)