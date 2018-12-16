import React from 'react'
import PropTypes from 'prop-types'
import os from 'os'

import TitlebarWin from './titlebar-win/titlebar-win'
import TitlebarMac from './titlebar-mac/titlebar-mac'

import './style.css'

export default class Window extends React.Component {
  render () {
    return (
      <div className='window'>
        {os.platform() === 'win32'
          ? <TitlebarWin icon={this.props.icon} title={this.props.title} light />
          : <TitlebarMac title={this.props.title} />
        }
        <div className='content-container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Window.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node
}
