import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './faq.css'
import head_faq from './img/head_faq.jpg'
import { Container } from 'reactstrap';
//import {Button} from 'reactstrap';
import Navigation3 from '../../Navigation/Navigation3';

const faq = () =>{
  return(
    <div>
      <Navigation3/>
    <div className='body'>
      <img src={head_faq} alt='head_faq' width="100%"/>
      <Container>
        <div className= "flex-container">
          <h2>Johnjudคืออะไร?</h2><br/><br/>
          <div className= "ans"></div>
          <h6>Johnjud คือเว็บแอพพลิเคชั่นสื่อกลางระหว่างผู้ต้องการหาบ้านให้กับสัตว์จรจัดและผู้ต้องการรับเลี้ยงสัตว์จรจัดให้สามารถติดต่อกันได้อย่างสะดวกรวดเร็ว</h6><br/>
          <div className= "ans"></div>
          <h2>ฉันจะสามารถใช้งานJohnjudได้อย่างไร?</h2><br/>
          <div className= "ans"></div>
          <h6>ท่านสามารถสมัครเป็นสมาชิกกับทางJohnJudได้โดยการคลิกที่ปุ่ม Sign Up โดยมีให้เลือกรูปแบบการลงทะเบียนทั้งจากGoogle ID และลงทะเบียนผ่านเว็บ</h6><br/>
          <div className= "ans"></div>
          <h2>หากฉันต้องการลงประกาศหาเจ้าของให้สัตว์ที่มีต้องทำอย่างไร?</h2><br/>
          <div className= "ans"></div>
          <h6>ท่านสามารถกดที่โหมด Donator เว็บแอพพลิเคชั่นของเราจะเปลี่ยนเข้าสู่โหมด Donator และปุ่มเพิ่มสัตว์จะปรากฎขึ้น</h6><br/>
          <div className= "ans"></div>
          <h2>หากฉันต้องการหาสัตว์มาเลี้ยงต้องทำอย่างไร?</h2><br/>
          <div className= "ans"></div>
          <h6>ท่านสามารถกดที่โหมด Reciver เว็บแอพพลิเคชั่นของเราจะเปลี่ยนเข้าสู่โหมด Reciver และขึ้นรายชื่อสัตว์ต่างๆที่มีคนได้ลงไว้ ท่านสามารถคลิกเข้าไปดูรายละเอียดข้อมูลของสัตว์รวมถึงติดต่อกับทาง Donator ได้ทันทีผ่านช่องแชท</h6><br/>
        </div>
      </Container>
    </div>
    </div>
  )
}

export default faq;