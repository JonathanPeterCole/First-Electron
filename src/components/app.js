import React from 'react'
import Window from './window/window'

export default class App extends React.Component {
  render () {
    return (
      <Window>
        <h1>Hello World!</h1>
        We are using Node.js {process.versions.node},
        Chromium {process.versions.chrome},
        and Electron {process.versions.electron}.
      </Window>
    )
  }
}
