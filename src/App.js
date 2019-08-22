import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux'

import { checkUser } from './store/actions/user_actions';
import Home from './containers/Home/Home'
import About from './containers/About/About'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/footer'

class App extends Component {
  componentDidMount = () => {
    this.props.checkUser()
  }

  render() {
    return (
      <Router>
        <Navbar/>
        <div>
          {/* exact means only this not go further, other way is usign switch */}
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/About" component = {About}/>
        </div>
        <Footer/>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  checkUser: () => dispatch(checkUser())
})

export default connect(null, mapDispatchToProps)(App);