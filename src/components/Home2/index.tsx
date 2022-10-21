import React from 'react';
import Logo from './../../assets/image/home2Logo.svg'

import './index.less';

export interface IHome2 {

  style?: React.CSSProperties;
}

const Home2: React.FC<IHome2> = ({style }) => {
  return (
  
    <section className="Home2">
     <div className='Home2_box'>
      <h2 >Recommend <br /> to join .fra to get rewards</h2>
      <h3>FNS registration with .fra can get the registration fee waiver, and the referrer can also get a commission</h3>
      <button>learn more</button>
     </div>
     <img src={Logo} alt="" />
    </section>
   
  );
};

Home2.defaultProps = {
  style:undefined,
};

export default Home2;
