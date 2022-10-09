import '../src/index.css'
import Project from './Project'
import { useState } from 'react'

export default function Sectioncard({name, instruction, children}) {

  const [toggle, setToggle] = useState(false)

  const expansionToggle = () => {
    setToggle(prevState => !prevState)
  }

  const projects = children.map(ele => {
    return (
      <Project 
        key={ele.id} 
        img={ele.src} 
        title={ele.title} 
        info={ele.info}
        link={ele.link}
      />
      )
  })
    
  return (
    <div className='section' style={{height:toggle ? "auto" : "580px"}}>

        <h3>{name}</h3>
        <p>{instruction}</p>

        {projects}

        {children.length >= 4 && 
          <div className="showmorebtn">
            <a onClick={expansionToggle}>{toggle ? "Show less" : "Show more"}</a>
          </div>
        }
    </div>
  )
}
