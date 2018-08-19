import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import pick from 'lodash/pick'

import routeAction from '../../store/route'

class Link extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
    go: PropTypes.func.isRequired,
  }

  clickHandler = evt => {
    evt.preventDefault()
    this.props.go(this.props.to)
  }

  render() {
    const classNames = pick(this.props, 'primary', 'secondary')

    return (
      <a className={cx(classNames)} onClick={this.clickHandler}>
        {this.props.children}
        <style jsx>{`
          a {
            color: inherit;
            text-decoration: none;
            cursor: pointer;
          }
        `}</style>
      </a>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  go: page => dispatch(routeAction.changePage(page)),
})

export default connect(null, mapDispatchToProps)(Link)
