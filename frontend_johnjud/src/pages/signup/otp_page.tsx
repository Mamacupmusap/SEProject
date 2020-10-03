import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container}  from 'reactstrap';
import jjicon from './component/logojj.png'
import back from './component/arrow_left.png'
import { NavLink } from 'react-router-dom';
import mobile from './component/mobile.png'

const otp_page = () =>{
  return(
    <div>
      <NavLink to='/signup3'><img src={back} alt='' className='back_page'/></NavLink>
      <Container id='contain'>
        <div className='box_img'>
          <img src={jjicon} alt='test' className='rounded-lg'/>
        </div>
        <img src={mobile} alt=''/>
      </Container>
    </div>
  )
}

export default otp_page;