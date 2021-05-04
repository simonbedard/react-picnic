import logo from './logo.svg';
import './App.scss';
import SingleComponents from "./components/SingleComponents"


import Picnic from "./components/Picnic/Picnic"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <Router>
        <div>
          <nav className="menu">
            <ul>
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/about-me">About Me</Link>
              </li>
              <li>
                <Link to="/talk">Talk we me</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/talk" component={Talk} />
                <Route path="/components/:name" component={SingleComponents} />
                
                <Route component={Error} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>

      <Picnic />
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Me</h2>
    </div>
  );
}

function Talk() {
  return (
    <div>
      <h2>Talk to me</h2>
    </div>
  );
}

function Error() {
  return (
    <div>
      <h2>Oups page not found</h2>
    </div>
  );
}

export default App;
