import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout"

import Map from "./pages/Map"
import Home from "./pages/Home"
import Login from "./pages/Login";
import NotFound from './pages/NotFound'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route exact path="/mapa">
          <Layout>
            <Map />
          </Layout>
        </Route>
        <Route exact path="/login" component={ Login } />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
