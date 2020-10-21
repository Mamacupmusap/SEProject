import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './aboutUS.css'
import head_aboutus from './img/aboutus_header.jpg'
import head_contact from './img/contact_header.jpg'
import { Container } from 'reactstrap';
//import {Button} from 'reactstrap';
import Navigation2 from '../../Navigation/Navigation2';

const aboutUS = () =>{
  return(
    <div>
      <Navigation2/>
      <div className='body'>
          <img src={head_aboutus} alt='head_aboutus' width="100%"/>
          <Container>
            <div className= "row">
              <div className="side">
                <h2>Our Story</h2>
              </div>
              <div className= "main"><h6>
                Johnjud คือเว็บแอพพลิเคชั่นที่ถูกสร้างขึ้นโดยมีจุดมุ่งหมายให้เป็นศูนย์กลางการหาบ้านให้กับน้องหมา น้องแมว หรือสัตว์ชนิดอื่นๆได้พบกับเจ้าของใหม่และได้มีบ้านที่อบอุ่น<br/>
                <br/><br/>
                โดยเว็บแอพพลิเคชั่นJohnhud จะมีฟังก์ชันที่ช่วยอำนวยความสะดวกให้ผู้ใช้ เช่น มีฟังก์ชันการค้นหาสัตว์ที่สนใจ มีช่องแชทสำหรับสื่อสารระหว่างผู้ที่ต้องการหาบ้านให้กับน้องหมา น้องแมวจรจัด และผู้ที่กำลังมองหาน้องมหา น้องแมว มาเป็นส่วนหนึ่งของครอบครัว<br/>
                </h6>
              </div>
            </div>
          </Container>
          <img src={head_contact} alt='head_contact' width="100%"/>
          <Container>
            <div className= "row">
              <div className="side">
                <h2>Contact Us</h2>
              </div>
              <div className= "main">
                <h6>
                  Telephone: 02-555-5555<br/>
                  E-mail:    JohnJud@gmail.com<br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                </h6>
              </div>
            </div>
          </Container>
      </div>
    </div>
  )
}

export default aboutUS;