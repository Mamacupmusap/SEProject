import React from "react";
import './article1.css'
import imgArticle1 from './yerlin-matu-GtwiBmtJvaU-unsplash 1.png'
import 'bootstrap/dist/css/bootstrap.css'

import Navigation from '../../Navigation/Navigation';
import { Container } from "reactstrap";

const Article1 = () => {
    return (
        <html>
            <Navigation/>
            <Container className='body1'>
           
                    <h1 className="headText">How to take a good care of your kitten</h1>
                    <img src={imgArticle1} alt="imgArticle1" className="imageCSS"/>
                    <p className="text-article">การเลี้ยงแมวในคอนโด ห้องพัก หรือในบ้านมักจะมีข้อจำกัดหลาย ๆ อย่าง แตกต่างจากการเลี้ยงแบบปล่อย
                        เพราะมีพื้นที่กว้าง ๆ ให้ได้วิ่งเล่นและเจอสภาพแวดล้อมที่หลากหลายกว่า ดังนั้นแล้ววิธีเลี้ยงเจ้าเหมียวในบ้านจึงค่อนข้างที่จะต้องเอาใจ
                        ใส่มากขึ้นไม่อย่างนั้นอาจทำให้แมวเหมียวอารมณ์ดีกลายเป็นเหมียวขี้เหงาได้ และสำหรับวิธีเลี้ยงแมวในบ้านให้มีความสุข วันนี้กระปุกดอทคอม
                        ได้รวบรวมมาฝากกันแล้วค่ะ
                    </p>
           
            </Container>
        </html>
    );
}

export default Article1;
