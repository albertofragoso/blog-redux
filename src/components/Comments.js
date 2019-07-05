import React from 'react'
import { connect } from 'react-redux'

import './styles/Comments.css'

const Comments = (props) => {

  const { commentsError, commentsLoading } = props

  if(commentsError) return <small className="Comments__notFound">Comments were not found. ❌</small>

  if(commentsLoading && !props.comments.length) return <small>Loading comments...</small>

  return(
    <ul className="Comments">
      {
        props.comments.map(comment => (
          <li className="Comments__comment" key={comment.id}>  
            <b><u>{comment.email}</u></b>
            {comment.body}
          </li>
        ))
      }
    </ul>
  )
}

const mapStateToProps = ({ postsReducer }) => postsReducer

export default connect(mapStateToProps)(Comments)