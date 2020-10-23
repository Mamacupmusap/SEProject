import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Container,FormGroup,Col,Label} from 'reactstrap';
import './signin.css';
import { NavLink } from 'react-router-dom';

import { Formik,Form, Field, ErrorMessage , FormikHelpers } from 'formik'
import * as Yup from 'yup'
import Navigation2 from '../../Navigation/Navigation2';

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('This field is required.'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
});

interface Value2{
  email: string,
  password: string
}

const signin = () =>{
  return(
    <div>
      <Navigation2/>
    <Container>
      <div className='left-half'>
        <div id='logo'></div>
      </div>
      <div className='right-half'>
        <div className='right-white-bg'>
          <div className='box2'>
            <Container>
              <h2 id='center'> Sign in </h2>
              <br/><br/>

              <Formik
                initialValues={{
                  email: '',
                  password:''
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
                    <Label for="email" id='head_box'>Email</Label>
                    <Field name="email" 
                       type="email" 
                       id="email" 
                       className={`form-control ${touched.email ? errors.email ? 'is-invalid' : 'is-valid' : ''}`}
                       placeholder="email"/>
                    <ErrorMessage component="div" name="email" className="invalid-feedback" />
                    </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="password" id='head_box'>Password</Label>
                    <Field name="password" 
                       type="password" 
                       id="password" 
                       className={`form-control ${touched.password ? errors.password ? 'is-invalid' : 'is-valid' : ''}`}
                       placeholder="password"/>
                    <ErrorMessage component="div" name="password" className="invalid-feedback" />
                  </FormGroup>
                </Col>

                <NavLink to='/receiver/home'><Button type='submit' className='button_signin'>Sign In</Button></NavLink>
              </Form>
              )}
              </Formik>

            </Container>
          </div>
        </div>
      </div>
    </Container>
    </div>
  )
}

export default signin;