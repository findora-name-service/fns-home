import React, { useEffect, useState } from 'react';
import search from './../../assets/image/search.svg'
import Header from './../../components/Header'
import './index.less';
// Opacity
export interface IHome1 {
  Opacity?:any
}

const Home1: React.FC<IHome1>=({Opacity})=> {
  const [searchvalue, setsearchvalue] = useState('')
  const searchInfo = (e:any)=>{
    setsearchvalue(e.target.value)
  } 

  return (
   <div className='home1_box' id="Home1" style={{opacity:`${Opacity}`}}>
     <h2>Have your first privacy web3 identity</h2>
     <div className='search_box'>
      <div className='input_box'>
        <img src={search} alt="" />
        <input type="text" placeholder='Search Names' onChange={searchInfo} onBlur={()=>{searchvalue!==''&&window.open(`https://app.fns.gg/search/${searchvalue}` ,'_self')}}/>
        <p>.fra</p>
      </div>
      <button 
      onClick={()=>{searchvalue!==''&&window.open(`https://app.fns.gg/search/${searchvalue}` ,'_self')}}
      >Search</button>
     </div>
   </div>

  );
}
export default Home1;
