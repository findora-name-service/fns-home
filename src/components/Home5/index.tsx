import React from 'react';
import { Collapse, Space } from 'antd';
import Img1 from './../../assets/image/jia.svg';
import Img2 from '../../assets/image/jian.svg';
import Footer from './../../components/Footer';
import './index.less';


export interface IHome5 {
  Opacity?:any
}

const Home5: React.FC<IHome5>=({Opacity})=> {
  const { Panel } = Collapse;

  return (
<div style={{    overflowY:'scroll',height:'100vh'}}>
    <section className="Home5 hometest" id="Home5">
      <h2>A&Q</h2>
      <Space direction="vertical" >
          <Collapse
          accordion
            collapsible="header"
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => (isActive ? <img src={Img2} alt="" /> : <img src={Img1} alt="" />)}
          >
            <Panel header="What is findora name service ?" key="1">
              <p>{'Findora Name Service is a distributed, open and extensible naming system based on the findora blockchain.'}</p>
            </Panel>
            <Panel header="FNS can be transferred ?" key="2">
              <p>{'Yes, FNS is essentially a FRC-721 non-fungible token that can be bought, sold or transferred.'}</p>
            </Panel>
            <Panel header="How FNS implements the hidden function ?" key="3">
              <p>{`Using findora's zero-knowledge proof, transfer FNS from E VM to UTXO to realize the decoupling of ownership and FNS.`}</p>
            </Panel>
            <Panel header="Have a maximum of several FNS ?" key="4">
              <p>{'There is theoretically no upper limit to the FNS you can have.'}</p>
            </Panel>
            <Panel header="What to do when FNS expires ?" key="5">
              <p>{ `When the FNS expires, it is called "grace period" within 30 days, and the system will retain the ownership of the user's FNS. After more than 30 days, the FNS will return to the public registry and can be registered by other users.`}</p>
            </Panel>
          </Collapse>
        
        </Space>
        <Footer/>
    </section>
    </div>
   
  );
};

Home5.defaultProps = {
  Opacity:undefined,
};

export default Home5;
