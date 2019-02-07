import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/about/About";
import Navbar from "./components/layout/Navbar";
import Program from "./components/program.js/Program";
import Events from "./components/Events";
import Donate from "./components/Donate";
import Sponsor from "./components/Sponsor";
import Impact from "./components/Impact";
import Auxiliaries from "./components/Auxiliaries";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/program" component={Program} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/sponsor" component={Sponsor} />
          <Route exact path="/impact" component={Impact} />
          <Route exact path="/auxiliaries" component={Auxiliaries} />
        </div>
      </Router>
    );
  }
}

export default App;
