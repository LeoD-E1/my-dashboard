import React from 'react';
import {Switch, Route} from 'wouter';
// importing  Components
import HomePage from 'views/Visitor/HomePage';
import Home from 'views/UserLoggedIn/Home/Home';
import Login from 'views/Visitor/Login/Login';
import DashboardView from 'views/UserLoggedIn/Dashboard/Dashboard';
import CustomersView from 'views/UserLoggedIn/Dashboard/Customers'
import Register from 'views/Visitor/Register/Register';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/:user/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={DashboardView} />
        <Route path="/customers" component={CustomersView} />
        {/*  Routes of Orders */}
        <Route path="/orders" /* component={Orders } */ />
        <Route path="/orders/:order" /* component={ DetailedOrder } */ />
      </Switch>
    </div>
  );
}

export default App;
