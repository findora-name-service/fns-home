import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../../assets/icons/icons.js';

import l1 from './../../assets/image/Roadmap1.svg';
import l2 from './../../assets/image/Roadmap2.svg';
import l3 from './../../assets/image/Roadmap3.svg';
import l4 from './../../assets/image/Roadmap4.svg';

import './index.less';

export interface IHome6 {
  Opacity?:any
}

const Home6: React.FC<IHome6>=({Opacity})=> {
  const list = [
    ['Pre-registration 1', 'Follow and RT, submit an FNS of more than 5 characters without restriction',  'l1','02.20 0:00 - 02.26 23:59'],
    ['Pre-registration 2', 'interact with findora chain once before snapshot（02.19） or hold FRA can pre-register FNS domain names again',  'l2','02.24 0:00 - 02.26 23:59'],
    ['Pre-registration Claim ', 'Pre-registration Claim',  'l3','02.27 0:00 - 02.28 23:59'],
    ['Hello ETHDenver', 'A limited number of 10,000 FNS will be sold for free（only need gas）. without restriction.', 'l4','03.01 0:00 - 03.05 0:00'],
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
 
      <div className="Home6 hometest" id="Home6"  >
        <div className="bottom_container">
          <h2>Campaign</h2>
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
                  <p className="campaigntime">{item[3]}</p>
                  <p className="facts_title">{item[1]}</p>
                  </div>
                </li>
              );
            })}

        </ul>

        </div>


  );
}
export default Home6;
