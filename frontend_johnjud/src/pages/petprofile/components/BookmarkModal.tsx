import React, { useState } from 'react';
import './BookmarkModal.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import bkmk from './img/bookmarkicon.png' ;
import warning from './img/Warning.png';
import confirm from './img/confirm.png';
import cancel from './img/cancel.png';

export const BookmarkModal = (props:any) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="link" onClick={toggle}><img src={bkmk}/>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody className="Modalbody">
          <p><img src={warning}/></p>
          Please sign in
        </ModalBody>
        <ModalFooter>
          <Button color="link" onClick={toggle} className="firstbutton mr-auto"><img src={confirm}/></Button>
          <Button color="link" onClick={toggle} className="secondbutton"><img src={cancel}/></Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default BookmarkModal;