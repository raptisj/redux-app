import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MainFeed from './components/homepage/MainFeed';
import Place from './components/places/Place';
import CreatePlace from './components/forms/CreatePlace';
import CreatePost from './components/forms/CreatePost';
import SinglePost from './components/posts/SinglePost';
import PostsFeed from './components/posts/PostsFeed';
import Dashboard from './components/profile/Dashboard';

import PrivateRoute from './components/general/PrivateRoute';

import Register from './components/auth/Register';
import Login from './components/auth/Login';


const App = () => {
  return (
    <Router>
        <Navbar />
        <Route exact path="/" component={MainFeed} />
        <Route exact path="/create" component={CreatePlace} />
        <Route exact path="/create-post" component={CreatePost} />
        <Route path="/place/:id" component={Place} />
        <Route exact path="/posts" component={PostsFeed} />
        <Route path="/posts/:id" component={SinglePost} />

        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      <Footer />
    </Router>
    )
}
export default App;