import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {GoogleLogin} from 'react-google-login';
import {Button} from 'reactstrap';
import './signin.css';

const clientId = '99307406475-s1a1a9rcrfpo3kchirudo8i8fnidr0og.apps.googleusercontent.com'

const responseGoogle = (response : any) => {
  console.log(response);
}

const signin = () =>{
  return(
    <section className='container'>
      <div className='left-half'>
        <img src={'logojj.png'} alt='test' className='rounded-lg'/>
      </div>
      <div className='right-half'>
        <div className='right-white-bg'>
          <div className='box'>
          <h2 className='welcome'> Welcome to JohnJud! </h2>
            <GoogleLogin
             clientId={clientId}
             buttonText="Sign in with Google account"
             onSuccess={responseGoogle}
             onFailure={responseGoogle}
             cookiePolicy={'single_host_origin'}
            />
            <br/>
            <br/>
            <Button outline color='secondary'><i></i>Sign in with JohnJud account</Button>
          <div className='container'>
              <br/>
              <p className='register'>haven't register? sign up </p>
              <p className='head'>Username</p>
              <input className='form-control' placeholder='Username'></input>
              <p className='head'>Password</p>
              <input className='form-control' placeholder='Password'></input>
              <br/>
              <Button className='button_signin'>Sign In</Button>
          </div>
         </div> 
        </div> 
      </div>
    </section>
  )
}

export default signin;