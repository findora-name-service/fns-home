import logo1 from './../../assets/image/logo1.svg'
import logo2 from './../../assets/image/logo2.svg'

import classnames from 'classnames';

import './index.less';
import { useEffect, useState } from 'react';
export interface IHeader{
  // isOpacity?:boolean;
}

const Header: React.FC<IHeader>=()=> {
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
    window.addEventListener('scroll', headerBackgroundColorScroll);
    return () => {
      window.removeEventListener('scroll', headerBackgroundColorScroll);
    };
  }, []);
  return (
   <div className={classnames('header_box', { no_opacity: isOpacity })}>
    <div className='header_info'>
     <img src={isOpacity ? logo2 : logo1} alt="" />
     <div className='button_box'>
      <button className='docbutton'>DOC</button>
      <button className='appbutton' onClick={()=>{
        window.open('https://app.fns.gg/','_self')
      }}>APP</button>
     </div>
     </div>
   </div>
  );
}
export default Header;
