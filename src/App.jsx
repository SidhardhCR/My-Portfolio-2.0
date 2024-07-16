
import './App.css'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {
  

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Experience></Experience>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
