import '../src/index.css'
import javascript from '/javascript.svg'
import react from '/react.svg'
import recoil from '/recoil.svg'
import react_query from '/react-query.svg'
import firebase from '/firebase.svg'
import tmdb from '/tmdb.png'
import openweathermap from '/openweathermap.png'
import moralis from '/moralis.png'
import next from '/nextjs.png'
import vite from '/vite.png'

export default function Project(props) {

  const logos = [
    {logo: react, name: "react"},
    {logo: next, name: "nextjs"},
    {logo: react_query, name: "react_query"},
    {logo: recoil, name: "recoil"}, 
    {logo: javascript, name: "javascript"}, 
    {logo: firebase, name: "firebase"}, 
    {logo: tmdb, name: "tmdb"}, 
    {logo: openweathermap, name: "openweathermap"}, 
    {logo: moralis, name: "moralis"},
    {logo: vite, name: "vite"},
  ]

  const arrayCheck = logos.filter(ele => props.stack.includes(ele.name))

  const stack = arrayCheck.map(ele => {
    return (
      <img key={ele.name} src={ele.logo} title={ele.name} alt='tech'/>
    )
  })

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
        <h2>{props.title}</h2>
        {/* <p style={{margin:"0"}}>{props.info}</p> */}
        {stack}
      </div>
      
    </div>
  )
}