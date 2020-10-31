import React, { useState,useEffect } from 'react';
import './CertModal.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Cert from './img/cert.png' ;
import Realcerti from './img/HealthCer.jpg';
import close from './img/close.png';
import greenRight from './img/check.png'
import ProfileService from '../ProfileService'
import {Petinfo} from '../Interface'

export const CertModal = (props:any) => {
    const[obj,setObj] = useState<Petinfo>();
    const getObj = () =>
    fetch('http://localhost:3000/petinfo/two')
    
    .then((res) => res.json())

    useEffect(() => {
    getObj().then((obj) => setObj(obj))
    }, [])
    const PetCerUrl= obj?.PetCerURL;
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="link" onClick={toggle} id="doCer"><img src={greenRight} width="14" height="14"/>certificate</Button>
      <Modal isOpen={modal} toggle={toggle} id="cerPopUp">
        <ModalBody className="Modalbody">
          <h5>Health Certification</h5>
          <img src={Realcerti} style={{width:250}}/>
        </ModalBody>
        <div id="certButt"> 
          <Button color="link" onClick={toggle} className="Certbutton">close</Button>
        </div>
      </Modal>
    </div>
  );
}

export default CertModal;