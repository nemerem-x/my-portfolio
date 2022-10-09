import '../src/index.css'
import Sidebar from './Sidebar'
import Sectioncard from './Sectioncard'
import {projectJavascript, projectReact} from '../src/projects'

export default function Info() {

  return (
    <div className='info'>
        
        <div className="infosection">

            <div className="sideandmain">
                <Sidebar/>
                <div className="projectcards">

                  <Sectioncard name={"React"} instruction={"Click on a react project to see the magic."}>
                    {projectReact}
                  </Sectioncard>

                  <Sectioncard name={"Vanilla Javascript"} instruction={"Click on a vanilla JS project to see the magic."}>
                    {projectJavascript}
                  </Sectioncard>

                </div>
            </div>
        </div>
    </div>
  )
}
