import React, { useEffect, useState } from 'react';
import Home5 from './../../components/Home5';
import Home2 from './../../components/Home2';
import Home1 from './../../components/Home1';

import Home3 from './../../components/Home3';
import Home4 from './../../components/Home4';
import Home6 from './../../components/Home6';
import ScrollTip from './../../components/scrollTip';
import fullpage from 'fullpage.js';
import Header from './../../components/Header';

import './index.less';


function Home() {
const [page, setpage] = useState(0)
const pabeChange = (destination:any)=>{
  setTimeout(() => {
    console.log(111)
    setpage(destination.index)
  }, 500);
}
useEffect(() => {
      window.innerWidth>=760&&
  new fullpage('#fullpage', {
    licenseKey: 'YOUR_KEY_HERE',
      sectionsColor: [],
      onLeave:(origin:any, destination:any, direction:any, trigger:any)=>{
        console.log(direction)
        direction==='up'? setpage(destination.index):
        pabeChange(destination)
      },
    });
  },[]);

  return (
    <div className='home_box'>
      {
         window.innerWidth>=760?
         <div className='pc_home'>
      <Header pc_isOpacity={page===0?false:true} />
      <div id="fullpage" >
          <div className="section " id="section0"><Home1 /></div>
          <div className="section" id="section6">  <Home6/></div>
          <div className="section" id="section1"><Home2 /></div>
          <div className="section" id="section2">  <Home3 /></div>
          <div className="section" id="section3">  <Home4/></div>
          <div className="section" id="section4"  style={{ overflowY:'scroll'}}> <Home5 /></div>

      </div>
      <ScrollTip isTabnum={page+1}/>
      </div>
      :
      <div className='mo_home'>
      <Header/>
      <Home1 />
      <Home6 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      </div>
      }
      
       
  </div>
  );
 
}
export default Home;


