import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Team from './Team';
import App from './App'


render((
  <BrowserRouter>
    <Switch>
    <Route exact path='/' component={Team} />
    <Route exact path="/App" component={App} />
  </Switch> 
  </BrowserRouter>
), document.getElementById('root'));

