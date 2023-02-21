import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../../assets/icons/icons.js';
import { Timeline } from 'antd';

import l1 from './../../assets/image/Roadmap1.svg';
import l2 from './../../assets/image/Roadmap2.svg';
import l3 from './../../assets/image/Roadmap3.svg';
import l4 from './../../assets/image/Roadmap4.svg';
import  Campaignimg from './../../assets/image/Mask group.png';
import dian from './../../assets/image/Group 2576.svg'
import './index.less';

export interface IHome6 {
  Opacity?:any
}

const Home6: React.FC<IHome6>=({Opacity})=> {
  const list = [
    ['Pre-Registration 1', 'Follow and RT, submit an FNS of more than 5 characters without restriction',  'l1','02.20 0:00 - 02.26 23:59'],
    ['Pre-Registration 2', 'interact with findora chain once before snapshot（02.19） or hold FRA can pre-register FNS domain names again',  'l2','02.24 0:00 - 02.26 23:59'],
    ['Pre-Registration Claim ', '',  'l3','02.27 0:00 - 02.28 23:59'],
    ['Hello ETHDenver', 'A limited number of 10,000 FNS will be sold for free（only need gas）. without restriction.', 'l4','03.01 0:00 - 03.05 0:00'],
  ];



  return (
 
      <div className="Home6 hometest" id="Home6"  >
        <div className="bottom_container">
          {/* <h2>Campaign</h2> */}
        </div>
        <div className='Campaign_box'>
<div className='Campaign_letf'>

      <img src={Campaignimg} alt="" />
</div>
<div className='Campaign_right'>
<Timeline>
{list &&
            list.map((item, index) => {
            
              return (
                  <Timeline.Item key={index} color={'#8A5CFF'} dot={<img src={dian} alt=''/> }>    
                  <div>
                  <p className="campaigntime">{item[3]}</p>
                  <p className="edition">{item[0]}</p>
                  <p className="facts_title">{item[1]}</p>
                  </div>
             </Timeline.Item>
              );   
            })}
            </Timeline>
</div>

        </div>
       
        </div>


  );
}
export default Home6;
