import React, { useEffect, useState } from 'react';
import './BookmarkModal.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import verified from './img/verified.png';
import plus from './img/add.png';
import profileservice from '../ProfileService';




export const BookmarkModal = (props:any) => {
  
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const useridx = localStorage.getItem('UserId')
  const petidx  = localStorage.getItem('petID')

  const Add_Bookmark=() =>{
    const b={
      id: useridx,
      petid: petidx
    }  
    profileservice.AddBookmark(b,useridx,petidx,localStorage.Token)
  }


  
  return (
    <div>
      <Button color="link" onClick={Add_Bookmark} id="addToBmk"><img src={plus}/>Add to bookmark</Button>

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