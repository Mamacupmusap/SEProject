import React from "react";
import './article2.css'
import imgArticle3 from './pupup.png'
import 'bootstrap/dist/css/bootstrap.css'

import Navigation from '../../Navigation/Navigation';

const Article3 = () => {
    return (
        <html>
            <Navigation/>
        <head>
            <title>Should my pet be tested for COVID-19?</title>
        </head>
        <body className="body1">
        <div className="container1">
            <h1 className="headText">Should my pet be tested for COVID-19?</h1>
            <img src={imgArticle3} alt="imgArticle1" className="imageCSS"/>
            <p className="text-article">ขณะนี้มีงานวิจัยเกี่ยวกับสัตว์เลี้ยง และสัตว์ในห้องทดลองกับความสามารถในการติดเชื้อ SARS-CoV-2 ออกมาจำนวนมาก ตัวอย่างผลการศึกษาที่น่าสนใจ ในต่างประเทศ ซึ่งเป็นข้อมูลจาก Dr.Siddharth Sridhar จากมหาวิทยาลัยแห่งฮ่องกง (The University of Hong Kong) สรุปได้ว่า มีการตรวจพบสารพันธุกรรมของไวรัสโรค COVID-19 ใน สุนัข 2 ตัว และ แมว 2 ตัว ในฮ่องกง และเบลเยียม โดยเจ้าของของสุนัขและแมวทั้งหมดเป็นผู้ป่วย COVID-19 และเจ้าของน่าจะเป็นผู้แพร่เชื้อไวรัสดังกล่าวให้สัตว์เลี้ยงของตัวเอง
            </p>
        </div>
        </body>
        </html>
    );
}

export default Article3;
