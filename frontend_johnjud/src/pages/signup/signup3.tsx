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
  FirstName: string;
  LastName: string;
  ProfileURL: string;
  Birthday: string;
  Gender: string;
  PhoneNo: string;
  LocationLat: string;
  LocationLong: string;
  TimeUpdate: string,
  id: string
}

const Signup3 = () =>{
  return(
    <div>
      <Navigation2/>
      <Container id='contain'>
        <div className='box_img'>
          <img src={jjicon} alt='test' className='rounded-lg'/>
        </div>

        <Formik
          initialValues={{
            FirstName: '',
            LastName: '',
            ProfileURL:'',
            Birthday: '',
            Gender: '',
            PhoneNo:'',
            LocationLat: '',
            LocationLong: '',
            TimeUpdate:'',
            id:''
          }}
          onSubmit={async(values: Value2,actions)=>{
            console.log(values.FirstName)
            const sendInfo ={
              "FirstName": values.FirstName,
              "LastName": values.LastName,
              "ProfileURL": values.ProfileURL,
              "Birthday": values.Birthday,
              "Gender": values.Gender,
              "PhoneNo": values.PhoneNo,
              "LocationLat": values.LocationLat,
              "LocationLong": values.LocationLong,
              "TimeUpdate": values.TimeUpdate,
              "id": values.id
            }
           const res = await fetch('http://localhost:2000/signup/user-info',{
               method:'PATCH',
               headers:{'Content-Type': 'application/json'},
               body: JSON.stringify(sendInfo)
           })
           console.log(sendInfo)
           console.log('success')
          }}
        >
          
        {() => (
        <Form>
          <Col>
            <FormGroup>
              <Label for="FirstName">Name*</Label>
              <Field name="FirstName" 
                       type="text" 
                       id="Name" 
                       placeholder="name"/>
              <ErrorMessage component="div" name="FirstName" className="invalid-feedback" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="LastName">Surname*</Label>
              <Field name="LastName" 
                       type="text" 
                       id="Surname" 
                       placeholder="surname"/>
              <ErrorMessage component="div" name="LastName" className="invalid-feedback" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="PhoneNo">Phone Number*</Label>
              <Field name="PhoneNo" 
                       type="tel" 
                       id="phone" 
                       placeholder="phone number"/>
              <ErrorMessage component="div" name="PhoneNo" className="invalid-feedback" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Birthday">Birth Date*</Label>
              <Field name="Birthday" 
                       type="date" 
                       id="Date" 
                       />
              <ErrorMessage component="div" name="Date" className="invalid-feedback" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Gender">Gender</Label>
              <div id='box' className='form-control'>
                <div className="custom-control custom-radio custom-control-inline">
                  <Field name="Gender" 
                       type="radio" 
                       id="gender"
                       value='male' 
                  />
                  <label>Male</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <Field name="Gender" 
                       type="radio" 
                       id="gender"
                       value='female' 
                  />
                  <label>Female</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <Field name="Gender" 
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

export default Signup3;