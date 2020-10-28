import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useHistory } from "react-router-dom";
import {GoogleLogin} from 'react-google-login';
import { Formik,Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

import next from './component/arrow_right.png'
import { Container, FormGroup,Label,Button, Col}  from 'reactstrap';
import jjicon from './component/logojj.png'
import './signup.css'
import Navigation2 from '../../Navigation/Navigation2';

const clientId = '99307406475-s1a1a9rcrfpo3kchirudo8i8fnidr0og.apps.googleusercontent.com'

const responseGoogle = (response : any) => {
  console.log(response);
}

const RegisterSchema = Yup.object().shape({
  Email: Yup.string()
      .email('Invalid email')
      .required('This field is required.'),
});

interface Value2{
  Email: string;
}


const Signup= (props:any) =>{
  let history = useHistory();
  return(
    <div>
      <Navigation2/>
      <Container id='contain'>  
        <div className='box_img'>
          <img src={jjicon} alt='icon' className='rounded-lg'/>
        </div>
        <Container className='textbox'>
          <br/><br/>
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign up with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          <br/>
          <p className='line'><span>or create JohnJud account</span></p>
        </Container>
        <div>
        <Formik
          initialValues={{Email: ''}}
          
          onSubmit={ async (values:Value2,actions) =>{
            console.log(values.Email)
            const sendEmail ={
               "Email": values.Email
             }
            const res = await fetch('http://localhost:2000/signup/check-email',{
                method:'POST',
                mode: 'cors',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(sendEmail)
            })
            console.log(sendEmail)
            console.log('success')
            // fetch id to const 
            actions.setSubmitting(false);
            history.push('/signup2')
          }
        }
          
        >
          {({touched,errors,isSubmitting}) => (  
          <Form>
            <Col>
              <FormGroup>
                <Label htmlfor="email">Email*</Label>
                <Field name="Email" 
                       type="email" 
                       id="email" 
                       className={`form-control ${touched.Email ? errors.Email ? 'is-invalid' : 'is-valid' : ''}`}
                       placeholder="email"
                       
                       />
                <ErrorMessage component="div" name="email" className="invalid-feedback" />
              </FormGroup>
            </Col>
            <Button type="submit" value='submit' id='button_next' disabled={isSubmitting}>Next<img src={next} alt=''/></Button>
          </Form>
        )}
        </Formik>
        </div>
      </Container>
    </div>
  )
}

export default Signup;