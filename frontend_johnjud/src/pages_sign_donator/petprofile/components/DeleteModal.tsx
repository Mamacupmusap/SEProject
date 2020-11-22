import React, { useState, Component } from 'react';
import './DeleteModal.css'
import { Button, Modal, ModalBody } from 'reactstrap';
import alert from './img/Warning.png'
import { NavLink } from 'react-router-dom';
import profileservice from '../ProfileService';
import { withRouter } from 'react-router'

withRouter(Component)

export const DeleteModal = (props:any) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  
  const useridz = localStorage.getItem('UserId')
  const petidz  = localStorage.getItem('petID')
 

  const Delete_Info=() =>{
    const a={
      id: useridz,
      petid: petidz
    }  
    profileservice.DeleteInfo(a,useridz,petidz,localStorage.Token)
  }

  const Delay = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    setTimeout(() => {
      window.location.replace('/donator/home');
    },500)
}

  
  return (
    <div>
      <Button color="link" onClick={toggle} id="deletePetPro" style={{color: '#C4C4C4'}}>delete</Button>
      <Modal isOpen={modal} toggle={toggle} id="proPopUp">
        <ModalBody className="Modalbody">
          <img id="alertPro" src={alert}/>
          <h5 id="deletSurePet">Are you sure to delete this?</h5>
        </ModalBody>
        <div className="proAllButt">
            <div id="proButt1">
                <NavLink to='/donator/home' onClick={Delay}>  
                    <Button color="link" onClick={Delete_Info} className="Probutton1">confirm</Button>
                </NavLink>
            </div>
            <div id="proButt2">
                <Button color="link" onClick={toggle} className="Probutton2">cancel</Button>
            </div>
        </div>
      </Modal>
    </div>
  );
}

export default DeleteModal;