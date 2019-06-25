import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Navbar.css'
import blog from '../images/blog.svg'

const Navbar = () => (
  <div className="Navbar">
    <div className="container-fluid">
      <Link to="/" className="Navbar__brand">
        <img className="Navbar__brand-logo" src={blog} alt="Blog logo"/>
        <span className="font-weight-light">Blog</span>
        <span className="font-weight-bold">Redux</span>
      </Link>
    </div>
  </div>
)

export default Navbar