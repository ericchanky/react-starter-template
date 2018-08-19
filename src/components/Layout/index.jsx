import React from 'react'
import PropTypes from 'prop-types'

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <main>
        {this.props.children}
        <style jsx>{`
          main {
            max-width: 100vw;
            max-height: 100vh;
          }
        `}</style>
      </main>
    )
  }
}

export default Layout
