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
      <h2>FAQ</h2>
      <Space direction="vertical" >
          <Collapse
          accordion
            collapsible="header"
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => (isActive ? <img src={Img2} alt="" /> : <img src={Img1} alt="" />)}
          >
            <Panel header="What is Findora Name Service (FNS)?" key="1">
              <p>{'Findora Name Service is a distributed, open and extensible naming system based on the Findora blockchain focused on privacy preservation.'}</p>
            </Panel>
            <Panel header="Can FNS domains be transferred ?" key="2">
              <p>{'Yes, FNS is essentially an FRC-721 non-fungible token that can be bought, sold, or transferred.'}</p>
            </Panel>
            <Panel header="How does FNS protect my identity? " key="3">
              <p>{`Using zero-knowledge proofs, assets can be held through an FNS on Findora’s utxo layer, decoupling them from your on-chain address in an EVM enviroment.`}</p>
            </Panel>
            <Panel header="How many FNS usernames can I have?" key="4">
              <p>{'There is theoretically no to the number of FNS identities you can have.'}</p>
            </Panel>
            <Panel header="Can my FNS expire?" key="5">
              <p>{ `Your FNS ownership lasts for one year, after which it will expire unless renewed. There is a 30-day grace period after a year of ownership where you can still renew the FNS if you forgot to do so before. After that period, however, the FNS will return to the public registry where other users can take ownership of it.  `}</p>
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
