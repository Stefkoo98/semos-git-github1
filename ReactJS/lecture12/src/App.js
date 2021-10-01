import React from 'react';
import { Users } from './components/users';
import { Switch, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Comments } from './components/comments'

export function App() {

  return (
    <div id="app">
      <Nav />
      <Switch>
        <Route path="/users" component={Users} />
        <Route path="/comments" component={Comments} />
      </Switch >
      <h2>Yo</h2>
    </div>
  )
}