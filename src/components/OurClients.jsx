import React, {Component} from 'react'
import {  Container, Row } from 'reactstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import logo1 from '../assets/logo/1.png'
import logo2 from '../assets/logo/2.png'
import logo3 from '../assets/logo/3.png'
import logo4 from '../assets/logo/4.png'
import logo5 from '../assets/logo/5.png'
import logo6 from '../assets/logo/6.jpg'
import logo7 from '../assets/logo/7.jpg'
import logo8 from '../assets/logo/8.jpg'
import logo9 from '../assets/logo/9.jpg'
import logo10 from '../assets/logo/10.png'
import logo11 from '../assets/logo/11.png'
// import logo12 from '../assets/logo/12.png'
import logo13 from '../assets/logo/13.png'
import logo14 from '../assets/logo/14.webp'
import logo15 from '../assets/logo/15.png'
import logo16 from '../assets/logo/16.png'
import logo17 from '../assets/logo/17.png'
import logo18 from '../assets/logo/18.png'
import logo19 from '../assets/logo/19.png'
import logo20 from '../assets/logo/20.png'
import logo21 from '../assets/logo/21.png'
import logo22 from '../assets/logo/22.png'
import logo23 from '../assets/logo/23.png'
import logo24 from '../assets/logo/24.jpg'
import logo25 from '../assets/logo/25.jpg'
import logo26 from '../assets/logo/26.jpg'
import logo27 from '../assets/logo/27.png'
import logo28 from '../assets/logo/28.png'
import logo29 from '../assets/logo/29.png'
import logo30 from '../assets/logo/30.png'
import logo31 from '../assets/logo/31.png'
import logo32 from '../assets/logo/32.png'
import logo33 from '../assets/logo/33.jpg'


const logo = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  // logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  // logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
  logo18,
  logo19,
  logo20,
  logo21,
  logo22,
  logo23,
  logo24,
  logo25,
  logo26,
  logo27,
  logo28,
  logo29,
  logo30,
  logo31,
  logo32,
  logo33,
]
class OurClients extends Component{
  
// }
// export default function OurClients() {
  render(){
    const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };

  return (
    <section className='hidden md:block mt-16 w-full overflow-hidden'>
      <Container className='w-[90%] mx-auto'>
        <Row>
         <div>
          <h1 className='text-3xl text-center pb-8 font-semibold text-red-600'>Our Clients</h1>
          <Slider {...settings}>
          {logo.map((s, index) => (          
                      <div className='container flex logo-slide' key={index}>
                        <img className='w-[350px] md:w-[150px]'  src={s} alt="" /> 
                      </div>   
                  ))}
          </Slider>
         </div>
        </Row>
      </Container>
    </section>
  );
} 
}

export default OurClients;