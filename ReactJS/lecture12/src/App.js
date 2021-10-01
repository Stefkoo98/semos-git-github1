import React from 'react';
import { Users } from './components/users';
import { Switch, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Comments } from './components/comments'
import { CommentView } from './components/comments/CommentView';

export function App() {

  return (
    <div id="app">
      <Nav />
      <Switch>
        <Route path="/users" component={Users} />
        <Route path="/comments" component={Comments} />
        <Route path="/comment/:id" component={CommentView} />
      </Switch >
      <h2>Yo</h2>
    </div>
  )
}