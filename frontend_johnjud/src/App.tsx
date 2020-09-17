import React, { Component } from 'react';
import {GoogleLogin} from 'react-google-login';
import { Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const clientId = '99307406475-s1a1a9rcrfpo3kchirudo8i8fnidr0og.apps.googleusercontent.com'

const responseGoogle = (response : any) => {
  console.log(response);
}

class Login extends Component{
  render(){
    return(
    <section className='container'>
      <div className='left-half'>
        <img src='../public/Component/logo 3.png' alt='test' className='rounded-lg'></img>
      </div>
      <div className='right-half'>
        <div className='right-white-bg'>
          <div className='box'>
          <h2 className='welcome'> Welcome to JohnJud! </h2>
            <GoogleLogin
             clientId={clientId}
             buttonText="Login"
             onSuccess={responseGoogle}
             onFailure={responseGoogle}
             cookiePolicy={'single_host_origin'}
            />
           <p className='register'>haven't register? sign up </p>
            <Button color="success">Sign In</Button>
         </div> 
        </div> 
      </div>
    </section>
    );
  }
}  

export default Login;
