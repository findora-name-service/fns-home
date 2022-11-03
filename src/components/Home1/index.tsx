import React, { useState } from 'react';
import search from './../../assets/image/search.svg'
import Header from './../../components/Header'
import './index.less';

function Home1() {
  const [searchvalue, setsearchvalue] = useState('')
  // https://app.fns.gg/search/aaaaa
  const searchInfo = (e:any)=>{
    setsearchvalue(e.target.value)
  } 
  return (
 
   <div className='home1_box' id="Home1" >
     <h2>Have your first privacy web3 identity</h2>
     <div className='search_box'>
      <div className='input_box'>
        <img src={search} alt="" />
        <input type="text" placeholder='Search Names' onChange={searchInfo} onKeyDown={()=>{searchvalue!==''&&window.open(`https://app.fns.gg/search/${searchvalue}` ,'_self')}}/>
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
