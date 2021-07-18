import React from "react";
import "./styles/styles.scss";
import "./App.css";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/home/Home";
import Lists from "./components/lists/Lists";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/:boardID/:title" component={Lists} />
    </Router>
  );
};

App.propTypes = {
  state: PropTypes.object,
};

export default App;
