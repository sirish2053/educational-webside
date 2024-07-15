import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import CourseDetails from './pages/Courses/CourseDetails.jsx'

function App()  {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course/:id' element={<CourseDetails/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App