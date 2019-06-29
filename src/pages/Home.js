import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Home.css'

const Home = () => (
  <div className="Home">
    <div className="Home__info">
      <h1>BlogRedux</h1>
      <Link to="/users" className="btn btn-primary">
        Let's go
      </Link>
    </div>
  </div>
)

export default Home