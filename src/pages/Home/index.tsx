import { Carousel } from 'antd';
import type { DotPosition } from 'antd/es/carousel';
import React, { useState } from 'react';

import Home5 from './../../components/Home5';
import Home2 from './../../components/Home2';
import Home1 from './../../components/Home1';

import Home3 from './../../components/Home3';
import Home4 from './../../components/Home4';
import './index.less';


import ScrollTip from './../../components/scrollTip';
// slick-track
function Home() {
  const [dotPosition] = useState<DotPosition>('right');
  const [currentSlide, setcurrentSlide] = useState(0)
  const settings = {
    dots: false,
    infinite: false,
    // slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    // beforeChange: function(currentSlide: any, nextSlide: any) {
    //   console.log("before change", currentSlide);
    // },
    afterChange: function(currentSlide: any) {
      setcurrentSlide( currentSlide+1);
    }
  };
  return (
    <div >
      <Carousel dotPosition={dotPosition} draggable={true}  {...settings}>
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

    </div>
  );
 
}
export default Home;
