import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
// import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GitHubState from "./context/github/gitHubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  const homePage = (
    <Fragment>
      <Search />
      <div className="container">
        <Users />
      </div>
    </Fragment>
  );
  const userPage = props => <User {...props} />;

  return (
    <GitHubState>
      <AlertState>
        <BrowserRouter>
          <div className="App">
            <Navbar title="Git Hub Finder" icon="fab fa-github" />
            <Alert />
            <Switch>
              <Route exact path="/" render={props => homePage} />
              <Route exact path="/about" component={About} />
              <Route path="/user/:login" render={userPage} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GitHubState>
  );
};

export default App;
