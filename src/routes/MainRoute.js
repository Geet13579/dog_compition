import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

import Login from '../login.js';
import SignUp from '../signUp.js';
import dogCompition from '../dogCompition.js';
import winnerDetails from '../winnerDetails.js';
import DogTree from '../dogTree.js';







const MainRoute = () => {
  return (
    <div>
      <Router>
        <Switch>

          <Route path="/" exact component={Login} />
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/dogCompition" exact component={dogCompition} />
          <Route path="/winnerDetails" exact component={winnerDetails} />
          <Route path={`/dogTree/:id`} component={DogTree} exact />



        </Switch>
      </Router>
    </div>
  )
}

export default MainRoute