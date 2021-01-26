import Rooms from './Rooms';
import About from './About';
import Contact from './Contact';
import Main from './Main';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Navbar = () => {

  return (
    <Router>
      <nav className="navbar">
        <h2 id="logo" className="nav-items">MyResort</h2>
        <ul className="nav-items">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/rooms">Rooms</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><a href="#book" className="button">Book Now</a></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/rooms">
          <Rooms />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}



export default Navbar;
