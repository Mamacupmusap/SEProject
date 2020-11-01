import React,{ Component, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Petinfo} from './Interface';
import { NavLink } from 'react-router-dom';
import { Container, FormGroup,Label, Col}  from 'reactstrap';
import { Formik,Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import verified from './imgpic/verified.png'
import './petprofile1.css'

import * as Yup from 'yup'
import Navigation3 from '../../Navigation/Navigation3'

type PetinfoProps = {
  onNewPetProfileCreate?: (newPetinfo:Petinfo) => void,
};
const AddPetProfile = (props: PetinfoProps) => {
  const [newPetName, setnewPetName] = useState<string>();
  const [newPetBreed, setnewPetBreed] = useState<string>();
  const [newPetGender, setnewPetGender] = useState<string>();
  const [newType, setnewType] = useState<string>();
  const [newPetStatus, setnewPetStatus] = useState<string>();
  const [newPetLength, setnewPetLength] = useState<number>();
  const [newPetHeight, setnewPetHeight] = useState<number>();

const update=() =>{
  const newPetProfile = {
    PetName: newPetName,
    PetBreed: newPetBreed,
    PetGender: newPetGender,
    type: newType,
    PetStatus: newPetStatus,
    PetLength: newPetLength,
    PetHeight: newPetHeight,
    
    };
    const result:any = fetch("http://localhost:2000/petinfo/",{
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        credentials: "same-origin",
      },

        body: JSON.stringify(newPetProfile)
})
      .then(res => res.json())
      .then(SavePetinfo=> {
        if (props.onNewPetProfileCreate != undefined) {
            props.onNewPetProfileCreate(SavePetinfo);}
      console.log(result);
            if(result.accessToken) {
             localStorage.setItem("Token", result.accessToken)
               return result
    }
})    
}

const PetinfoSchema = Yup.object().shape({
  petName: Yup.string()
    .required('Required'),
  petType: Yup.string()
    .required('Required'),
  petGender: Yup.string()
    .required('Required'),
  petWeight: Yup.string(),
  petSize: Yup.string(),
  petColor: Yup.string(),
  petBreed: Yup.string(),
  Location : Yup.string()
    .required('Required'),
  Description: Yup.string(),
});

interface Value2{
  petName: string;
  petpic: string;
  petType: string;
  petGender: string;
  petWeight: string;
  petSize: string;
  petColor: string;
  petBreed: string;
  petcerti: string;
  Location: string;
  Description: string;
}

const link_google = "https://www.google.com/maps/embed/v1/place?key=AIzaSyD2YzHpZurcTrS3PBA667hyc7OcncN4EGg&q="+ {Location}

  return(
    <div className="bodybongchu">
      <Navigation3/>
      <Formik
          initialValues={{
            petName: '',
            petpic: '',
            petType: '',
            petGender: '',
            petWeight: '',
            petSize: '',
            petColor: '',
            petBreed: '',
            petcerti: '',
            Location: '',
            Description: ''
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
          validationSchema={PetinfoSchema}
      >

      {({ errors, touched }) => (
    <Container className="container_editpet">
      <Form>
        <div className="information">
        <p className="headinfo">Information</p>
        <hr className="lineinfo"></hr>
        <div className="infopet">
          <Col>
            <FormGroup>
              <Label for="petName" className="information">Pet's Name*:</Label>
              <Field name="petName" 
                       type="text" 
                       id="petName" 
                       placeholder="pet's name"
                       className={`form-control ${touched.petName ? errors.petName ? 'is-invalid' : 'is-valid' : ''}`}
                       value={newPetName} onChange={(e:any) => {setnewPetName(e.target.value);}}
                       />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label for="petpic" className="information">Pet picture :</Label>
              <Field name="petpic" 
                       type="file" 
                       id="petpic" 
                       />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label for="petType" className="information">Type* : </Label>
                  <Field name="petType" 
                       type="text" 
                       id="Type"
                       placeholder='type' 
                  />        
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="petGender" className="information">Gender* :</Label>
                  <Field name="petGender" 
                       type="radio" 
                       id="Male"
                       value='Male' 
                  />        
                  <Label className="choice">Male</Label>
                  <Field name="petGender" 
                       type="radio" 
                       id="Female"
                       value='Female' 
                  />        
                  <Label className="choice">Female</Label>
                  <ErrorMessage component="div" name="petGender" className="invalid-feedback" />
            </FormGroup>
          </Col>
    
          <Col>
            <FormGroup>
              <Label for="petWeight" className="information">Weight :</Label>
              <Field name="petWeight" 
                       type="text" 
                       id="petWeight" 
                       placeholder='weight'
                       className="input_text1"
                       />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="petSize" className="information">Size :</Label>
              <Field name="petSize" 
                       type="text" 
                       id="petSize" 
                       placeholder='size'
                       className="input_text1"/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="petColor" className="information">Color :</Label>
              <Field name="petColor" 
                       type="text" 
                       id="petColor" 
                       placeholder='color'
                       className="input_text1"/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="petBreed" className="information">Breed :</Label>
              <Field name="petBreed" 
                       type="text" 
                       id="petBreed" 
                       placeholder='breed'
                       className="input_text1"
                      
                          onChange={(e:any) => {setnewPetBreed(e.target.value);}}
                       />
            </FormGroup>
          </Col>
              
          <Col>
            <FormGroup>
              <Label for="petcerti" className="information">Animal Health Certificate :</Label>
              <Field name="petcerti" 
                       type="file" 
                       id="petcerti" 
                       />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label for="Location" className="information">Location*:</Label><label id="location-please">please pin your delivery location on the map</label><p></p>
              <Field name="Location" 
                       type="text" 
                       id="Location" 
                       placeholder='(location)'
                       className={`form-control ${touched.Location ? errors.Location ? 'is-invalid' : 'is-valid' : ''}`}
                       />
            </FormGroup>
          </Col>

          
          <iframe width="600" height="450" src={link_google}></iframe>
        
          <Col>
            <FormGroup>
              <Label for="Description" className="information">Description:</Label><p></p>
              <Field name="Description" 
                       Type="text" 
                       id="Location" 
                       placeholder='Describe about your pet...'
                       className="input_text3"
                       value={newPetStatus} onChange={(e:any) => {setnewPetStatus(e.target.value);}}
                       />
            </FormGroup>
          </Col>
          <p></p>

          <input type="checkbox" id="click22"/>
          <Label for="click22" id="save" onClick={update}>Save</Label>
          <div className="contentz">
              <img src={verified} alt="verified" className="savesuc"></img>
              <p className="saves">Save successfully</p>
              <NavLink to='/donator/petprofile'>
              <button type='button' id='btn-ok'>OK</button>
              </NavLink>
          </div>

          <button type='button' id='cancel'>Cancel</button>

          <br/><br/>
          <button type='submit' value='submit' id='save' >Submit</button>
          <br/><br/>
          

        </div>
      </div>
      </Form>
      </Container>
      )}
      </Formik>
    </div>
  )
}


export default AddPetProfile;