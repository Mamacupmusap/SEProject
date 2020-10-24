import React, { useState } from 'react';
import './BookmarkModal.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import verified from './img/verified.png';
import plus from './img/add.png';

export const BookmarkModal = (props:any) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="link" onClick={toggle} id="addToBmk" width="24"><img src={plus}/>Add to bookmark</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} id="hahahaha">
        <ModalBody className="Modalbody">
          <img src={verified} id="verifiedbmk"/>
          <h5>Add to bookmark successfully</h5>
        </ModalBody>
        <div id="ngae">
          <Button color="link" onClick={toggle} className="firstbutton">confirm</Button>
        </div>
      </Modal>
    </div>
  );
}

export default BookmarkModal;