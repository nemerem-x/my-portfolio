import '../src/index.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

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
              <h3>Bio</h3>
              <p> 
                  Frontend developer passionate about 
                  beautiful designs, functional web 
                  applications and accessibility.                  
              </p>
              <p>
                  I'm knowledgeable in Creative 3D/Graphic
                  Designs,NFTs, Marketing, Augmented Reality,
                  UI/UX. 
              </p>
          </div>
          <div className="skillset">
            <h3>Technologies/tools:</h3>
            <p>HTML5/CSS3, Javascript, React, Git, GitHub, RESTful API. <br></br> Next.js(in-view).</p>
            
            <h3>Databases:</h3>
            <p>-</p>

            <h3>Creative Tools:</h3>
            <p>Trello, Slack, Figma, XD, Photoshop, Illustrator, After Effects, Cinema 4D, Google Web Designer, Marvelous Designer, Zbrush.</p>
          </div>
          <div className="links">
            <h3>Links:</h3>
            <a href='https://github.com/nemerem-x' target="_blank" >Git Repository <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} /></a>
            <a href='https://opensea.io/0x_nemerem' target="_blank" >Non-Fungible Tokens <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} /></a>
            <a href='https://www.behance.net/pilotpreci57ca' target="_blank" >Behance <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} /></a>
            <Link to="/swipecard">Swipe Cards</Link>

          </div>
          <div className="experience">
            <h3>Education:</h3>
            <p>
              Covenant University <br />
              Bachelor of Science (B.Sc.),<br />
              Industrial Physics-Electronics & Information Technology Application <br />
              2012 - Jun 2016
            </p>
          </div>
      </div>
          <a onClick={expansionToggle} id='expandsidebar'>{toggle ? "Collapse" : "Expand"}</a>
    </div>
  )
}
