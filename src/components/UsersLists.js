import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux'
import * as usersActions from '../actions/usersActions'

import './styles/UsersList.css'
import PageLoading from './PageLoading'
import PageError from './PageError'

class UsersList extends Component {

  componentDidMount() {
    this.props.getAll()
  }

  createRows = () => {
    const { users } = this.props
    return(
      users.map((user, i) => (
          <tr key={i}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
            <th scope="row">
              <Link to={`/${i}/posts`} className="btn btn-primary">
                <FontAwesomeIcon icon={faPencilAlt} />
              </Link>
            </th>
          </tr>
      ))
    )
  }

  render() {
    const { loading, error } = this.props
    
    if(loading) return <PageLoading />

    if(error) return <PageError error={error}/>

    return(
      <table className="Users__table table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>
          { this.createRows() }
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = ({ usersReducer }) => {
  return usersReducer
}

export default connect(mapStateToProps, usersActions)(UsersList)