import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Posts from './components/post/Posts';
import './app.css';
import Header from './components/header/Header';
import CommentItem from './components/comments/CommentItem';
import UserProfile from './components/users/UserProfile';

const App = () => {
    return (
      <Router>
        <div className="AppContainer">
        <Switch>
          <Route exact path="/">
            <Header />
            <Posts />
          </Route>
          <Route exact path="/post/:postId">
            <CommentItem />
          </Route>
          <Route exact path="/user/:userId">
            <UserProfile />
          </Route>
        </Switch>
        </div>
      </Router>
    );
};

export default App;