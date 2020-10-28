import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Container,FormGroup,Col,Label} from 'reactstrap';
import './signin.css';
import { useHistory } from "react-router-dom";

import { Formik,Form, Field, ErrorMessage} from 'formik'
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
    Password: string
}

const Signin = () =>{
    let history = useHistory();
    return(
        <div>
            <Navigation2/>
            <Container>
                <div className='left-half'>
                    <div id='logo'/>
                </div>
                <div className='right-half'>
                    <div className='right-white-bg'>
                        <div className='box2'>
                            <Container>
                                <h2 id='center'> Sign in </h2>
                                <br/><br/>

                                <Formik
                                    initialValues={{
                                        UserName: '',
                                        Password: ''
                                    }}
                                    onSubmit={async (values:Value2,actions) => {
                                        const sendSignIn ={
                                            UserName: values.UserName,
                                            Password: values.Password
                                        }
                                        const res = await fetch('http://localhost:2000/signin',{
                                            method:'POST',
                                            mode: 'cors',
                                            headers:{'Content-Type': 'application/json'},
                                            body: JSON.stringify(sendSignIn)
                                        });
                                        console.log(sendSignIn.UserName)
                                        console.log(sendSignIn.Password)
                                        console.log('success')
                                        actions.setSubmitting(false);
                                        history.push('/receiver/home')
                                    }}
                                >
                                    {({touched,errors,isSubmitting}) => (
                                        <Form>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="username">Username*</Label>
                                                    <Field name="UserName"
                                                           type="text"
                                                           id="username"
                                                           className={`form-control ${touched.UserName ? errors.UserName ? 'is-invalid' : 'is-valid' : ''}`}
                                                           placeholder="username"/>
                                                    <ErrorMessage component="div" name="UserName" className="invalid-feedback" />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="password" id='head_box'>Password</Label>
                                                    <Field name="Password"
                                                           type="password"
                                                           id="password"
                                                           className={`form-control ${touched.Password ? errors.Password ? 'is-invalid' : 'is-valid' : ''}`}
                                                           placeholder="password"/>
                                                    <ErrorMessage component="div" name="password" className="invalid-feedback" />
                                                </FormGroup>
                                            </Col>
                                            <Button type='submit' className='button_signin' disabled={isSubmitting}>Sign In</Button>
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

export default Signin;