import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container ,FormGroup,Label,Button, Col}  from 'reactstrap';
import jjicon from './component/logojj.png'
import back from './component/arrow_left.png'
import next from './component/arrow_right.png'
import './signup.css'
import { NavLink } from 'react-router-dom';

import { Formik,Form, Field, ErrorMessage , FormikHelpers } from 'formik'
import * as Yup from 'yup'

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
});

interface Value2{
  username: string,
  password: string
}
const signup2 = () =>{
  return(
    <div>
      <Container id='contain'>
        <div className='box_img'>
          <img src={jjicon} alt='test' className='rounded-lg'/>
        </div>
        <Formik
          initialValues={{
            username: '',
            password: ''
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
              <Label for="username">Username*</Label>
              <Field name="username" 
                       type="text" 
                       id="username" 
                       className={`form-control ${touched.username ? errors.username ? 'is-invalid' : 'is-valid' : ''}`}
                       placeholder="username"/>
              <ErrorMessage component="div" name="username" className="invalid-feedback" />
            </FormGroup>
          </Col>
         <Col>
            <FormGroup>
              <Label for="password">Password*</Label>
              <Field name="password" 
                       type="password" 
                       id="password" 
                       className={`form-control ${touched.password ? errors.password ? 'is-invalid' : 'is-valid' : ''}`}
                       placeholder="password"/>
              <ErrorMessage component="div" name="password" className="invalid-feedback" />
            </FormGroup>
          </Col>
          <br/><br/>
          <NavLink to='/signup'><Button className='button_back'><img src={back} alt=''/>Back</Button></NavLink>
          <NavLink to='/signup3'><Button className='button_next'>Next<img src={next} alt=''/></Button></NavLink>
          
          <div>
            <br/><br/><br/><br/>
            <button type='submit' value='submit' >submit</button>
          </div>
          
          </Form>
         )}  
        </Formik>
      </Container>
    </div>
  )
}

export default signup2;