import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './suggest.css'
import Navigation3 from '../../Navigation/Navigation3';

const suggest = () =>{
    return(
        <div>
            <Navigation3/>
            <div className="bodyblah">
                <h1 id="header" style={{fontSize:18}}>คำแนะนำในการนัดรับสัตว์</h1>
                <div className="text">
                    <p style={{fontSize:16}}><br></br>1. ควรนัดวันเวลาและสถานที่ในการนัดรับให้ชัดเจน
                        <br></br>2. ควรไปกันเป็นกลุ่ม (แนะนำให้พาคนอื่นไปเป็นเพื่อนเพื่อความปลอดภัย!)
                        <br></br>3. ในการนัดรับ ควรตรวจสอบน้องสัตว์ให้เรียบร้อยว่าตรงกับที่ตกลงกันไว้หรือไม่
                        <br></br>4. หลังจากการรับสัตว์ อย่าลืมให้ผู้ให้สัตว์กดเปลี่ยนสถานะสัตว์ด้วย
                        <br></br>5. หากไม่มั่นใจ ควรขอรูปถ่ายบัตรประชาชนของอีกฝ่าย (ตอนถ่ายอย่าลืมคาดusernameและวัตถุประสงค์ว่าใช้สำหรับเว็บJohnJudเท่านั้นเพื่อความปลอดภัย)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default suggest;