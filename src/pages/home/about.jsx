import React from 'react'

import { Link } from '../../components/Link'

class About extends React.Component {
  render = () => (
    <div>
      <h1>React Boilerplate</h1>
      <p>This is about page</p>
      <Link to="Home">Back</Link>
    </div>
  )
}

export default About
