import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Container,FormGroup, Col}  from 'reactstrap';
import { Formik,Form, Field} from 'formik'
import { useHistory } from "react-router-dom";
import mobile from './component/mobile.png'
import Navigation2 from '../../Navigation/Navigation2';


interface ValueOTP{
  id:string;
  FeedbackOTP:string;
}


const Signup2 = () =>{ 
  let history = useHistory();
  return(
    <div>
      <Navigation2/>
      <Container className='bigbox'>
          <img src={mobile} alt='mobile' className='mobile'/>
           <div className='rightOTP'>
            <div className='text_rightOTP'>
              <div className='text2'>
                <p style={{fontSize:14}}>OTP has been sent via SMS to your registered number (+66 xx-xxx-xxxx)</p>
                <p id='text3'>please enter your OTP</p>
              </div>
              <div className='otp'>

              <Formik
                initialValues={{
                  id:'',
                  FeedbackOTP:''
                }}
                
                onSubmit={ async (values:ValueOTP,actions) =>{
                  const OTPcollect ={
                    "id": localStorage.getItem('id'),
                    "FeedbackOTP": values.FeedbackOTP
                  }
                  
                    const res = await fetch('http://localhost:2000/signup/v2/verify-phone',{
                      method:'PATCH',
                      mode: 'cors',
                      headers:{'Content-Type': 'application/json'},
                      body: JSON.stringify(OTPcollect)
                    })

                    // fetch id to const 
                    const res2 = await res.json();  
                    
                    if(res2.success==false){
                      alert('WRONG OTP!!!')
                  }

                    if(res2.success==true){
                      actions.setSubmitting(false);
                      history.push('/signup3')
                    }
                  
                  
                }
              }       
                render={props =>  
                <Form>
                  <Col>
                    <FormGroup id="mamacup">
                    <Field name="FeedbackOTP" 
                        type="text" 
                        id="otp" 
                        placeholder="xxx-xxx"
                        className='col-lg-6 input_otp'
                        />
                    </FormGroup>
                  </Col>
                  <Button id='submit' type="submit" value='submit'>Submit</Button>
                </Form>
                }
              />
                  
              </div>
            </div>
          </div>
      </Container>
    </div>
  )
}

export default Signup2;