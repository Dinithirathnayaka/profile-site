import "./App.css";
// import Navbar from "./component/Navbar";
import Home from "./Pages/Home";
// import History from "./Pages/History";
// import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
// import Blog from "./Pages/Blog";
// import { BiMenu } from "react-icons/bi";
import {FaPhoneAlt} from "react-icons/fa";
import {FaUserAlt} from "react-icons/fa";

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
         
            <Link to="/"><FaUserAlt style={{color: "#616161" , }}/></Link>
            <a href="/contact"> <FaPhoneAlt style={{color: "#616161" }}/></a>
            
          
          </nav>
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
