import '../src/index.css'
import watchlist from '../src/assets/watchlist_png.png'

export default function Project(props) {

    const hover = (e) => {
        console.log(e.target)
    }

  return (
    <div className="project">
        <img src={props.img} alt="" />
    </div>
  )
}