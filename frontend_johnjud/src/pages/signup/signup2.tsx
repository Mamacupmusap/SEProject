import React from 'react';

import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Container ,FormGroup,Label,Button, Col}  from 'reactstrap';
import jjicon from './component/logojj.png'
import back from './component/arrow_left.png'
import next from './component/arrow_right.png'
import './signup.css'
import { NavLink } from 'react-router-dom';

import { Formik,Form, Field, ErrorMessage , FormikHelpers } from 'formik'
import * as Yup from 'yup'
import Navigation2 from '../../Navigation/Navigation2';

const RegisterSchema = Yup.object().shape({
  UserName: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    Password: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
});

interface Value2{
  UserName: string,
  Password: string,
}

const get_id =async() =>{
  const res2 = await fetch ('http://localhost:2000/signup/check-email')
    console.log(res2)
}

const Signup2 = () => {
  let history = useHistory();
  return(
    <div>
      <Navigation2/>
      <Container id='contain'>
        <div className='box_img'>
          <img src={jjicon} alt='test' className='rounded-lg'/>
        </div>
        <Formik
          initialValues={{Email:'',UserName: '', Password:'',id:''}}
          onSubmit={ async (values:Value2,actions) =>{
            const sendUserPass ={
               "UserName": values.UserName,
               "Password": values.Password
            }
            get_id()
            const res = await fetch('http://localhost:2000/signup/logininfo',{
                method:'PATCH',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(sendUserPass)
            });
            console.log('success')
            actions.setSubmitting(false);
            history.push('/signup3')
          }
        }
        >
        {({touched,errors,isSubmitting}) => ( 
        
          <Form>
          <Col>
            <FormGroup>
              <Label for="username">Username*</Label>
              <Field name="username" 
                       type="text" 
                       id="username" 
                       className={`form-control ${touched.UserName ? errors.UserName ? 'is-invalid' : 'is-valid' : ''}`}
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
                       className={`form-control ${touched.Password ? errors.Password ? 'is-invalid' : 'is-valid' : ''}`}
                       placeholder="password"/>
              <ErrorMessage component="div" name="password" className="invalid-feedback" />
            </FormGroup>
          </Col>
          <br/><br/>
          <NavLink to='/signup'><Button className='button_back'><img src={back} alt=''/>Back</Button></NavLink>
          <Button type="submit" value='submit' id='button_next' disabled={isSubmitting}>Next<img src={next} alt=''/></Button>
          
          </Form>
         )}  
        </Formik>
      </Container>
    </div>
  )
}

export default Signup2;