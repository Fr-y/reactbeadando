import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import Home from './components/Screens/Home.jsx'
import Navbar from './components/UI/Navbar.jsx'
import Footer from './components/UI/Footer.jsx'
import Work from './components/Screens/Work.jsx'
import Contact from './components/Screens/Contact.jsx'
import Blog from './components/Screens/Blog.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>  
        <Route path='/' element={<Home />} />
        <Route path='work' element={<Work/>} />
        <Route path='contact' element={<Contact />} />
        <Route path='blog' element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
