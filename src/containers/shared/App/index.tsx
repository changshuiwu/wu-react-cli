
import React from 'react'
import { hot } from 'react-hot-loader'
import { HashRouter as Router } from 'react-router-dom'
import getRoutes from '@/router/index'


@hot(module)
class App extends React.Component {
  render():JSX.Element {
    return (
      <Router>
        { getRoutes() }
      </Router>
    )
  }
}

export default App
