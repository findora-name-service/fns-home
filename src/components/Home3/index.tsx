import React from 'react';
import Logo from './../../assets/image/home3Logo.svg'
import './index.less';


export interface IHome3 {
  Opacity?:any
}

const Home3: React.FC<IHome3>=({Opacity})=> {
  return (

    <section className="Home3 hometest" id="Home3">
     <img src={Logo} alt="" />
      <div className='Home3_box'>
      <h2 >One Name, Many Identities</h2>
      <h3>Your .fra username lets you send and receive assets on any chain or dApp while protecting your actual on-chain address. Its a simple way to manage assets and protect your privacy.</h3>
      <button>launch App</button>
     </div>

    </section>

   
  );
};

Home3.defaultProps = {
  Opacity:undefined,
};

export default Home3;
