import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Container,FormGroup, Col}  from 'reactstrap';
import { Formik,Form, Field} from 'formik'
import { useHistory } from "react-router-dom";
import mobile from '../../../pages/signup/component/mobile.png'
import Navigation from '../../../Navigation/Navigation';

interface ValueOTP{
    id:string;
    FeedbackOTP:string;
  }  
  
  const ConfirmOTP = () =>{ 
    let history = useHistory();
    return(
      <div>
        <Navigation/>
        <Container className='bigbox'>
            <img src={mobile} alt='mobile' className='mobile'/>
             <div className='rightOTP'>
              <div className='text_rightOTP'>
                <div className='text2'>
                  <p style={{fontSize:16}}>OTP has been sent via SMS to your registered number</p>
                  <p style={{fontSize:16}}>(+66 xx-xxx-xxxx)</p>
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
                      "FeedbackOTP": values.FeedbackOTP
                    }
                    const token = localStorage.getItem('Token');
                    const userId = localStorage.getItem('UserId');
                    
                    const res = await fetch('http://localhost:2000/user/edit-user/change-phone/verify-phone',{
                    method: 'PATCH',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify(OTPcollect)
                    })

                    // fetch id to const 
                    const res2 = await res.json();  
                    console.log(res2)
                    console.log(res2.success)
                    
                    if(res2.success==false){
                    alert('WRONG OTP!!!')
                }

                    if(res2.success==true){
                    actions.setSubmitting(false);
                    history.push(`/receiver/userprofile/${userId}`)
                    }                    
                  }
                }       
                  render={props =>  
                  <Form id="nanacup">
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
  
  export default ConfirmOTP;