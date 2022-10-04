import '../src/index.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {

  const [toggle, setToggle] = useState(false)

  const expansionToggle = () => {
    setToggle(prevState => !prevState)
  }

  return (
    <div className={`sidebarmain ${toggle ? "open" : ""}`}>
      <div className='sidebar'>
          <div className="biocard">
              <div className="image"></div>
              <h3>Bio Card</h3>
              <p>Lorem Ipsum du teeete ye 
                  uiopi o owe Lorem Ipsum du 
                  teeete ye uiopi o owe Lorem 
                  Ipsum du teeete ye uiopi o owe
              </p>
          </div>
          <div className="skillset">
            <h3>Languages:</h3>
            <p>HTML5, Javascript</p>
            <h3>Frameworks:</h3>
            <p>React Js, Next Js(in-view)</p>
            <h3>Databases:</h3>
            <p>-</p>
            <h3>Tools:</h3>
            <p>Git/GitHub, Trello, Slack, Figma, XD, Photoshop, Illustrator, Cinema 4D, Google Web Designer, Marvelous Designer, Zbrush</p>
          </div>
          <div className="links">
            <h3>Links:</h3>
            <a href='#'>Git Repository <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} /></a>
            <a href='#'>Non-Fungible Tokens <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} /></a>
            <a href='#'>Behance <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} /></a>
          </div>
          <div className="experience">
            <h3>Work Experience:</h3>
            
          </div>
      </div>
          <a onClick={expansionToggle} id='expandsidebar'>{toggle ? "Collapse" : "Expand"}</a>
    </div>
  )
}
