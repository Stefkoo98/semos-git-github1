import React from "react";
import { Switch, Route } from "react-router-dom";
import { Cake } from "./components/Cake";
import { Nav } from './components/Nav';
import { Comments } from "./components/Comments";

export function App() {

  return (
    <div id="app">
      <h2>yo</h2>

      <Nav />
      <Switch>
        <Route path="/cake" component={Cake} />
        <Route path="/comments" component={Comments} />
      </Switch>
    </div>
  )
}