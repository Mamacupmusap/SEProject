import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import jjicon from './component/logojj.png'
import yes from './component/verified.png'
//import { NavLink } from 'react-router-dom';

const signin6 = () =>{ 
  return(
    <div id='contain'>
        <div className='box_img'>
          <img src={jjicon} alt='test' className='rounded-lg'/>
        </div>
        <div className='left'>
            <div>
                <img src={yes} alt='yes' className='yes'/>
            </div>
            <div>
                <p>Email Verified</p>
                <p>your email address was successfully verified.</p>
            </div>
        </div>
    </div>
  )
}

export default signin6;