import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, FormGroup,Label,Button, Col}  from 'reactstrap';
import { Formik,Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import check from './imgpic/check.png'
import Yoda from './imgpic/Yoda.png'
import addbox from './imgpic/addbox.png'
import location from './imgpic/location.png'
import verified from './imgpic/verified.png'
import './petprofile1.css'
import * as Yup from 'yup'


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
  petType: string;
  petGender: string;
  petWeight: string;
  petSize: string;
  petColor: string;
  petBreed: string;
  Location: string;
  Description: string;
}



const chat = () =>{
  return(
    <div className="bodybongchu">

      
      <Formik
          initialValues={{
            petName: '',
            petType: '',
            petGender: '',
            petWeight: '',
            petSize: '',
            petColor: '',
            petBreed: '',
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
    <Container>
      <Form>
        <ul>
        <Col>
          <FormGroup>
              <Label for="petName"></Label>
              <Field name="petName" 
                       type="text" 
                       id="petName" 
                       className={`form-control ${touched.petName ? errors.petName ? 'is-invalid' : 'is-valid' : ''}`}
                       placeholder="Insert Pet's Name"/>
              <ErrorMessage component="div" name="petName" className="invalid-feedback" />
          </FormGroup>
        </Col>
        </ul>
        <hr className="linepetname"></hr>
        <div className="status">
          <img src={check} alt='check'></img><div className="status-text">กำลังหาบ้านให้น้อง</div>

          <input type="checkbox" id="click"/>
          <Label for="click" className="click-me">พาไปบ้านใหม่</Label>
          <div className="content">
            <div className="rubnong">
              <h1>Username ผู้รับน้อง</h1>
              <input type="text" placeholder="username" className="rubnonguser"/>
              <h2>*จะมีการเปลี่ยนแปลงสถานะหลังจากผู้รับกดยืนยัน</h2>
              <div className="btnx">
                <Label for="click" className="confirm-btn">confirm</Label>
                <Label for="click" className="cancel-btn">cancel</Label>
              </div>
            </div>
          </div>
        </div>
        <div className="picture">
          <div className="box"><img src={Yoda} alt='Yoda'></img></div>
          <div className="box"><img src={addbox} alt='addbox'></img></div>
          <div className="box"><img src={addbox} alt='addbox'></img></div>
          <div className="box"><img src={addbox} alt='addbox'></img></div>
          <div className="box"><img src={addbox} alt='addbox'></img></div>
          <div className="box"><img src={addbox} alt='addbox'></img></div>
        </div>

        <div className="information">
        <p className="headinfo">Information</p>
        <hr className="lineinfo"></hr>
        <div className="infopet">
          <Col>
            <FormGroup>
              <Label for="petType" className="information">Type* : </Label>
                  <Field name="petType" 
                       type="radio" 
                       id="Dog"
                       value='Dog' 
                  />        
                  <Label className="choice">Dog</Label>
                <Field name="petType" 
                       type="radio" 
                       id="Cat"
                       value='Cat' 
                  />        
                  <Label className="choice">Cat</Label>
                  <Field name="petType" 
                       type="radio" 
                       id="others"
                       value='others' 
                  />        
                  <Label className="choice">others</Label>
                  <ErrorMessage component="div" name="petType" className="invalid-feedback" />
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
                  <Field name="petGender" 
                       type="radio" 
                       id="others"
                       value='others' 
                  />        
                  <Label className="choice">others</Label>
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
                       className="input_text1"/>
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
                       className="input_text1"/>
            </FormGroup>
          </Col>
              <label className="information" id="certi">Animal Health Certificate:</label>
              <input type="file" id="file" accept="image/*"></input>
              <p></p>

          <Col>
            <FormGroup>
              <Label for="Location" className="information">Location*:</Label><label id="location-please">please pin your delivery location on the map</label><p></p>
              <Field name="Location" 
                       type="text" 
                       id="Location" 
                       placeholder='(location)'
                       className={`form-control ${touched.Location ? errors.Location ? 'is-invalid' : 'is-valid' : ''}`}
                       />
              <ErrorMessage component="div" name="Location" className="invalid-feedback" />
            </FormGroup>
          </Col>
          <img src={location} alt='line' className="pic"></img><p/>

          <Col>
            <FormGroup>
              <Label for="Description" className="information">Description:</Label><p></p>
              <Field name="Description" 
                       Type="text" 
                       id="Location" 
                       placeholder='Describe about your pet...'
                       className="input_text3"
                       />
            </FormGroup>
          </Col>
          <p></p>

          <input type="checkbox" id="click2"/>
          <Label for="click2" id="save">Save</Label>
          <div className="contentz">
            <div className="savesuc">
              <Label for="click2" className="xclose">X</Label>
              <img src={verified} alt="verified"></img>
              <p>Save successfully</p>
            </div> 
          </div>

          <button type='button' id='cancel'>Cancel</button>

          <br/><br/>
          <button type='submit' value='submit' id='save'>Submit</button>
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

export default chat;