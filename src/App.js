import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  //state = { users: [], loading: false, alert: null, user: {} };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     "https://api.github.com/users"
  //     //?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}"
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  useEffect(() => {
    async function fetchData() {
      // You can await here
      setLoading(true);
      const response = await axios.get("https://api.github.com/users");
      setUsers(response.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const searchUser = async text => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  const getSingleUser = async userName => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${userName}`);
    setUser(res.data);
    setLoading(false);
  };

  const clearUser = () => {
    setUsers([]);
    setLoading(false);
  };

  const showAlert = () => {
    setAlert("Please enter something");
    setTimeout(() => setAlert(null), 2000);
  };

  const homePage = (
    <Fragment>
      <Search
        searchUser={searchUser}
        clearUser={clearUser}
        users={users}
        setAlert={showAlert}
      />
      <div className="container">
        <Users users={users} loading={loading} />
      </div>
    </Fragment>
  );
  const userPage = props => (
    <User
      {...props}
      getSingleUser={getSingleUser}
      user={user}
      loading={loading}
    />
  );

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar title="Git Hub Finder" icon="fab fa-github" />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/" render={props => homePage} />
          <Route exact path="/about" component={About} />
          <Route path="/user/:login" render={userPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
