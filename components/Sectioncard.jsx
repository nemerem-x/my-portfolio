import '../src/index.css'
import Project from './Project'
import { useState } from 'react'

export default function Sectioncard(props) {

  const [toggle, setToggle] = useState(false)

  const expansionToggle = () => {
    setToggle(prevState => !prevState)
  }

  return (
    <div className='section' style={{height:toggle ? "auto" : "580px"}}>
        <h3>{props.children}</h3>
        <p>Click on a {props.children} project to see the magic.</p>
        <Project img={props.src}/>
        <Project/>
        <Project/>
        {
          toggle && <Project/>
        }
        <center><a onClick={expansionToggle}>{toggle ? "Show less" : "Show more"}</a></center>
    </div>
  )
}
