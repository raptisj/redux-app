import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import MainFeed from './components/MainFeed';
import Place from './components/Place';
import CreatePlace from './components/forms/CreatePlace';
import CreatePost from './components/forms/CreatePost';
import SinglePost from './components/SinglePost';

const App = () => {
  return (
    <Router>
        <Navbar />
        <Switch>
        <Route exact path="/" component={MainFeed} />
        <Route exact path="/create" component={CreatePlace} />
        <Route exact path="/create-post" component={CreatePost} />
        <Route path="/place/:id" component={Place} />
        <Route path="/posts/:id" component={SinglePost} />
      </Switch>
    </Router>
    )
}
export default App;