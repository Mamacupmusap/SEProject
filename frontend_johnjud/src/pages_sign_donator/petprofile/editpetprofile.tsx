import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import { Formik,Form, Field} from 'formik'
import {Persist} from 'formik-persist'
import { useHistory } from "react-router-dom";

import { Container, FormGroup,Label, Col, Button}  from 'reactstrap';
import './petprofile1.css'
import Navigation3 from '../../Navigation/Navigation3'
import profileservice from './ProfileService';
import {Petinfo} from './Interface';
import {PetinfoEdit} from './InterfaceForedit';


interface Value2{
  petid?: string;
  PetName?: string;
  PetBreed?: string;
  PetGender?: string;
  Type?: string;
  PetPicURL: string;
  PetStatus?: string;
  PetLength?: number;
  PetHeight?: number;
  PetCerURL: string;
  TimeStampUpdate?: string;
  UserId?: string;
  TimeUpdate?: string;
  Describe?: string,
  PetAddress?: string;
  fileName_img : string;
  fileName_cer : string;
}

const Addpetprofile= (props:any) =>{
  let history = useHistory();

  const accessToken = localStorage.getItem('Token');
  const PETID =  props.match.params.petid;

  const [obj,setObj] = useState<Petinfo>()
  const [userid,setUserid] = useState<string>()

  
  const [petname,setPetname] = useState<string>()
  const [gender,setGender] = useState<string>()
  const [length,setLength] = useState<number>()
  const [height,setHeight] = useState<number>()
  const [breed,setBreed] = useState<string>()
  const [type,setType] = useState<string>()
  const [location,setLocation] = useState<string>()
  const [description,setDescription] = useState<string>()
  const [petpicURL,setPetpicURL] = useState<string>()
  const [petcer,setPetcer] = useState<string>()

  const fetchProfileInfo=() =>{
    return(
      profileservice.fetchProfileInfo(PETID)
      .then(res => {
        setObj(res)
      })
    )
  }

  useEffect(()=>{
    fetchProfileInfo()
  },[PETID])
  useEffect(()=>{
    setUserid(obj?.UserId)
    setPetname(obj?.PetName)
    setGender(obj?.PetGender)
    setLength(obj?.PetLength)
    setHeight(obj?.PetHeight)
    setBreed(obj?.PetBreed)
    setType(obj?.Type)
    setLocation(obj?.PetAddress)
    setDescription(obj?.Describe)
    setPetpicURL(obj?.PetPicURL)
    setPetcer(obj?.PetCerURL)
  },[obj])
  return(
    <div>
      {localStorage.UserId == userid &&
    
    <div>
      <Navigation3/>
      <Container id='contain'>  
        <div>
        <Formik
            initialValues={{
              petid: '',
              PetName: petname,
              PetBreed: breed,
              PetGender: gender,
              Type: type,
              PetPicURL: '',
              PetStatus: petcer,
              PetLength: length,
              PetHeight: height,
              PetCerURL: '',
              TimeStampUpdate: '',
              UserId: '',
              TimeUpdate : '',
              Describe: description,
              PetAddress : location,
              fileName_img : '',
              fileName_cer : '',
          }}
        
          onSubmit={ async (values:Value2,actions) =>{
            let resimgbb = null;
            let resimgbb_cer = null;

            //validate
            let alert_msg = '';
            if(values.PetName==''){
              alert_msg = alert_msg+"Pet's Name\n";
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
            if(values.PetPicURL!=''){
              var formdata = new FormData();   
              formdata.append("image", values.PetPicURL, values.fileName_img);

              const response = await fetch("https://api.imgbb.com/1/upload?key=1949bda7eab7e16a8e613b0c302c4782", {
                  method: 'POST',
                  body: formdata,
                  redirect: 'follow'
                });
              resimgbb = await response.json();
              resimgbb = resimgbb.data.url;
            }

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
              petid: localStorage.getItem('petID'),
              PetName: values.PetName,
              PetBreed: values.PetBreed,
              PetGender: values.PetGender,
              Type: values.Type,
              PetPicURL: resimgbb,
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

            
            const res = await fetch('http://localhost:2000/petinfo/editPetInfo',{
              method:'PATCH',
              mode: 'cors',
              headers:
              {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${accessToken}`
              },
              body: JSON.stringify(sendInfoPet)
            })
            
            const res2 = await res.json();  
            
            

            if(res2.success==true){
              actions.setSubmitting(false);
              // delete key
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
              <Label for="PetPicURL" className="information">Pet's Picture** : </Label>
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
              <Label for="PetCerURL" className="information">Animal Health Certificate** : </Label>
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
              <p style={{paddingTop:"0px", marginBottom:"5px"}}>** No input will keep the picture as the same before.</p>
          </Col>

          
          <Button id="save" type="submit" value='submit'>Save</Button>

          <NavLink to='/donator/home'>
            <Button type='button' id='cancel'>Cancel</Button>
          </NavLink>
          <br/><br/>
          <br/>
        </div>
      </div>
          <Persist name='EditpetInfo'/>
          </Form>
          }
         />
        </div>
      </Container>
    </div>
          }
    </div>
  )
}

export default Addpetprofile;