import '../src/index.css'
import { useState } from 'react'

export default function Project(props) {


  const visit = () => {
    window.location.href = `${props.link}`
  }

  const style = {
    backgroundImage:`linear-gradient(to left, transparent, black 85%), url(${props.img})`,
    backgroundSize: "cover",
    backgroundPosition: "right top",
  }

  return (
    <div className="project" 
      onClick={visit} 
      style={style} 
    >        
      <div className="projectname">
        <h2 style={{margin:"0", fontSize:"1.5rem"}}>{props.title}</h2>
        <p style={{margin:"0"}}>{props.info}</p>
      </div>
      
    </div>
  )
}