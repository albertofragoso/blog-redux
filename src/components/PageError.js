import React from 'react'

import './styles/PageError.css'

const Error = ({ error }) => (
  <div className="PageError">
    <p>{error}.  ❌</p>
  </div>
)

export default Error