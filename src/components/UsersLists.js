import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles/UsersList.css'

class UsersList extends Component {

  createRows = () => {}

  render() {
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

const mapStateToProps = reducers => {
  return reducers.usersReducer
}

export default connect(mapStateToProps, { /* Actions */  })(UsersList)