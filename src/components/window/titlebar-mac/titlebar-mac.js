import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

export default class TitlebarMac extends React.Component {
  render () {
    return (
      <div className='titlebar-mac'>
        <div className='titlebar-text'>
          { this.props.title }
        </div>
      </div>
    )
  }
}

TitlebarMac.propTypes = {
  title: PropTypes.string
}
