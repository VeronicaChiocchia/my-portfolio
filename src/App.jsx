import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage'
import TechStack from './components/TechStack/TechStack'
import Projects from './components/Projects/Projects'
// import Experience from './components/Experience/Experience'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Homepage/>
      <TechStack/>
      <Projects/>
      <ScrollToTopButton/>
      <Footer/>
    </>
  )
}

export default App
