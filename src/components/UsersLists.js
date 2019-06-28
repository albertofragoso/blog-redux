import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as usersActions from '../actions/usersActions'

import './styles/UsersList.css'
import PageLoading from './PageLoading'

class UsersList extends Component {

  componentDidMount() {
    this.props.getAll()
  }

  createRows = () => {
    const { users } = this.props
    return(
      users.map((user, i) => (
          <tr key={i}>
            <th scope="row">{ i + 1 }</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
          </tr>
      ))
    )
  }

  render() {
    const { loading, error } = this.props
    
    if(loading) return( <PageLoading />)
    
    return(
      <table className="Users__table table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>
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