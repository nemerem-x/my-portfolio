import '../src/index.css'
import Sidebar from './Sidebar'
import Sectioncard from './Sectioncard'
import watchlist from '../src/assets/watchlist_png.png'

export default function Info() {

  return (
    <div className='info'>
        <div className="hero">

        </div>
        <div className="infosection">
            <h1>Hi, I’m Nemerem</h1>
            <p>Frontend Developer | UI/UX/Graphic Designer</p>
            <div className="sideandmain">
                <Sidebar/>
                <div className="projectcards">

                  <Sectioncard>
                    React
                  </Sectioncard>

                  <Sectioncard src={watchlist}>
                    Vanilla Javascript
                  </Sectioncard>

                  <Sectioncard>
                    Creative Design
                  </Sectioncard>

                </div>
            </div>
        </div>
    </div>
  )
}
