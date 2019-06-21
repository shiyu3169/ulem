import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import Home from './components/Home/Home';
import About from './components/about/About';
import Navbar from './components/layout/Navbar';
import Program from './components/program/Program';
import Events from './components/event/Events';
import Donate from './components/support/Donate';
import Sponsor from './components/support/Sponsor';
import Impact from './components/about/Impact';
import Auxiliaries from './components/support/Auxiliaries';
import ScrollToTop from './components/layout/ScrollToTop';
import Footer from './components/layout/Footer';
import Centennial from './components/centennial/Centennial';
import Contact from './components/about/Contact';
import Interest from './components/program/Interest';
import Thank from './components/layout/Thank';
import Login from './components/auth/Login';
import Admin from './components/auth/Admin';
import Marathon from './components/marathon/Marathon';
import Membership from './components/membership/Membership';
import CentennialMembership from './components/centennial/CentennialMembership';
import Leadership from './components/about/Leadership';
import Board from './components/about/Board';
import HowToDonate from './components/support/HowToDonate';
import CentennialIntro from './components/centennial/CentennialIntro';
import Staff from './components/about/Staff';
import Payment from './components/layout/Payment';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/leadership' component={Leadership} />
          <Route exact path='/board' component={Board} />
          <Route exact path='/staff' component={Staff} />
          <Route exact path='/program' component={Program} />
          <Route exact path='/events' component={Events} />
          <Route exact path='/donate' component={Donate} />
          <Route exact path='/sponsor' component={Sponsor} />
          <Route exact path='/impact' component={Impact} />
          <Route exact path='/auxiliaries' component={Auxiliaries} />
          <Route exact path='/centennial' component={Centennial} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/interest' component={Interest} />
          <Route exact path='/thank' component={Thank} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/admin' component={Admin} />
          <Route exact path='/marathon' component={Marathon} />
          <Route exact path='/howToDonate' component={HowToDonate} />
          <Route exact path='/centennialIntro' component={CentennialIntro} />
          <Route exact path='/membership' component={Membership} />
          <Route exact path='/payment' component={Payment} />
          <Route
            exact
            path='/centennialMembership'
            component={CentennialMembership}
          />
          <Footer />
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
