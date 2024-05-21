import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import TopNavbar from './components/TopNavbar.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ContactMain from './pages/ContectMain.jsx'
// import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <TopNavbar />
    <Navbar />
    <div>
      <App />
    </div>
    <ContactMain />
    <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
