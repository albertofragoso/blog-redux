import React, { Component } from 'react'

import './styles/Users.css'

class User extends Component {
  render() {
    return(
      <div className="Users">
        <div className="Users__hero">
          <h1>
            <span className="font-weight-light">Blog</span> 
            <span className="font-weight-bold">Redux</span>
          </h1>
        </div>
        <div className="Users__container">
          Something...
        </div>
      </div>
    )
  }
}

export default User