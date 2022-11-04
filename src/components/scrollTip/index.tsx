import classnames from 'classnames';
import { useEffect, useState } from 'react';

import './index.less';

export interface IscrollTip {
}

const scrollTip: React.FC<IscrollTip> = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isTabnum, setisTabnum] = useState(1);
  // console.log(isTabnum)

  function headerBackgroundColorScroll(e:any) {
    let scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
      scrollTop = document.body.scrollTop;
    }

    if (scrollTop <= 0.5*window.innerHeight) {
      setisTabnum(1);
    } else if(scrollTop <= 1.5*window.innerHeight){
      setisTabnum(2);
    }
    else if(scrollTop <= 2.5*window.innerHeight){
      setisTabnum(3);
    }
    else if(scrollTop <= 3.5*window.innerHeight){
      setisTabnum(4);
    }
    else if(scrollTop <= 4.5*window.innerHeight){
      setisTabnum(5);
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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.addEventListener('scroll', headerBackgroundColorScroll);
    return () => {
      window.removeEventListener('scroll', headerBackgroundColorScroll);
    };
  }, []);
  
  return (
    <section className="scrollTip_box">
      <p className={classnames(`pagenum${isTabnum}`)}>0{isTabnum||1}</p>
      <ul className={classnames(`isTabnum${isTabnum}`)}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li> 
      </ul>
      <p className={classnames(`allpagenum${isTabnum}`)}>05</p>
    </section>
   
  );
};

// scrollTip.defaultProps = {
//   isTabnum:1,
// };

export default scrollTip;
