import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import MainFeed from './components/MainFeed';
import Place from './components/Place';
import CreatePlace from './components/CreatePlace';
import SinglePost from './components/SinglePost';

const App = () => {
  return (
    <Router>
        <Navbar />
        <Switch>
        <Route exact path="/" component={MainFeed} />
        <Route exact path="/create" component={CreatePlace} />
        <Route path="/place/:id" component={Place} />
        <Route path="/posts/:id" component={SinglePost} />
      </Switch>
    </Router>
    )
}
export default App;