import React, { useEffect, useState } from 'react';
// import { Carousel } from 'antd';
// import type { DotPosition } from 'antd/es/carousel';
// import { createRef } from 'react'
// import type { CarouselRef } from 'antd/lib/carousel'
import Home5 from './../../components/Home5';
import Home2 from './../../components/Home2';
import Home1 from './../../components/Home1';

import Home3 from './../../components/Home3';
import Home4 from './../../components/Home4';
import './index.less';
import { setInterval } from 'timers';


// import ScrollTip from './../../components/scrollTip';
// slick-track
function Home() {
  // const carRef = createRef<CarouselRef>()

  // const [dotPosition] = useState<DotPosition>('right');
  // const [currentSlide, setcurrentSlide] = useState(0)
  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   // slidesToShow: 1,
  //   // slidesToScroll: 1,
  //   vertical: true,
  //   verticalSwiping: true,
  //   // beforeChange: function(currentSlide: any, nextSlide: any) {
  //   //   console.log("before change", currentSlide);
  //   // },

  //   afterChange: function(currentSlide: any) {
  //     setcurrentSlide( currentSlide+1);
  //   }
  // };
  const [Opacity, setOpacity] = useState('')
  let [opacitynum, setopacitynum] = useState(1)

  function headerBackgroundColorScroll(e:any) {
    let scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
      scrollTop = document.body.scrollTop;
    }
      if (scrollTop <= 0.5*window.innerHeight) {
        
        handleGotoAnchor('Home1')
        setOpacity('Home1')

    } else if(scrollTop <= 1.5*window.innerHeight){
      
      handleGotoAnchor('Home2')
      setOpacity('Home2')

    }
    else if(scrollTop <= 2.5*window.innerHeight){
     handleGotoAnchor('Home3')
      setOpacity('Home3')


    }
    else if(scrollTop <= 3.5*window.innerHeight){
      handleGotoAnchor('Home4')
      setOpacity('Home4')

    }
    else if(scrollTop <= 4.5*window.innerHeight){
      handleGotoAnchor('Home5')
      setOpacity('Home5')
    }
  }

  function handleGotoAnchor(anchorName: string) {

    setOpacity(anchorName)
    if (anchorName) {
      if(window.innerWidth >=760){ 
    window.location.hash=`${anchorName}`
      }
    }

  }
useEffect(() => {
  if(window.innerWidth >=760){ 
  
if(Opacity==='Home1'||''){
    document.documentElement.scrollTop=0
  }
  else if(Opacity==='Home2'){
    document.documentElement.scrollTop=window.innerHeight
  }else if(Opacity==='Home3'){
    document.documentElement.scrollTop=2*window.innerHeight
  }else if(Opacity==='Home4'){
    document.documentElement.scrollTop=3*window.innerHeight
  }else if(Opacity==='Home5'){
    document.documentElement.scrollTop=4*window.innerHeight
  }
}
})

  useEffect(() => {

    setTimeout(() => {
        setopacitynum(opacitynum+=1)
      }, 500);
 
      return () => {
        setopacitynum(0)   
       };
     
  }, [Opacity])

  useEffect(() => {
    window.location.hash=''
    setOpacity('Home1')
    window.addEventListener('scroll', headerBackgroundColorScroll);
    return () => {
      window.removeEventListener('scroll', headerBackgroundColorScroll);
    };
  }, []);
  
  return (
    <div className='home_box'>
      <div className='pc_home'>
        <Home1 Opacity={Opacity==='Home1'?opacitynum:0} />
        <Home2 Opacity={Opacity==='Home2'?opacitynum:0}/>
        <Home3 Opacity={Opacity==='Home3'?opacitynum:0}/>
        <Home4 Opacity={Opacity==='Home4'?opacitynum:0}/>
        <Home5 Opacity={Opacity==='Home5'?opacitynum:0}/>
      </div>
      <div className='mo_home'>
      <Home1 />
      <Home2/>
      <Home3 />
      <Home4 />
      <Home5 />
      </div>
  </div>
  );
 
}
export default Home;


