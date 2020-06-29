import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Menu from "./layouts/Menu";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DataProvider from "./components/context/DataProvider";

const App = () => {
  return (
    <Router>
      <div>
        <Menu />
        <DataProvider>
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route
              exact
              path="/projects"
              render={(props) => <Projects {...props} />}
            />
            <Route
              exact
              path="/about"
              render={(props) => <About {...props} />}
            />
            <Route
              exact
              path="/contact"
              render={(props) => <Contact {...props} />}
            />
          </Switch>
        </DataProvider>
      </div>
    </Router>
  );
};

export default App;
