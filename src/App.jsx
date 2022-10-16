import Home from '../pages/Home'
import Contact from '../pages/Contact'
import CardPage from '../pages/CardPage'
import Navbar from '../components/Navbar'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar/>

      <Routes>

        <Route exact path="/" element={<Home/>} />

        <Route path='/contact' element={<Contact/>} />

        <Route path='/swipecard' element={<CardPage/>} />

      </Routes>
    </>
  )
}

export default App
