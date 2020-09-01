import React from 'react';
import Loadable from 'react-loadable';
import { Switch, Route } from 'react-router-dom'
import MainLayout from 'views/Layout'


function Loading() {
    return <div>loading.....</div>
  }
  
  const MyCenter = Loadable({
    loader: () => import(/* webpackChunkName: 'home' */ 'views/myCenter'),
    loading: Loading
  })
  
  const Page = Loadable({
    loader: () => import(/* webpackChunkName: 'page' */ 'views/Page'),
    loading: Loading
  })

export default () => {
    return (
        <MainLayout>
            <Switch>
                <Route exact path='/' component={MyCenter} />
                <Route path='/page' component={Page} />
            </Switch>
        </MainLayout>
    )
}