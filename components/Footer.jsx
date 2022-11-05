import '../src/index.css'
import gitlogo from '/githublogo.png'

export default function Footer() {

  return (
        <div className="footer">
            <a href="https://github.com/nemerem-x" 
            target="_blank" 
            >
                <img src={gitlogo} alt="github" />
            </a>
        </div>
  )
}
