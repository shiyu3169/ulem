import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/about/About";
import Navbar from "./components/layout/Navbar";
import Program from "./components/program.js/Program";
import Events from "./components/event/Events";
import Donate from "./components/Donate";
import Sponsor from "./components/Sponsor";
import Impact from "./components/Impact";
import Auxiliaries from "./components/Auxiliaries";
import ScrollToTop from "./components/layout/ScrollToTop";
import Footer from "./components/layout/Footer";
import Centennial from "./components/Centennial";
import Contact from "./components/Contact";
import Member from "./components/Member";
import Thank from "./components/Thank";
import Login from "./components/auth/Login";
import Admin from "./components/auth/Admin";

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/program" component={Program} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/sponsor" component={Sponsor} />
          <Route exact path="/impact" component={Impact} />
          <Route exact path="/auxiliaries" component={Auxiliaries} />
          <Route exact path="/centennial" component={Centennial} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/member" component={Member} />
          <Route exact path="/thank" component={Thank} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin" component={Admin} />
          <Footer />
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
