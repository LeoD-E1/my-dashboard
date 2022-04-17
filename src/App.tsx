import React from 'react';
import {Switch, Route} from 'wouter';
// importing  Components
import NavBar from 'components/NavBar/NavBar';
import HomePage from 'views/Visitor/HomePage';
import Home from 'views/UserLoggedIn/Home/Home';
import Login from 'views/Visitor/Login';
import Dashboard from 'views/UserLoggedIn/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/:user/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
