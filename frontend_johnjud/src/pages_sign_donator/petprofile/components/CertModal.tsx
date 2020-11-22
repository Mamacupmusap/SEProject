import React, { useState } from 'react';
import './CertModal.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import greenRight from './img/check.png'

export const CertModal = (props:any) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="link" onClick={toggle} id="doCer2"><img src={greenRight} width="14" height="14" alt={''}/>certificate</Button>
      <Modal isOpen={modal} toggle={toggle} id="cerPopUp">
        <ModalBody className="Modalbody">
          <h5>Pet Health Certification</h5>
          <img src={props.certPic} style={{width:250}} alt={'No picture'}/>
        </ModalBody>
        <div id="certButt"> 
          <Button color="link" onClick={toggle} id="Certbutton">close</Button>
        </div>
      </Modal>
    </div>
  );
}

export default CertModal;