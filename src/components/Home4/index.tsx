import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../../assets/icons/icons.js';

import l1 from './../../assets/image/Roadmap1.svg';
import l2 from './../../assets/image/Roadmap2.svg';
import l3 from './../../assets/image/Roadmap3.svg';
import l4 from './../../assets/image/Roadmap4.svg';

import './index.less';

export interface IHome4 {
  Opacity?:any
}

const Home4: React.FC<IHome4>=({Opacity})=> {
  const list = [
    ['2022.Q4  ', 'FNS official launch on findora',  'l1'],
    ['2023.Q1   ', '.fra support more on-chain assets and social data integration',  'l2'],
    ['2023.Q2  ', 'Enable findora zero-knowledge proof to hide the ownership',  'l3'],
    ['2023.Q3  ', 'FNS links Web2/Web3 and integrates on-chain and off-chain data. It enhances the interactive experience of gaming, social, DAO, community governance, etc. ', 'l4'],
  ];
  const cardListDom:any = useRef(null);
  const [initWidth, setInitWidth] = useState<number>();
  let timerLeft:any = null;
  let timerRight:any = null;

  useEffect(() => {
    const screenWidth = document.body.clientWidth;
    const startPositionLeft = (screenWidth - 1200) / 2;
    setInitWidth(startPositionLeft);
  }, []);

  function handleOnClickArrow(flag:any) {
    return (e:any) => {
      const screenWidth = document.body.clientWidth;
      const startPositionLeft = (screenWidth - 1200) / 2;

      if (flag === 'left') {
        clearInterval(timerRight);
        clearInterval(timerLeft);

        const newPosition = cardListDom.current.scrollLeft + 360 + startPositionLeft / 2;

        timerLeft = setInterval(function () {
          const oldPosition = cardListDom.current.scrollLeft;

          if (oldPosition + cardListDom.current.offsetWidth >= cardListDom.current.scrollWidth) {
            clearInterval(timerLeft);
          }

          let speed = (newPosition - oldPosition) / 10;
          speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

          if (oldPosition >= newPosition) {
            clearInterval(timerLeft);
          }

          cardListDom.current.scrollLeft = oldPosition + speed;
        }, 30);
      }

      if (flag === 'right') {
        clearInterval(timerLeft);
        clearInterval(timerRight);

        const newPosition = cardListDom.current.scrollLeft - 360 - startPositionLeft / 2;

        timerRight = setInterval(function () {
          const oldPosition = cardListDom.current.scrollLeft;

          if (oldPosition === 0) {
            clearInterval(timerRight);
          }

          let speed = (oldPosition - newPosition) / 10;
          speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

          if (oldPosition <= newPosition) {
            clearInterval(timerRight);
          }
          cardListDom.current.scrollLeft = oldPosition - speed;
        }, 30);
      }
    };
  }

  return (
 
      <div className="Home4 hometest" id="Home4"  >
        <div className="bottom_container">
          <h2>Roadmap</h2>
          {list.length > 3 && (
            <div className="arrow-btns">
             <ArrowLeftIcon  onClick={handleOnClickArrow('right')}/>  
             <ArrowRightIcon onClick={handleOnClickArrow('left')}/>
            </div>
          )}
        </div>
        <ul className="facts_box_list2" ref={cardListDom}>
          {list &&
            list.map((item, index) => {
              var logo1;

              switch (item[2]) {
                case 'l1':
                  logo1 = l1;
                  break;
                case 'l2':
                  logo1 = l2;
                  break;
                case 'l3':
                  logo1 = l3;
                  break;
                case 'l4':
                  logo1 = l4;
                  break;
          
              }
              return (
                <li key={index}>
              <div className="list_img">{item[2] && <img src={logo1} alt="" />}</div>
                  <div>
                  <p className="edition">{item[0]}</p>
                  <p className="facts_title">{item[1]}</p>
                  </div>
                </li>
              );
            })}

        </ul>

        </div>


  );
}
export default Home4;
