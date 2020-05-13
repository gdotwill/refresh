import React, { Component,  useState } from 'react'
import Carousel from '../carousel/carousel'
import slide1 from '../assets/images/slide_1.jpg'
import slide2 from '../assets/images/slide_2.jpg'
import slide3 from '../assets/images/slide_3.jpg'
import slide4 from '../assets/images/slide_4.jpg'

import { useSpring, useSprings, animated, interpolate } from 'react-spring';

function Animate ({ img }) {
    const [open, setOpen] = useState(false)
    const { f, r } = useSpring({ f: open ? 0 : 1, r: open ? -3 : 3 })
    const cards = useSprings(5, [0, 1, 2, 3, 4].map(i => ({ opacity: 0.2 + i / 5, z: open ? (i / 5) * 80 : 0 })))
    return (
      <div class="center" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        {cards.map(({ z, opacity }, index) => (
          <animated.div
            style={{
              opacity,
              transform: interpolate(
                [z, f.interpolate([0, 0.2, 0.6, 1], [0, index, index, 0]), r],
                (z, f, r) => `translate3d(0,0,${z}px) rotateX(${f * r}deg)`
              )
            }}>
            {index === 4 && <animated.img style={{ transform: f.interpolate([0, 1], ['scale(0.7)', 'scale(1)']) }} src={img} />}
          </animated.div>
        ))}
      </div>
    )
  }

export class Main extends Component {
    render() {
        return (
            <div>
                 <div className="desktop center">
                    <Carousel>                        
                        <Animate img ={slide1} />                    
                        <Animate img ={slide2} />                        
                        <Animate img ={slide3} />                        
                        <Animate img ={slide4} />                        
                    </Carousel>
                </div> 
                <div className="mobile">                                         
                    <img src={slide1} />                    
                    <img src={slide2} />                    
                    <img src={slide3} />                    
                    <img src={slide4} />                                                              
                </div>               
            </div>           
        )
    }
}

export default Main

