import "./App.css";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Dropdown from "react-bootstrap/Dropdown";

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div className="header-bar">
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              className="dropdown"
            ></Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="/">Profile</Dropdown.Item>
              <Dropdown.Item href="/contact">Contact me</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      {/* <div className="right">
        <Router>
          <Navbar />

          <Switch>
            <Route path="/" component={Home} />
            <Route path="/history" component={History} />
            <Route path="/porto" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Home} />
          </Switch>
        </Router>
      </div> */}
    </div>
  );
}

export default App;
