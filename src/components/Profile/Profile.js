import React, { Component } from 'react';

import ProfilePic from './ProfilePic/ProfilePic.js';
import './Profile.css'

class Dp extends Component {
  render() {
    return (
      <div className="col-sm-3 srb-profile-pic">
        <ProfilePic src={this.props.src}>
          <div className="srb-profile-cover">
            <h3 className="srb-profile-name">{this.props.title}</h3>
            <br/>
            <div className="srb-profile-links">
              {this.props.children}
            </div>
          </div>
        </ProfilePic>
      </div>
    )
  }
}

class Desc extends Component {
  render() {
    return (
      <div className="col-sm-6 srb-desc">
        <h3>{this.props.title}</h3>
        <p style={{textAlign:'justify',textJustify:'inter-word'}}>
          {this.props.children}
        </p>
      </div>
    )
  }
}

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <br/>
            <div className="row">
              <div className={`col-sm-${this.props.margin}`}/>
              {this.props.children}
            </div>
          </div>
        </div>
        <br/>
        <hr/>
      </div>
    )
  }
}

Profile.Dp = Dp;
Profile.Desc = Desc;

export default Profile;


