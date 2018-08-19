import React from 'react'

import { Link } from '../../components/Link'

class Home extends React.Component {
  render = () => (
    <div>
      <h1>React Boilerplate</h1>
      <p>This is home page</p>
      <div>go to <Link to="About">about</Link> page</div>
    </div>
  )
}

export default Home
