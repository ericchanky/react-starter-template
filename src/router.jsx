import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Layout from './components/layout'
import Home from './pages/home'
import About from './pages/home/about'

export const routes = [
  { name: 'Home', page: <Home /> },
  { name: 'About', page: <About /> },
]

class Router extends React.Component {
  static propTypes = {
    page: PropTypes.string.isRequired,
    children: PropTypes.element,
  }

  route = () => routes.find(r => r.name === this.props.page) || routes[0]

  render = () => (
    <Layout>
      {this.route().page}
      {this.props.children}
    </Layout>
  )
}

const mapStateToProps = state => ({
  page: state.route.currentPage,
})

export default connect(mapStateToProps)(Router)
