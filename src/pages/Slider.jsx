import React from 'react'
import img1 from "../assets/img/1.1.jpg";
import img2 from "../assets/img/2.2.jpg";
import img3 from "../assets/img/3.3.jpg";
import HeroSlider, {Slide} from 'hero-slider'
export default function Slider() {
  return (
    <HeroSlider 
    slidingAnimation= 'left_to_right'
    orientation="horizontal"
    initialSlide={1}
    onBeforeChange={(previousSlide, nextSlide) => console.log('onBeforeChange', previousSlide, nextSlide)}
    onChange={nextSlide => console.log('onChange', nextSlide)}
    onAfterChange={nextSlide => console.log('onAfterChange', nextSlide)}
    

    settings={{
      slidingDuration: 250,
      slidingDelay: 100,
      shouldAutoplay: true,
      shouldDisplayButtons: true,
      autoplayDuration: 5000,
      height: '100vh'
    }}
    >
      <Slide><img src={img1} alt="" /></Slide>
      <Slide><img src={img2} alt="" /></Slide>
      <Slide><img src={img3} alt="" /></Slide>

      {/* <Slide background={{backgroundImage: BgCyber, }} /> */}

    </HeroSlider>
  
  )
}
