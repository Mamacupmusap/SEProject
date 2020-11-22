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
  fileName_img : string;
  fileName_cer : string;
}

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
              PetAddress : '',
              fileName_img : '',
              fileName_cer : '',
          }}
        
          onSubmit={ async (values:Value2,actions) =>{
            let resimgbb_cer = null;

            //validate
            let alert_msg = '';
            if(values.PetName==''){
              alert_msg = alert_msg+"Pet's Name\n";
            }
            if(values.PetPicURL==''){
              alert_msg = alert_msg+"Pet's Picture\n";
            }
            if(values.PetGender==''){
              alert_msg = alert_msg+"Gender\n";
            }
            if(values.Type==''){
              alert_msg = alert_msg+"Type\n";
            }
            if(values.PetAddress==''){
              alert_msg = alert_msg+"Location\n";
            }
            
            if(alert_msg!=''){
              alert("Please enter required data :\n"+alert_msg);
              return;
            }

            //upload pet img
            var formdata = new FormData();   
            formdata.append("image", values.PetPicURL, values.fileName_img);

            const response = await fetch("https://api.imgbb.com/1/upload?key=1949bda7eab7e16a8e613b0c302c4782", {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
              });
            const resimgbb = await response.json();            

            //upload pet cer
            if(values.PetCerURL!=''){
              var formdata_cer = new FormData();   
              formdata_cer.append("image", values.PetCerURL, values.fileName_cer);

              const response_cer = await fetch("https://api.imgbb.com/1/upload?key=1949bda7eab7e16a8e613b0c302c4782", {
                  method: 'POST',
                  body: formdata_cer,
                  redirect: 'follow'
                });
                resimgbb_cer = await response_cer.json();
                resimgbb_cer = resimgbb_cer.data.url;
            }          

            const sendInfoPet ={
              petid: values.petid,
              PetName: values.PetName,
              PetBreed: values.PetBreed,
              PetGender: values.PetGender,
              Type: values.Type,
              PetPicURL: resimgbb.data.url,
              PetStatus: values.PetStatus,
              PetLength: values.PetLength,
              PetHeight: values.PetHeight,
              PetCerURL: resimgbb_cer,
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
              <Label for="PetName" className="information">Pet's Name* : </Label>
              <Field name="PetName" 
                       type="text" 
                       id="PetName" 
                       placeholder="pet's name"
                       className="input_text1"
                       />
            </FormGroup>
          </Col>

          <Col>
            <Label for="PetPicURL" className="information">Pet's Picture* : </Label>
              <input id="PetPicURL" name="PetPicURL" type="file" onChange={(event) => {
                props.setFieldValue("PetPicURL", event.currentTarget.files![0]);
                props.setFieldValue("fileName_img", event.currentTarget.files![0].name);
              }} />
          </Col>

          <Col>
            <FormGroup>
              <Label for="PetGender" className="information">Gender* : </Label>
                  <Field name="PetGender" 
                       type="radio" 
                       id="Male"
                       value='Male' 
                  />        
                  <Label className="choice">Male </Label>
                  <Field name="PetGender" 
                       type="radio" 
                       id="Female"
                       value='Female' 
                  />        
                  <Label className="choice">Female </Label>
            </FormGroup>
          </Col>
    
          <Col>
            <FormGroup>
              <Label for="PetLength" className="information">Length : </Label>
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
              <Label for="PetHeight" className="information">Height : </Label>
              <Field name="PetHeight" 
                       type="text" 
                       id="PetHeight" 
                       placeholder='height'
                       className="input_text1"/>
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label for="PetBreed" className="information">Breed : </Label>
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
            <Label for="PetCerURL" className="information">Pet Health Certificate : </Label>
            <input id="PetCerURL" name="PetCerURL" type="file" onChange={(event) => {
                props.setFieldValue("PetCerURL", event.currentTarget.files![0]);
                props.setFieldValue("fileName_cer", event.currentTarget.files![0].name);
              }} />
          </Col>

          <Col>
            <FormGroup>
              <Label for="PetAddress" className="information">Location* : </Label><label id="location-please">please pin your delivery location on the map</label><p></p>
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
              <Label for="Describe" className="information">Description : </Label><p></p>
              <Field name="Describe" 
                       Type="text" 
                       id="Describe" 
                       placeholder='Describe about your pet...'
                       className="input_text3"
                       />
            </FormGroup>
          </Col>

          <Col>
              <p style={{paddingTop:"0px", marginBottom:"0px", marginTop:"20px"}}>* Required</p>
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