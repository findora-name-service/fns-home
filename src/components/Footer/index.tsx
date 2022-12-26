import React, { useEffect, useState } from 'react';
import logo2 from './../../assets/image/logo2.svg'

import './index.less';

function Footer() {
  
  return (
   <div className='Footer_box'>
        <img src={logo2} alt="" />
        <div className='footer_info'>
        <ul>
          <li onClick={()=>{window.open('https://twitter.com/FnsInfo','_self')}}>Twitter</li>
          <li onClick={()=>{window.open('https://github.com/orgs/findora-name-service/repositories','_self')}}>Github</li>
          <li onClick={()=>{window.open('https://medium.com/@fns.gg','_self')}} >Medium</li>
        </ul>
        <p>© 2022 Findora name service</p>
    </div>
   </div>
  );
}
export default Footer;
