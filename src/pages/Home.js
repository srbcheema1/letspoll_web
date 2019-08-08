import React,{Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Image, Modal, Button } from 'react-bootstrap';
import { server_url } from '../extra/constants.js';
import api_fetch from '../extra/auth';
import login from '../extra/login';

import app_logo from '../extra/images/letspoll.png';

class Home extends Component{
  constructor(props) {
    super(props);
    this.initialstate = {
      message:null,
      showModel:false,
      islogged:false,
      modelvars:{
        pollname_err:false,
        username_err:false,
        userpass_err:false,
        confirmpass_err:false,
        show_err:false,
      }
    };
    this.state = this.initialstate;
  }

  create_poll_model = () => {
    this.setState({showModel:true});
  }
  
  make_admin = (pollid,userid,secret_token) => {
    var url = `${server_url}/auth/make_admin/`;
    var data = {
      'poll_id':pollid,
      'secret_token':secret_token,
      'user_id':userid,
    }
    data = JSON.stringify(data);
    api_fetch(url,{ // Your POST endpoint
      method: 'POST',
      body:data
    }).then(
      success => {
        let username = document.getElementById("username_input").value;
        let userpass = document.getElementById("userpass_input").value;
        login(username, userpass, pollid)
      }
    ).catch(
      error => console.log(error) // Handle the error response object
    )
  }// create_request

  create_user = (pollid,secret_token) => {
    var url = `${server_url}/auth/create_user/`;
    let username = document.getElementById("username_input").value;
    let userpass = document.getElementById("userpass_input").value;
    var data = {
      'poll_id':pollid,
      'username':username,
      'password':userpass,
    }
    data = JSON.stringify(data);
    api_fetch(url, { // Your POST endpoint
      method: 'POST',
      body:data
    }).then(
      success => {
        this.make_admin(pollid,success['user_id'],secret_token);
      }
    ).catch(
      error => console.log(error) // Handle the error response object
    )
  }

  create_poll = () => {
    var url = `${server_url}/polls/`
    var pollname = document.getElementById("pollname_input").value.trim();
    var is_secret = document.getElementById("issecret_input").checked;
    var data = {
      'poll_name':pollname,
      'is_secret_poll':is_secret
    }
    data = JSON.stringify(data);
    api_fetch(url, { // Your POST endpoint
      method: 'POST',
      body:data
    }).then(
      success => {
        this.create_user(success['poll_id'],success['secret_token']);
      }
    ).catch(
      error => console.log(error) // Handle the error response object
    )
  }

  handleCreate = () => {
    let modelvars = this.state.modelvars;
    modelvars.show_err = true;
    this.setState({modelvars:modelvars});

    let valid = this.form_validate();
    if(!valid) {
      return;
    }

    function standardize(str) {
      str = str.trim();
      str = str.replace(" ","-");
      return str;
    }
    let pollname = standardize(document.getElementById("pollname_input").value);
    
    var url = `${server_url}/polls/exists/${pollname}/`
    api_fetch(url, {
      method: 'GET',
    }).then(
      success => {
        if(!success['exists']){
          this.create_poll();
        } else {
          modelvars.pollname_err = "Poll name not available";
          this.setState({modelvars:modelvars});
        }
      }
    ).catch(
      error => console.log(error)
    )
  }

  handleClose = () => {
    let modelvars = this.state.modelvars;
    modelvars.show_err = false;
    modelvars.pollname_err = false;
    modelvars.username_err = false;
    modelvars.userpass_err = false;
    modelvars.confirmpass_err = false;
    this.setState({modelvars:modelvars,showModel:false});
  }

