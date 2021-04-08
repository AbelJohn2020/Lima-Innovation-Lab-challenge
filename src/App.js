import React, { useEffect, useState } from 'react';
import Posts from './components/post/Posts';
import Users from './components/users/UserProfile';
import './app.css';
import Header from './components/header/Header';

const App = () => {
    return (
        <div className="AppContainer">
          <Header />
          <Users />
          <Posts />
        </div>
    );
};

export default App;