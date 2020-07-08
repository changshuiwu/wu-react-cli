
import React from 'react'
import { hot } from 'react-hot-loader'
import Loadable from 'react-loadable'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

function Loading() {
  return <div>loading.....</div>
}

const Home = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ 'views/Home'),
  loading: Loading
})

const Page = Loadable({
  loader: () => import(/* webpackChunkName: 'page' */ 'views/Page'),
  loading: Loading
})

@hot(module)
class App extends React.Component {
  render():JSX.Element {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/page' component={Page} />
        </Switch>
      </Router>
    )
  }
}

export default App
