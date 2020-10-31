import React, { useState } from 'react';
import './AcceptPetModal.css'
import { Button, Modal, ModalBody, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import petIcon from './yodaIcon.png';
import AcceptPetModal2 from './AcceptPetModal2';
import verified from './verified.png';

export const AcceptPetModal = (props:any) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button color="link" onClick={toggle} id="haveOne">มี 1 รายการกำลังรอการยืนยัน</Button>
      <Modal isOpen={modal} toggle={toggle} id="haveOnePopUp">
        <ModalBody className="Modalbody">
          <h5 id="acceptThisPet">คุณได้ทำการนัดรับ Yoda จาก Tiffany Young</h5>
        </ModalBody>
        <div className="petWithPro">
          <img src={petIcon} id="petPic"/>
          <NavLink to='/receiver/petprofile'>
            <button id="goPro">ดูหน้าข้อมูลสัตว์</button>
          </NavLink>
        </div>
        <div className="accAllButt">
          <div id="accButt1">
            <Button color="link" onClick={toggle} className="accButton1">yes</Button>
          </div>
          <div id="accButt2">
            <Button color="link" onClick={toggle} className="accButton2">no</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AcceptPetModal;