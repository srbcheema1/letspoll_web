import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './navbar.css'

class Navbar extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-md navbar-dark mb-4">
        <div className="container">
          <Link className="navbar-brand mr-4" to="/">
            <span style={{textAlign: 'left'}}>
              <span style={{color:'red', fontWeight:'700'}}>Lets</span> Poll
            </span>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggle">
            <ul className="navbar-nav ml-auto">
                <li className ="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/About">About</Link>
                </li>
                <li className ="nav-item active">
                  <Link className="nav-link" to="/Help">Help</Link>
                </li>
            </ul>

          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar
