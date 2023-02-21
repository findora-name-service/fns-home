import logo1 from './../../assets/image/logo1.svg'
import logo2 from './../../assets/image/logo2.svg'

import classnames from 'classnames';

import './index.less';
import { useEffect, useState } from 'react';
export interface IHeader{
  pc_isOpacity?:boolean;
}

const Header: React.FC<IHeader>=({pc_isOpacity})=> {
  const [isOpacity, setIsOpacity] = useState(false);
  function headerBackgroundColorScroll(e:any) {
    let scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
      scrollTop = document.body.scrollTop;
    }

    if (scrollTop <= window.innerHeight) {
 setIsOpacity(false);
    } else {
      setIsOpacity(true);
    }
    // console.log(scrollTop);

    let top =  window.innerHeight;
    if (scrollTop >  window.innerHeight) {
      top = 0;
    } else {
      top =  window.innerHeight - scrollTop;
    }
    // setScrollTop(top);
    // setIsOpacity(true);
  }

  useEffect(() => {
    window.innerWidth<=760&& window.addEventListener('scroll', headerBackgroundColorScroll);
   
    return () => {
      window.innerWidth<=760&& window.removeEventListener('scroll', headerBackgroundColorScroll);
    };
  }, []);
  return (
   <div className={classnames('header_box', { no_opacity:  window.innerWidth>760?pc_isOpacity:isOpacity })}>
    <div className='header_info'>
     <img src={( window.innerWidth>760?pc_isOpacity:isOpacity) ? logo2 : logo1} alt="" />
     <div className='button_box'>
     <button className='prebutton' onClick={()=>{
        window.open('https://app.fns.gg/airdrop ','_self')
      }}>Pre-Registration</button>
      <button className='docbutton' onClick={()=>{
        window.open('https://docs.fns.gg/untitled/introduction/what-is-fns','_self')
      }}>DOCS</button>
      <button className='appbutton' onClick={()=>{
        window.open('https://app.fns.gg/','_self')
      }}>APP</button>
     </div>
     </div>
   </div>
  );
}
export default Header;
