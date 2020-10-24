import React, { useState } from 'react';
import './CertModal.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Cert from './img/cert.png' ;
import Realcerti from './img/RealCerti.png';
import close from './img/close.png';

export const CertModal = (props:any) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="link" onClick={toggle}><img src={Cert}/>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody className="Modalbody">
        Health Certification
          <p><img src={Realcerti}/></p>
        </ModalBody>
        <ModalFooter> 
          <Button color="link" onClick={toggle} className="Certbutton"><img src={close}/></Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CertModal;