import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import MapPage from './pages/Map'
import ChatPage from './pages/Chat'
import LoginPage from './pages/Login'
import NotFoundPage from './pages/NotFound'
import DashboardPage from './pages/Dashboard'

const Router = () => {
  return (
    <HashRouter basename='/'>
      <Switch>
        <Route exact path='/' component={DashboardPage} />
        <Route exact path='/map' component={MapPage} />
        <Route exact path='/chat' component={ChatPage} />
        <Route exact path='/chat/:id' component={ChatPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </HashRouter>
  )
}

export default Router
