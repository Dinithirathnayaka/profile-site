import React from "react";
import Navbar from "../Navbar";
import Home from "./Pages/Home";
import History from "./Pages/History";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { BiMenu } from "react-icons/bi";
// import Collapsecon from "../Collapsecon";

function RightGrid() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" component={Home} />
          <Route path="/history" component={History} />
          <Route path="/porto" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          {/* <Route path="/blog" component={Home} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default RightGrid;
