import React from 'react'
import Network from '../assets/img/network.jpg'
import BgCyber from '../assets/img/bg3.jpg'
import Cyber from '../assets/img/cyber.jpg'
import Digital from '../assets/img/digital.jpg'
import Frontend from '../assets/img/front.jpeg'
import Android from '../assets/img/mobile.webp'
// import HeroSlider, {Slide} from 'hero-slider'
import HeroSlider from 'hero-slider'
export default function Slider() {
  return (
    <>
    <HeroSlider 
    slidingAnimation= 'left_to_right'
    orientation="horizontal"
    initialSlide={1}
    onBeforeChange={(previousSlide, nextSlide) => console.log('onBeforeChange', previousSlide, nextSlide)}
    onChange={nextSlide => console.log('onChange', nextSlide)}
    onAfterChange={nextSlide => console.log('onAfterChange', nextSlide)}
    style={{
      backgroundColor: "rgba(0,0,0,0.33)"
    }}

    settings={{
      slidingDuration: 250,
      slidingDelay: 100,
      shouldAutoplay: true,
      shouldDisplayButtons: true,
      autoplayDuration: 5000,
      height: '100vh'
    }}
    >
      <Slide background={{backgroundImage: Network, backgroundAttachment: 'fixed'}} />

      <Slide background={{backgroundImage: BgCyber, backgroundAttachment: 'fixed'}} />

    </HeroSlider>
    {/* <img src={Network} alt="" /> */}
    </>
  )
}
