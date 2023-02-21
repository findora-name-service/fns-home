import React from 'react';
import Logo from './../../assets/image/home2Logo.svg'


import './index.less';

export interface IHome2 {
  Opacity?:any
}

const Home2: React.FC<IHome2>=({Opacity})=> {


  return (

    <div className="Home2 hometest" id="Home2">
     <div className='Home2_box'>
      <h2 >Refer Friends, Get Rewards</h2>
      <h3>When you refer someone to register a .fra address not only can you get a commission, but they can get their registration fee waived.</h3>
      <button onClick={()=>{
        window.open('https://docs.fns.gg/untitled/introduction/what-is-fns','_self')
      }} >Learn More</button>
     </div>
     <img src={Logo} alt="" />

    </div>
 
   
  );
};

Home2.defaultProps = {
  Opacity:undefined,
};

export default Home2;
