import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useHistory } from "react-router-dom";
import { Formik,Form, Field, ErrorMessage} from 'formik'
import {Persist} from 'formik-persist'


import next from './component/arrow_right.png'
import { Container, FormGroup,Label,Button, Col}  from 'reactstrap';
import jjicon from './component/logojj.png'
import './signup.css'
import Navigation2 from '../../Navigation/Navigation2';
import Messages from '../../pages_sign_donator/chat/components/Messages/Messages';


interface Value2{
  Email: string;
  UserName: string;
  Password: string;
  FirstName: string;
  LastName: string;
  Birthday: string;
  Gender: string;
  PhoneNo: string;
  Address: string;
  id:string;
}

const Signup= () =>{
  let history = useHistory();
  return(
    <div>
      <Navigation2/>
      <Container id='contain'>  
        <div className='box_img'>
          <img src={jjicon} alt='icon' className='rounded-lg'/>
        </div>
        <div>
        <Formik
          initialValues={{
            Email: '',
            UserName: '',
            Password:'',
            FirstName: '',
            LastName: '',
            Birthday: '',
            Gender: '',
            PhoneNo:'',
            Address: '',
            id:'',
          }}
        
          onSubmit={ async (values:Value2,actions) =>{
            const sendInfo ={
               "Email": values.Email,
               "UserName": values.UserName,
               "Password": values.Password,
               "FirstName": values.FirstName,
               "LastName": values.LastName,
               "Birthday": values.Birthday,
               "Gender": values.Gender,
               "PhoneNo": values.PhoneNo,
               "Address": values.Address,
               "id": values.id,
             }
            
            const res = await fetch('http://localhost:2000/signup/v2/register',{
                method:'POST',
                mode: 'cors',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(sendInfo)
            })
            
            
            
            // fetch id to const 
            const res2 = await res.json();  
            console.log(res2)
            console.log(res2.message)
            console.log(res2.id)

            if(res2.message!=undefined){
                alert(res2.message)
            }


            values.id = res2.id;
            console.log(values.id);
            console.log(sendInfo)
            localStorage.setItem('keyinfo', JSON.stringify(sendInfo))
            localStorage.setItem('id',res2.id)

            if(res2.success==true){
              actions.setSubmitting(false);
              history.push('/signup2')
            }
          }
        }
          render={props =>  
          <Form>
            <Col>
              <FormGroup>
                <Label htmlfor="email" className="informationh">Email*</Label>
                <Field name="Email" 
                       type="email" 
                       id="email" 
                       placeholder="email"
                       className="inp_text"
                       required
                       />
              </FormGroup>
            </Col>
            <Col>
            <FormGroup>
              <div className="pageset">
              <Label for="username" className="informationh">Username*</Label><p className='ErrorFont'>must be longer than or equal to 8 characters</p>
              </div>
              <Field name="UserName" 
                       type="text" 
                       id="username"
                       className="inp_text" 
                       placeholder="username"
                       required
                       />
              <ErrorMessage component="div" name="username" className="invalid-feedback" />
            </FormGroup>
          </Col>
         <Col>
            <FormGroup>
              <div className="pageset">
              <Label for="password" className="informationh">Password*</Label><p className='ErrorFont'>must have at least one capital letter and longer than or equal to 8 characters</p>
              </div>
              <Field name="Password" 
                       type="password" 
                       id="password" 
                       className="inp_text"
                       placeholder="password"
                       required
                       />
              <ErrorMessage component="div" name="password" className="invalid-feedback" />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label for="FirstName" className="informationh">Firstname*</Label>
              <Field name="FirstName" 
                       type="text" 
                       id="Name" 
                       className="inp_text"
                       placeholder="name"
                       required
                       />
              <ErrorMessage component="div" name="FirstName" className="invalid-feedback" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="LastName" className="informationh">Lastname*</Label>
              <Field name="LastName" 
                       type="text" 
                       id="Surname"
                       className="inp_text" 
                       placeholder="surname"
                       required
                       />
              <ErrorMessage component="div" name="LastName" className="invalid-feedback" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="PhoneNo" className="informationh">Phone Number*</Label> 
              <Field name="PhoneNo" 
                       type="tel" 
                       id="phone"
                       className="inp_text" 
                       placeholder="ex 0921234567"
                       required
                       />
              <ErrorMessage component="div" name="PhoneNo" className="invalid-feedback" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Birthday" className="informationh">Birth Date*</Label>
              <Field name="Birthday" 
                       type="date" 
                       className="inp_text1" 
                       id="Date" 
                       required
                       />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Gender" className="informationh">Gender</Label>
              <div id='box' className='form-control'>
                <div id="nanii">
                <div className="custom-control">
                  <Field name="Gender" 
                       type="radio" 
                       id="gender"
                       value='male' 
                       required
                  />
                  <label className="textgender">Male</label>
                </div>
                <div className="custom-control">
                  <Field name="Gender" 
                       type="radio" 
                       id="gender"
                       value='female' 
                  />
                  <label className="textgender">Female</label>
                </div>
                <div className="custom-control">
                  <Field name="Gender" 
                       type="radio" 
                       id="gender"
                       value='others' 
                  />
                  <label className="textgender">others</label>
                </div>
              </div>
              </div>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Address" className="informationh">Address*</Label>
              <Field name="Address" 
                       type="text" 
                       id="Address" 
                       className="inp_text"
                       placeholder='address'
                       required
                       />
            </FormGroup>
          </Col>  
          <div id="coco">
            <Button type="submit" value='submit' id='button_next'>Next<img src={next} alt=''/></Button>
          </div>
            <div className='box_white'></div>
            <Persist name='SignupInfo'/>
          </Form>
          }
         />
        </div>
      </Container>
    </div>
  )
}

export default Signup;