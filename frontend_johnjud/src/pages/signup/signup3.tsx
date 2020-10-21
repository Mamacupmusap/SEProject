import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, FormGroup,Label,Button, Col}  from 'reactstrap';
import jjicon from './component/logojj.png'
import back from './component/arrow_left.png'
import next from './component/arrow_right.png'
import './signup.css'
import { NavLink } from 'react-router-dom';

import { Formik,Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import Navigation2 from '../../Navigation/Navigation2';

const RegisterSchema = Yup.object().shape({
    Name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    Surname: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    phone: Yup.string()
      .min(10,'Invalid number')
      .required('Required'),
    Date: Yup.string()
      .required('Required'),
    gender: Yup.string(),
    Address : Yup.string()
      .required('Required'),
});

interface Value2{
  Name: string;
  Surname: string;
  phone: string;
  Date: string;
  gender: string;
  Address: string;
}

const signup3 = () =>{
  return(
    <div>
      <Navigation2/>
      <Container id='contain'>
        <div className='box_img'>
          <img src={jjicon} alt='test' className='rounded-lg'/>
        </div>

        <Formik
          initialValues={{
            Name: '',
            Surname: '',
            phone: '',
            Date: '',
            gender: '',
            Address: ''
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
              <Label for="Name">Name*</Label>
              <Field name="Name" 
                       type="text" 
                       id="Name" 
                       className={`form-control ${touched.Name ? errors.Name ? 'is-invalid' : 'is-valid' : ''}`}
                       placeholder="name"/>
              <ErrorMessage component="div" name="Name" className="invalid-feedback" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Surname">Surname*</Label>
              <Field name="Surname" 
                       type="text" 
                       id="Surname" 
                       className={`form-control ${touched.Surname ? errors.Surname ? 'is-invalid' : 'is-valid' : ''}`}
                       placeholder="surname"/>
              <ErrorMessage component="div" name="Surname" className="invalid-feedback" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="phone">Phone Number*</Label>
              <Field name="phone" 
                       type="tel" 
                       id="phone" 
                       className={`form-control ${touched.phone ? errors.phone ? 'is-invalid' : 'is-valid' : ''}`}
                       placeholder="phone number"/>
              <ErrorMessage component="div" name="phone" className="invalid-feedback" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Date">Birth Date*</Label>
              <Field name="Date" 
                       type="date" 
                       id="Date" 
                       className={`form-control ${touched.Date ? errors.Date ? 'is-invalid' : 'is-valid' : ''}`}
                       />
              <ErrorMessage component="div" name="Date" className="invalid-feedback" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="gender">Gender</Label>
              <div id='box' className='form-control'>
                <div className="custom-control custom-radio custom-control-inline">
                  <Field name="gender" 
                       type="radio" 
                       id="gender"
                       value='male' 
                  />
                  <label>Male</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <Field name="gender" 
                       type="radio" 
                       id="gender"
                       value='female' 
                  />
                  <label>Female</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <Field name="gender" 
                       type="radio" 
                       id="gender"
                       value='others' 
                  />
                  <label>others</label>
                </div>
              </div>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Address">Address*</Label>
              <Field name="Address" 
                       type="text" 
                       id="Address" 
                       className={`form-control ${touched.Address ? errors.Address ? 'is-invalid' : 'is-valid' : ''}`}
                       placeholder='address'/>
              <ErrorMessage component="div" name="Address" className="invalid-feedback" />
            </FormGroup>
          </Col>
          <br/><br/>
          <NavLink to='/signup2'><Button className='secondary'><img src={back} alt=''/>Back</Button></NavLink>
          <NavLink to='/signup4'><Button className='button_next'>Next<img src={next} alt=''/></Button></NavLink>
          
          <div>
            <br/><br/><br/><br/>
            <button type='submit' value='submit' >submit</button>
          </div>
          
        </Form>
        )}  
        </Formik>

        <div id='bottom_bar'></div>

      </Container>
    </div>
  )
}

export default signup3;