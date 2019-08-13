import React, {Component} from 'react';

import { server_url } from '../../util/constants';
import api_fetch from '../../util/auth';
import './footer.css'

class Footer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      status:'yellow'
    }
  }
  componentDidMount = () => {
    var url = `${server_url}/get_version`
    api_fetch(url, { // Your POST endpoint
      method: 'GET',
    }).then(
      success => {
        let message = `running : ${success['version']}`;
        this.setState({message:message,status:'green'});
      }
    ).catch(
      error => {
        let message = 'server seems offile';
        this.setState({message:message,status:'red'});
        console.log(error) // Handle the error response object
      }
    );
  }

  render(){
    return(
      <div>
        <div style={{marginBottom:'30px'}}></div> {/**for bottom margin */}
        <div className="srb-footer">
          <hr style={{marginBottom:'0'}}/>
          <div className="row">
            <div className="hidden-xs col-sm-1 status-dot"></div>
            <div className="col-12 col-sm-10 text-center content">
              <a href="https://www.linkedin.com/in/srbcheema1/"
              style={{color:'#999',textDecoration:'none'}}>
                  © 2019 Copyright:
                  <span style={{letterSpacing:'4px'}}> </span>
                  made with
                  <span style={{letterSpacing:'4px'}}> </span>
                  <span style={{color:'#8b8b8b', fontWeight:'700'}}>ahankaar</span>
                  <span style={{letterSpacing:'4px'}}> </span>
                  in India
              </a>
            </div>
            <div className="hidden-xs col-sm-1 text-center content status-dot">
              <i className="status-dot fas fa-circle" style={{color:this.state.status}}></i>
            </div>
          </div> {/**end row */}
        </div>
      </div>
    );
  }
}
export default Footer;