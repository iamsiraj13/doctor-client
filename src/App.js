import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Appoinment from "./pages/appoinment/appoinmentMain/Appoinment";
import Dashboard from "./pages/dashboard/dashboard/Dashboard";
import Home from "./pages/home/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import PrivateRoute from "./privateRoute/PrivateRoute";
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/appoinment">
            <Appoinment />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
