import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';
import { Formik,Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import * as Yup from 'yup'

import next from './component/arrow_right.png'
import { Container, FormGroup,Label,Button, Col}  from 'reactstrap';
import jjicon from './component/logojj.png'
import './signup.css'

const clientId = '99307406475-s1a1a9rcrfpo3kchirudo8i8fnidr0og.apps.googleusercontent.com'

const responseGoogle = (response : any) => {
  console.log(response);
}

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
      .email('Invalid email')
      .required('This field is required.'),
});

interface Value2{
  email: string;
}

const signup = () =>{
  return(
    <div>
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
          initialValues={{
            email: ''
          }}
          onSubmit={(
            values: Value2,
            { setSubmitting }: FormikHelpers<Value2>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
          validationSchema={RegisterSchema}
        >
          {({ errors, touched }) => (  
          <Form>
            <Col>
              <FormGroup>
                <Label htmlfor="email">Email*</Label>
                <Field name="email" 
                       type="email" 
                       id="email" 
                       className={`form-control ${touched.email ? errors.email ? 'is-invalid' : 'is-valid' : ''}`}
                       placeholder="email"/>
                <ErrorMessage component="div" name="email" className="invalid-feedback" />
              </FormGroup>
            </Col>
            <NavLink to='/signup2'><Button type="submit" value='submit' id='button_next'>Next<img src={next} alt=''/></Button></NavLink>
            
            <div>
              <br/><br/><br/><br/>
              <button type='submit' value='submit' >submit</button>
            </div>
          </Form>
        )}
        </Formik>
        </div>
      </Container>
    </div>
  )
}

export default signup;