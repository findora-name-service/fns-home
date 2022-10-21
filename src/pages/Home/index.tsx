import React from 'react';
import search from './../../assets/image/search.svg'

import './index.less';

function Home() {

  return (
   <div className='home_box'>
     <h2>Have your first privacy web3 identity</h2>
     <div className='search_box'>
      <div className='input_box'>
        <img src={search} alt="" />
        <input type="text" placeholder='Search Names '/>
        <p>.fra</p>
      </div>
      <button>Search</button>
     </div>
   </div>
  );
}
export default Home;
