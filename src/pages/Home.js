import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import './styles/Home.css'

const Home = () => (
  <div className="Home">
    <div className="Home__info">
      <h1>BlogRedux</h1>
      <Link to="/users" className="btn btn-primary">
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </div>
  </div>
)

export default Home