import React, {Component} from 'react';

import Profile from '../components/Profile/Profile.js';

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
        <Profile margin="0">
          <Profile.Dp src={srb_dp} title="Srb Cheema">
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
          </Profile.Dp>
          <Profile.Desc title="Srb Cheema (CEO, Founder)">
            A curious guy who is in love with problems.
            I am student of Computer Science at Nit Hamirpur,
            enthusiastic about learning new algorithms and technologies related to computer science. 
            Those who know me say me a lazy programmer as I am quite lazy at repeating the stuff,
            I am habitual of writing down script to automate almost everthing that I feel like boring in repeating everytime.
            I am a compitive programmer as well as an Open Source lover.
          </Profile.Desc>
        </Profile>

        <Profile margin="1">
          <Profile.Dp src={nimit_dp} title="Nimit Bhardwaj">
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
          </Profile.Dp>
          <Profile.Desc title="Nimit Bhardwaj (CT0, Founder)">
            Final year Computer Science Engineering undergraduate with Logical thinking capability and capabilities
            to undertake challenging projects that will meet the design and development needs of the software field.
            With the strong zeal and skills to identify new problems and develop the innovative solutions,
            with the wish to contribute substantially in the software field.<br/>
            A proud fella, proud to be a student, proud to be a tech lead, proud to be an INDIAN.
          </Profile.Desc>
        </Profile>

        <Profile margin="0">
          <Profile.Dp src={gourav_dp} title="Gourav Kandoria">
            <a href="http://www.linkedin.com/in/gourav-kandoria-075209160/" target="_blank" rel="noreferrer noopener">
              <img src={linkedin_logo} className="srb-logo" alt="linkedin"/>
            </a>
            <a href="http://github.com/gouravkandoria" target="_blank" rel="noreferrer noopener">
              <img src={github_logo} className="srb-logo" alt="github"/>
            </a>
            <a href="mailto:gouravkandoria1500@gmail.com" target="_blank" rel="noreferrer noopener">
              <img src={email_logo} className="srb-logo" alt="email"/>
            </a>
          </Profile.Dp>
          <Profile.Desc title="Gourav Kandoria (Developer, Co-Founder)">
            Hello, I am final year student at NIT Hamirpur,
            loves to learn new skills. A little more inclined towards logical and philosphical stuff.
            I like reading non-fiction books.
          </Profile.Desc>
        </Profile>

        <Profile margin="1">
          <Profile.Dp src={vishi_dp} title="Vishal Choudhary">
            <a href="http://www.linkedin.com/in/vishal-choudhary-547a98141" target="_blank" rel="noreferrer noopener">
              <img src={linkedin_logo} className="srb-logo" alt="linkedin"/>
            </a>
            <a href="http://github.com/vishichoudhary" target="_blank" rel="noreferrer noopener">
              <img src={github_logo} className="srb-logo" alt="github"/>
            </a>
            <a href="mailto:vishal129.vk@gmail.com" target="_blank" rel="noreferrer noopener">
              <img src={email_logo} className="srb-logo" alt="email"/>
            </a>
          </Profile.Dp>
          <Profile.Desc title="Vishal Choudhary (Backend Designer)">
            Hi, I am Vishal Choudhary, a final year Computer Science Student at NITH.
            I love to code, listen music, i am a folk song lover.
            Also I love to play computer games, I have completed many adventures games like all the part of resident evil(BioHazards), GTA, many others.
            Recently I have switched to competitive games like CS:GO, PUBG (PC one), which you play from steam, not that fucking mobile pubg.
            I like to spend time on my pc doing stuff related to either python, linux or related to some automating scripting.
          </Profile.Desc>
        </Profile>

        <br/>
        <h2>Our Sponsors and Partners</h2>
        <div className="row col-sm-12">
          <Profile.Dp src={sahoo_dp} title="Sourav Sahoo">
            <a href="http://www.linkedin.com/in/souravsahoo" target="_blank" rel="noreferrer noopener">
              <img src={linkedin_logo} className="srb-logo" alt="linkedin"/>
            </a>
            <a href="http://github.com/souravirus" target="_blank" rel="noreferrer noopener">
              <img src={github_logo} className="srb-logo" alt="github"/>
            </a>
            <a href="mailto:sahoosourav1996@gmail.com" target="_blank" rel="noreferrer noopener">
              <img src={email_logo} className="srb-logo" alt="email"/>
            </a>
          </Profile.Dp>
          <Profile.Dp src={sahoo_dp} title="Sourav Sahoo">
            <a href="http://www.linkedin.com/in/souravsahoo" target="_blank" rel="noreferrer noopener">
              <img src={linkedin_logo} className="srb-logo" alt="linkedin"/>
            </a>
            <a href="http://github.com/souravirus" target="_blank" rel="noreferrer noopener">
              <img src={github_logo} className="srb-logo" alt="github"/>
            </a>
            <a href="mailto:sahoosourav1996@gmail.com" target="_blank" rel="noreferrer noopener">
              <img src={email_logo} className="srb-logo" alt="email"/>
            </a>
          </Profile.Dp>
          <Profile.Dp src={sahoo_dp} title="Sourav Sahoo">
            <a href="http://www.linkedin.com/in/souravsahoo" target="_blank" rel="noreferrer noopener">
              <img src={linkedin_logo} className="srb-logo" alt="linkedin"/>
            </a>
            <a href="http://github.com/souravirus" target="_blank" rel="noreferrer noopener">
              <img src={github_logo} className="srb-logo" alt="github"/>
            </a>
            <a href="mailto:sahoosourav1996@gmail.com" target="_blank" rel="noreferrer noopener">
              <img src={email_logo} className="srb-logo" alt="email"/>
            </a>
          </Profile.Dp>
          <Profile.Dp src={sahoo_dp} title="Sourav Sahoo">
            <a href="http://www.linkedin.com/in/souravsahoo" target="_blank" rel="noreferrer noopener">
              <img src={linkedin_logo} className="srb-logo" alt="linkedin"/>
            </a>
            <a href="http://github.com/souravirus" target="_blank" rel="noreferrer noopener">
              <img src={github_logo} className="srb-logo" alt="github"/>
            </a>
            <a href="mailto:sahoosourav1996@gmail.com" target="_blank" rel="noreferrer noopener">
              <img src={email_logo} className="srb-logo" alt="email"/>
            </a>
          </Profile.Dp>
        </div>
      </div>
    );
  }
}
export default About