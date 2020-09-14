import React, { Component } from 'react';
import {GoogleLogin} from 'react-google-login';
import { Button, Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const clientId = '99307406475-s1a1a9rcrfpo3kchirudo8i8fnidr0og.apps.googleusercontent.com'

const responseGoogle = (response : any) => {
  console.log(response);
}

class Login extends Component{
  render(){
    return(
      <div>
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <Button color="danger">Danger!</Button>
        <Alert color="primary">
          This is a primary alert — check it out!
        </Alert>
      </div>
    );
  }
}  

export default Login;
