import React from 'react'
import TopNavbar from './TopNavbar'
import Navbar from './Navbar'
import Router from '../router/Router'

export default function Layout() {
  return (
   <>
   <TopNavbar />
   <Navbar />
   <div>
    <Router />
   </div>
   <Footer />
   </>
  )
}
