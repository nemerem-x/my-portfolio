import '../src/index.css'
import myLogo from '/vite.svg'
import { Link } from 'react-router-dom'

export default function Navbar() {

  return (
    <div className='nav'>
      <Link to="/"><img src={myLogo} alt="" /></Link>
      <Link id='contactbtn' to="/contact">Contact</Link>
    </div>
  )
}
