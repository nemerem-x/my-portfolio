import '../src/index.css'
import { Link } from 'react-router-dom'

export default function Navbar() {

  return (
    <div className='nav'>
      <Link to="/">Nemerem</Link>
      <Link id='contactbtn' to="/contact">Contact</Link>
    </div>
  )
}
