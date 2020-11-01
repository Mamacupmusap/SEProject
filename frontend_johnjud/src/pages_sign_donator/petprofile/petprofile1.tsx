import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import { Formik,Form, Field} from 'formik'
import {Persist} from 'formik-persist'
import { useHistory } from "react-router-dom";

import { Container, FormGroup,Label, Col, Button}  from 'reactstrap';
import './petprofile1.css'
import Navigation3 from '../../Navigation/Navigation3'


interface Value2{
  petid: string;
  PetName: string;
  PetBreed: string;
  PetGender: string;
  Type: string;
  PetPicURL: string;
  PetStatus: string;
  PetLength: string;
  PetHeight: string;
  PetCerURL: string;
  TimeStampUpdate: string;
  UserId: string;
  TimeUpdate : string;
  Describe: string,
  PetAddress : string;
}


//const link_google = "https://www.google.com/maps/embed/v1/place?key=AIzaSyD2YzHpZurcTrS3PBA667hyc7OcncN4EGg&q="+ {Location}

const Addpetprofile= () =>{
  let history = useHistory();

  const accessToken = localStorage.getItem('Token');
  console.log(accessToken)

  return(
    <div>
      <Navigation3/>
      <Container id='contain'>  
        <div>
        <Formik
            initialValues={{
              petid: '',
              PetName: '',
              PetBreed: '',
              PetGender: '',
              Type: '',
              PetPicURL: '',
              PetStatus: '',
              PetLength: '',
              PetHeight: '',
              PetCerURL: '',
              TimeStampUpdate: '',
              UserId: '',
              TimeUpdate : '',
              Describe: '',
              PetAddress : ''

          }}
        
          onSubmit={ async (values:Value2,actions) =>{
            const sendInfoPet ={
              petid: values.petid,
              PetName: values.PetName,
              PetBreed: values.PetBreed,
              PetGender: values.PetGender,
              Type: values.Type,
              PetPicURL: values.PetPicURL,
              PetStatus: values.PetStatus,
              PetLength: values.PetLength,
              PetHeight: values.PetHeight,
              PetCerURL: values.PetCerURL,
              TimeStampUpdate: values.TimeStampUpdate,
              UserId: values.UserId,
              TimeUpdate : values.TimeUpdate,
              Describe: values.Describe,
              PetAddress : values.PetAddress
            }
            

            const res = await fetch('http://localhost:2000/petinfo/',{
              method:'POST',
              mode: 'cors',
              headers:
              {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${accessToken}`
              },
              body: JSON.stringify(sendInfoPet)
            })
            
            const res2 = await res.json();  
            console.log(res2);
            

            if(res2.success==true){
              actions.setSubmitting(false);
              // delete key
              localStorage.removeItem('AddpetInfo');
              history.push('/donator/home')
            }
          }
        }

          render={props =>  
          <Form>
            <div className="information">
        <p className="headinfo">Information</p>
        <hr className="lineinfo"></hr>
        <div className="infopet">
          <Col>
            <FormGroup>
              <Label for="PetName" className="information">Pet's Name*:</Label>
              <Field name="PetName" 
                       type="text" 
                       id="PetName" 
                       placeholder="pet's name"
                       className="input_text1"
                       />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label for="PetPicURL" className="information">Pet picture :</Label>
              <Field name="PetPicURL" 
                       type="file" 
                       id="PetPicURL" 
                       />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label for="PetGender" className="information">Gender* :</Label>
                  <Field name="PetGender" 
                       type="radio" 
                       id="Male"
                       value='Male' 
                  />        
                  <Label className="choice">Male</Label>
                  <Field name="PetGender" 
                       type="radio" 
                       id="Female"
                       value='Female' 
                  />        
                  <Label className="choice">Female</Label>
                  
            </FormGroup>
          </Col>
    
          <Col>
            <FormGroup>
              <Label for="PetLength" className="information">Length :</Label>
              <Field name="PetLength" 
                       type="text" 
                       id="PetLength" 
                       placeholder='length'
                       className="input_text1"
                       />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="PetHeight" className="information">Height :</Label>
              <Field name="PetHeight" 
                       type="text" 
                       id="PetHeight" 
                       placeholder='height'
                       className="input_text1"/>
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label for="PetBreed" className="information">Breed :</Label>
              <Field name="PetBreed" 
                       type="text" 
                       id="PetBreed" 
                       placeholder='breed'
                       className="input_text1"
                       />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Type" className="information">Type* : </Label>
                  <Field name="Type" 
                       type="text" 
                       id="Type"
                       placeholder='type' 
                       className="input_text1"
                  />        
            </FormGroup>
          </Col>   
          <Col>
            <FormGroup>
              <Label for="PetCerURL" className="information">Animal Health Certificate :</Label>
              <Field name="PetCerURL" 
                       type="file" 
                       id="PetCerURL" 
                       />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label for="PetAddress" className="information">Location*:</Label><label id="location-please">please pin your delivery location on the map</label><p></p>
              <Field name="PetAddress" 
                       type="text" 
                       id="PetAddress" 
                       placeholder='(location)'
                       className="input_text1"
                       />
            </FormGroup>
          </Col>
        
          <Col>
            <FormGroup>
              <Label for="Describe" className="information">Description:</Label><p></p>
              <Field name="Describe" 
                       Type="text" 
                       id="Describe" 
                       placeholder='Describe about your pet...'
                       className="input_text3"
                       />
            </FormGroup>
          </Col>

          
          <Button id="save" type="submit" value='submit'>Save</Button>

          <NavLink to='/donator/home'>
            <Button type='button' id='cancel'>Cancel</Button>
          </NavLink>
          <br/><br/>
          <br/>
        </div>
      </div>
          <Persist name='AddpetInfo'/>
          </Form>
          }
         />
        </div>
      </Container>
    </div>
  )
}

export default Addpetprofile;