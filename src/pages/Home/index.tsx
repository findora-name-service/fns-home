import React, { useEffect } from 'react';
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

  function headerBackgroundColorScroll(e:any) {
    let scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
      scrollTop = document.body.scrollTop;
    }
      if (scrollTop <= 0.3*window.innerHeight) {
        handleGotoAnchor('Home1')
    } else if(scrollTop <= 1.3*window.innerHeight){
      handleGotoAnchor('Home2')
      console.log(2)

    }
    else if(scrollTop <= 2.3*window.innerHeight){
      handleGotoAnchor('Home3')
      console.log(3)

    }
    else if(scrollTop <= 3.3*window.innerHeight){
      handleGotoAnchor('Home4')
    }
    else if(scrollTop <= 4.3*window.innerHeight){
      handleGotoAnchor('Home5')
    }


  }
  function handleGotoAnchor(anchorName: string) {
    console.log(window.innerWidth)
    
    if (anchorName) {
      if(window.innerWidth >=760){
        window.location.hash=`${anchorName}`
      }
    }

    
  
  }
  useEffect(() => {

    window.addEventListener('scroll', headerBackgroundColorScroll);
    return () => {
      window.removeEventListener('scroll', headerBackgroundColorScroll);
    };
  }, []);
  

  return (
    <>
    {/* <div className='pc_home' style={{height:'200vh'}}>
      <Carousel dotPosition={dotPosition} draggable={true} ref={carRef} swipe={true} {...settings} >
        <div >
        <Home1 />
        </div>
        <div>
        <Home2/>
        </div>
        <div>
        <Home3/>
        </div>
        <div>
        <Home4/>
        </div>
        <div >
        <Home5/>
        </div>
      </Carousel>
   <ScrollTip isTabnum={currentSlide}/>

    </div> */}

        <Home1 />
        <Home2 />
        <Home3 />
        <Home4 />
        <Home5 />
      </>
  );
 
}
export default Home;