  form_validate = () => {
    let pollname = document.getElementById("pollname_input").value;
    pollname = pollname.trimLeft();
    document.getElementById("pollname_input").value = pollname;
    
    let username = document.getElementById("username_input").value;
    let userpass = document.getElementById("userpass_input").value;
    let confirmpass = document.getElementById("confirmpass_input").value;
    let modelvars = this.state.modelvars;
    if(!modelvars.show_err) {
      return true;
    }
    let err = false;

    let reg = /^[a-zA-Z]+[a-zA-Z0-9 _]*$/;// doesn't start with space or underscore or number
    reg = /^[a-zA-Z0-9 _]+$/;
    if(pollname.length < 1) {
      modelvars.pollname_err = "Poll name must not be empty";
      err = true;
    } else if(!reg.test(pollname)){
      modelvars.pollname_err = "Should not contain any special chars except _";
      err = true;
    }else {
      modelvars.pollname_err = false;
    }

    reg = /^[a-zA-Z0-9_]+$/;
    if(username.length < 1) {
      modelvars.username_err = "User name must not be empty";
      err = true;
    } else if(!reg.test(username)){
      modelvars.username_err = "Should contain _ a-z A-Z 0-9 only";
      err = true;
    } else {
      modelvars.username_err = false;
    }

    if(userpass.length < 1) {
      modelvars.userpass_err = "Password must not be empty";
      err = true;
    } else {
      modelvars.userpass_err = false;
    }

    if(userpass !== confirmpass) {
      modelvars.confirmpass_err = "Passwords donot match";
      err = true;
    } else { 
      modelvars.confirmpass_err = false;
    }

    this.setState({modelvars:modelvars});

    if(err){
      return false;
    }
    return true;
  }

  render() {
    // move the islogged state to redux
    // also add pollname and username to redux
    if(this.state.islogged) {
      var pollname = "";
      var username = "";
      return (
        <Redirect path={`/poll/${pollname}/user/${username}`}/>
      )
    }
    let pollname_color = '#BBB';
    if(this.state.modelvars.pollname_err){pollname_color = 'red'}
    let username_color = '#BBB';
    if(this.state.modelvars.username_err){username_color = 'red'}
    let userpass_color = '#BBB';
    if(this.state.modelvars.userpass_err){userpass_color = 'red'}
    let confirmpass_color = '#BBB';
    if(this.state.modelvars.confirmpass_err){confirmpass_color = 'red'}
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6" style={{textAlign:"center"}}>
            <Image src={app_logo} style={{maxHeight:"250px"}}roundedCircle fluid />
          </div>
          <div className="col-sm-3"></div>
        </div>
        <div className="row" style={{marginTop:'100px'}}>
          <div className="col-sm-3"></div>
          <div className="col-sm-3" style={{textAlign:'center',marginTop:'20px'}}>
            <button className="btn btn-outline-success" type="button" onClick={this.create_poll_model} style={{minWidth:'200px'}}>
              Create Poll
            </button>
          </div>
          <div className="col-sm-3" style={{textAlign:'center',marginTop:'20px'}}>
            <Link to="/Join">
              <button className="btn btn-outline-info" type="button" style={{minWidth:'200px'}}>
                Join Poll
              </button>
            </Link>
          </div>
          <div className="col-sm-3"></div>
        </div>
        <Modal show={this.state.showModel} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create New Poll</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modal_desc">
            <form>
              <div className="form-group">
                <input type="text" id="pollname_input" style={{borderColor:pollname_color}} placeholder="Poll name" className="form-control" onKeyUp={this.form_validate}/>
                <small className="form-text" style={{color:'red'}}>{this.state.modelvars.pollname_err}</small>
              </div>
              <div className="form-group">
                <input type="text" id="username_input" style={{borderColor:username_color}} placeholder="User name" className="form-control" onKeyUp={this.form_validate}/>
                <small className="form-text" style={{color:'red'}}>{this.state.modelvars.username_err}</small>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" style={{borderColor:userpass_color}} placeholder="password" id="userpass_input" onKeyUp={this.form_validate}/>
                <small className="form-text" style={{color:'red'}}>{this.state.modelvars.userpass_err}</small>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" style={{borderColor:confirmpass_color}} placeholder="confirm password" id="confirmpass_input" onKeyUp={this.form_validate}/>
                <small className="form-text" style={{color:'red'}}>{this.state.modelvars.confirmpass_err}</small>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="issecret_input" value="true" style={{marginLeft:'0px'}}/>
                <label className="form-check-label" style={{color:'#888',marginLeft:'20px'}}>Secret Poll (voter list is not public)</label>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.handleCreate}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Home;