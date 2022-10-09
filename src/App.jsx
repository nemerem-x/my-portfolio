import { useState } from 'react'
import Navbar from '../components/Navbar'
import Info from '../components/Info'
import Hero from '../components/Hero'

function App() {

  return (
    <main>
      <Navbar />
      <Hero/>
      <Info/>
    </main>
  )
}

export default App
