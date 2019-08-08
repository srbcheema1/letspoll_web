import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import Home from './pages/Home.js'
import About from './pages/About.js'

import Navbar from './components/navbar/Navbar.js'
import Footer from './components/footer/footer.js'

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <div>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/About" component = {About}/>
        </div>
        <Footer/>
      </Router>
    );
  }
}

export default App;