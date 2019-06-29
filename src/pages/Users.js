import React from 'react'
import UsersList from '../components/UsersLists'

import './styles/Users.css'

const Users = () => {
  return(
    <div className="Users">
      <div className="Users__hero">
        <h1>Users</h1>
      </div>
      <div className="Users__container">
        <UsersList />
      </div>
    </div>
  )
}

export default Users