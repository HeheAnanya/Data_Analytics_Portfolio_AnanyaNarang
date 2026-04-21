import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Intro  from './components/Intro'
import Project from './components/Project'

const App = () => {
  return (
    <>
    <Navbar/>
    <div className='hero'>
    <Intro/>
    <Project/>
    </div>
      </>
  )
}

export default App
