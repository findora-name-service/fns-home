import React, {  useState } from 'react';
import search from './../../assets/image/search.svg'
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './index.less';


// Opacity
export interface IHome1 {
  Opacity?:any
}

const Home1: React.FC<IHome1>=({Opacity})=> {
  const [searchvalue, setsearchvalue] = useState('')
  const searchInfo = (e:any)=>{
    setsearchvalue(e.target.value)
  } 
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
}, []);
  return (
<>
  <div className='home1_box hometest' id="Home1">
     
     <h2>Have your first privacy web3 identity</h2>
     <div className='search_box'>
 
      <div className='input_box'>
        <img src={search} alt="" />
        <input type="text" placeholder='Search Names' onChange={searchInfo} onBlur={()=>{searchvalue!==''&&window.open(`https://app.fns.gg/search/${searchvalue}` ,'_self')}}/>
        <p>.fra</p>
      </div>
      <button 
      onClick={()=>{searchvalue!==''&&window.open(`https://app.fns.gg/search/${searchvalue}` ,'_self')}}
      >Search</button>
      
     </div>
   </div>

   < Particles  id = "tsparticles"  init = { particlesInit }  loaded = { particlesLoaded }             options={{
                fpsLimit: 120,
                particles: {
                  number: {
                    value: 80,
                    max: 600,
                    density: {
                      enable: true,
                      value_area: 800,
                    },
                  },
                  color: {
                    value: '#dedede',
                    animation: {
                      enable: true,
                      speed: 20,
                      sync: true,
                    },
                  },
                  opacity: {
                    value: 0.7,
                  },
                  size: {
                    value: {
                      min: 0.1,
                      max: 4,
                    },
                  },
                  links: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.3,
                    width: 1,
                  },
                  move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    outModes: {
                      default: 'out',
                    },
                  },
                },
                interactivity: {
                  events: {
                    onHover: {
                      enable: true,
                      mode: 'grab',
                    },
                    onClick: {
                      enable: true,
                      mode: 'push',
                    },
                    resize: true,
                  },
                  modes: {
                    grab: {
                      distance: 200,
                    },
                    push: {
                      quantity: 4,
                    },
                  },
                },
                detectRetina: true,
        
            
           
              }}
/ > 

</>
  
  );
}
export default Home1;
