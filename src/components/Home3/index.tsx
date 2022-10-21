import React from 'react';
import Logo from './../../assets/image/home3Logo.svg'
import './index.less';

export interface IHome3 {

  style?: React.CSSProperties;
}

const Home3: React.FC<IHome3> = ({style }) => {
  return (
  
    <section className="Home3">
     <img src={Logo} alt="" />
      <div className='Home3_box'>
      <h2 >All in one</h2>
      <h3>Unified identity means absolute flexibility to use one, many or all usernames on any application or blockchain, manage and receive assets on multiple chains</h3>
      <button>launch App</button>
     </div>
    </section>
   
  );
};

Home3.defaultProps = {
  style:undefined,
};

export default Home3;
