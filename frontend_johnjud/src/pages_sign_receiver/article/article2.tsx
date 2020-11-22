import React from "react";
import './article2.css'
import imgArticle2 from './doggiepup.jpg'
import 'bootstrap/dist/css/bootstrap.css'

import Navigation from '../../Navigation/Navigation';
import { Container } from "reactstrap";

const Article2 = () => {
    return (
        <html>
        <Navigation/>
            <Container className='body1'>
                <h1 className="headText">How to take a good care of your puppy</h1>
                <img src={imgArticle2} alt="imgArticle1" className="imageCSS"/>
                <p className="text-article">เริ่มต้นโดยจัดท่าลูกสุนัขให้ถูกต้อง ห้ามให้ลูกสุนัขนอนหงายเด็ดขาด ควรให้ลูกสุนัขนอนคว่ำแล้วหนุนบริเวณหัวให้สูงกว่าลำตัว แล้วให้ลูกสุนัขกินนมจากขวดนม วิธีนี้จะทำให้ลูกสุนัขกินนมง่ายได้มากที่สุด หลังให้นมแล้วสิ่งที่ต้องทำคือเช็กดูว่าท้องของลูกสุนัขขยายขนาดใหญ่เกินไปหรือไม่ ถ้าท้องขยายมากไปอาจแสดงว่าลูกสุนัขท้องอืด ควรพาไปพบสัตวแพทย์
                </p>
    
            </Container>
        </html>
    );
}

export default Article2;
