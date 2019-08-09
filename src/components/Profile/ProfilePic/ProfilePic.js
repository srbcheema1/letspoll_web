import React, {Component} from 'react';

import './ProfilePic.css';

class ProfilePic extends Component {
  render() {
    return (
      <div className="profile">
          <img className="profile-image" src={this.props.src} alt="dp"/>
          <div className="profile-overlay">
            <div className="profile-details fadeIn-bottom">
              {this.props.children}
            </div>
          </div>
      </div>
    )
  }
}

export default ProfilePic;