import "./App.css";
// import Navbar from "./component/Navbar";
import Home from "./Pages/Home";
// import History from "./Pages/History";
// import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
// import Blog from "./Pages/Blog";
// import { BiMenu } from "react-icons/bi";

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
          <nav>
            <Link to="/"> Home</Link>
            {/* <Link to="/portfolio"> Portfolio</Link>
            <Link to="/history"> History</Link>
            <Link to="/blog"> Blog</Link> */}
               <button type="button" className="contactbtn">
              <a href="/contact">Contact</a>
            </button>
          
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/history" element={<History />} />
          <Route path="/blog" element={<Blog />} /> */}
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
