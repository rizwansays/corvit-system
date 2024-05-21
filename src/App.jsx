import { useState } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Services from './pages/Services'
import ClassSchedule from './pages/ClassSchedule'
import CorporateTrainings from './pages/CorporateTrainings'
import Fee from './pages/Fee'
import Gallery from './pages/Gallery'

import './App.css'
import Introduction from './pages/Introduction'
import OurAdvantage from './pages/Our-Advantage'
import WebDevelopment from './pages/WebDevelopment'
import SEODigitalMarketing from './pages/SEO&DigitalMarketing'
import Islamabad from './pages/Islamabad'
import BahawalpurSchedule from './pages/BahawalpurSchedule'
import LahoreSchedule from './pages/LahoreSchedule'
import Rawalpindi from './pages/Rawalpindi'
import PMProgram from './pages/PMProgram'
import Akhuwat from './pages/Akhuwat'
import Events from './pages/Events'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element ={<Navigate to='home' />} />
      <Route path='corvit-system' element={<Home/>} />
      <Route path='home' element={<Home />} />
      <Route path='about-us' element={<About />} />
      {/* <Route path='courses' element={<Courses />} /> */}
      <Route path='services' element={<Services />} />
      {/* <Route path='class-schedule' element={<ClassSchedule />} /> */}
      {/* <Route path='corporate-trainings' element={<CorporateTrainings />}/> */}
      <Route path='fee' element={<Fee />}/>
      <Route path='gallery' element={<Gallery />}/>
      <Route path='courses/web-development' element={<WebDevelopment />}/>
      <Route path='courses/seo-digital-marketing' element={<SEODigitalMarketing />}/>
      <Route path='class-schedule/islamabad-schedule' element={<Islamabad />}/>
      <Route path='class-schedule/bahawalpur-schedule' element={<BahawalpurSchedule />}/>
      <Route path='class-schedule/lahore-schedule' element={<LahoreSchedule />}/>
      <Route path='class-schedule/rawalpindi-schedule' element={<Rawalpindi />}/>
      <Route path='corporate-Trainings/akhuwat-trainings' element={<Akhuwat />}/>
      <Route path='gallery/events' element={<Events />}/>
      <Route path='corporate-Trainings/pm-kamyab-jawan-program' element={<PMProgram />}/>
      <Route path='about-us/introduction' element={<Introduction />}/>
      <Route path='about-us/our-advantage' element={<OurAdvantage />}/>
    </Routes>
    </>
  )
}

export default App
