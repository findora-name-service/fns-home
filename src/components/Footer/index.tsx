import React, { useEffect, useState } from 'react';
import logo2 from './../../assets/image/logo2.svg'

import './index.less';

function Footer() {
  
  return (
   <div className='Footer_box'>
        <img src={logo2} alt="" />
        <div className='footer_info'>
        <ul>
          <li>Twitter</li>
          <li>Telegram</li>
          <li>Medium</li>
        </ul>
        <p>© 2022 Findora name service</p>
    </div>
   </div>
  );
}
export default Footer;
