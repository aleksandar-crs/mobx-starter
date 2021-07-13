import React from "react";
import "./styles/styles.scss";
import "./App.css";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { setup } from "./utils/setup";
import PageRoutes from "./utils/PageRoutes";
import Navbar from "./components/navbar/Navbar";
import Home from "./views/home/Home";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path={PageRoutes.Home} component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

App.propTypes = {
  state: PropTypes.object,
};

export default setup(App);
