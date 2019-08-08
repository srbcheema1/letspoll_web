import React, {Component} from 'react';

import ProfilePic from '../components/ProfilePic/ProfilePic.js';

import srb_dp from '../extra/images/srb.jpeg';
import nimit_dp from '../extra/images/nimit.jpeg';
import vishi_dp from '../extra/images/vishi.jpeg';
import sahoo_dp from '../extra/images/sahoo.jpeg';
import gourav_dp from '../extra/images/gourav.jpg';

import email_logo from '../extra/images/email.svg';
import github_logo from '../extra/images/github.svg';
import facebook_logo from '../extra/images/facebook.svg';
import linkedin_logo from '../extra/images/linkedin.svg';

import './styles/About.css'

class About extends Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br/>
            <div className="row">
              <div className="col-sm-3 srb-profile-pic">
                <ProfilePic src={srb_dp}>
                  <div className="srb-profile-cover">
                    <h3 className="srb-profile-name">Srb Cheema</h3>
                    <br/>
                    <div className="srb-profile-links">
                      <a href="http://www.linkedin.com/in/srbcheema1/" target="_blank" rel="noreferrer noopener">
                        <img src={linkedin_logo} className="srb-logo" alt="linkedin"/>
                      </a>
                      <a href="http://github.com/srbcheema1" target="_blank" rel="noreferrer noopener">
                        <img src={github_logo} className="srb-logo" alt="github"/>
                      </a>   
                      <a href="http://facebook.com/srbcheema" target="_blank" rel="noreferrer noopener">
                        <img src={facebook_logo} className="srb-logo" alt="facebook"/>
                      </a>
                      <a href="mailto:srbcheema2@gmail.com" target="_blank" rel="noreferrer noopener">
                        <img src={email_logo} className="srb-logo" alt="email"/>
                      </a>
                    </div>
                  </div>
                </ProfilePic>
              </div>
              <div className="col-sm-6 srb-desc">
                <h3>Srb Cheema (CE0, Co-Founder)</h3>
                <p>
                A curious guy who is in love with problems.
                I am student of Computer Science at Nit Hamirpur,
                enthusiastic about learning new algorithms and technologies related to computer science. 
                Those who know me say me a lazy programmer as I am quite lazy at repeating the stuff,
                I am habitual of writing down script to automate almost everthing that I feel like boring in repeating everytime.
                I am a compitive programmer as well as an Open Source lover.
                </p>
              </div>
              <div className="col-sm-3"></div>
            </div>
          </div>
        </div>
        <br/>
        <hr/>
        <div className="row">
          <div className="col-md-12">
            <br/>
            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-3 srb-profile-pic">
                <ProfilePic src={nimit_dp}>
                  <div className="srb-profile-cover">
                    <h3 className="srb-profile-name">Nimit Bhardwaj</h3>
                    <br/>
                    <div className="srb-profile-links">
                      <a href="https://www.linkedin.com/in/nimit-bhardwaj-b137a3116/" target="_blank" rel="noreferrer noopener">
                        <img src={linkedin_logo} className="srb-logo" alt="linkedin"/>
                      </a>
                      <a href="https://github.com/nimitbhardwaj" target="_blank" rel="noreferrer noopener">
                        <img src={github_logo} className="srb-logo" alt="github"/>
                      </a>   
                      <a href="https://www.facebook.com/nimitthegreat" target="_blank" rel="noreferrer noopener">
                        <img src={facebook_logo} className="srb-logo" alt="facebook"/>
                      </a>
                      <a href="mailto:nimitbhardwaj@gmail.com" target="_blank" rel="noreferrer noopener">
                        <img src={email_logo} className="srb-logo" alt="email"/>
                      </a>
                    </div>
                  </div>
                </ProfilePic>
              </div>
              <div className="col-sm-6 srb-desc">
                <h3>Nimit Bhardwaj(CT0, Co-Founder)</h3>
                <p>
                A curious guy who is in love with problems.
                I am student of Computer Science at Nit Hamirpur,
                enthusiastic about learning new algorithms and technologies related to computer science. 
                Those who know me say me a lazy programmer as I am quite lazy at repeating the stuff,
                I am habitual of writing down script to automate almost everthing that I feel like boring in repeating everytime.
                I am a compitive programmer as well as an Open Source lover.
                </p>
              </div> 
            </div>
          </div>
        </div>
        <br/>
        <hr/>

        <div className="row col-sm-12">
          <div className="col-sm-3 srb-profile-pic">
            <ProfilePic src={gourav_dp}>
              <div className="srb-profile-cover">
                <h3 className="srb-profile-name">Gourav Kandoria</h3>
                <br/>
                <div className="srb-profile-links">
                  <a href="http://www.linkedin.com/in/gourav-kandoria-075209160/" target="_blank" rel="noreferrer noopener">
                   <img src={linkedin_logo} className="srb-logo" alt="linkedin"/>
                  </a>
                  <a href="http://github.com/gouravkandoria" target="_blank" rel="noreferrer noopener">
                    <img src={github_logo} className="srb-logo" alt="github"/>
                  </a>
                  <a href="mailto:gouravkandoria1500@gmail.com" target="_blank" rel="noreferrer noopener">
                    <img src={email_logo} className="srb-logo" alt="email"/>
                  </a>
                </div>
              </div>
            </ProfilePic>
          </div>
          <div className="col-sm-3 srb-profile-pic">
            <ProfilePic src={vishi_dp}>
              <div className="srb-profile-cover">
                <h3 className="srb-profile-name">Vishi Choudhary</h3>
                <br/>
                <div className="srb-profile-links">
                  <a href="http://www.linkedin.com/in/" target="_blank" rel="noreferrer noopener">
                   <img src={linkedin_logo} className="srb-logo" alt="linkedin"/>
                  </a>
                  <a href="http://github.com/vishichoudhary" target="_blank" rel="noreferrer noopener">
                    <img src={github_logo} className="srb-logo" alt="github"/>
                  </a>
                  <a href="mailto:vishal129.vk@gmail.com" target="_blank" rel="noreferrer noopener">
                    <img src={email_logo} className="srb-logo" alt="email"/>
                  </a>
                </div>
              </div>
            </ProfilePic>
          </div>
          <div className="col-sm-3 srb-profile-pic">
            <ProfilePic src={sahoo_dp}>
              <div className="srb-profile-cover">
                <h3 className="srb-profile-name">Sourav Sahoo</h3>
                <br/>
                <div className="srb-profile-links">
                  <a href="http://www.linkedin.com/in/souravsahoo" target="_blank" rel="noreferrer noopener">
                   <img src={linkedin_logo} className="srb-logo" alt="linkedin"/>
                  </a>
                  <a href="http://github.com/souravirus" target="_blank" rel="noreferrer noopener">
                    <img src={github_logo} className="srb-logo" alt="github"/>
                  </a>
                  <a href="mailto:sahoosourav1996@gmail.com" target="_blank" rel="noreferrer noopener">
                    <img src={email_logo} className="srb-logo" alt="email"/>
                  </a>
                </div>
              </div>
            </ProfilePic>
          </div>
        </div>
      </div>
    );
  }
}
export default About