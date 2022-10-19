import { useState } from 'react'
import '../src/cardswipe.css'

function CardSwipe({name, handleClick, index}) {
    
    const [isHeld, setIsHeld] = useState(false)
    const [mouseY, setMouseY] = useState()
    const [mouseX, setMouseX] = useState()
    const [swipeAnimate, setSwipeAnimate] = useState(false)
    const [zIndex, setZIndex] = useState(false)

    const hold = (e) => {
        if(e.currentTarget.innerText == name.name){
            setIsHeld(true)
        }
    }

    const up = (e) => {
        // e.preventDefault()
        // setIsHeld(false)
    
        // if(mouseX <= 215 || mouseX >= 550 || mouseY <= 130 || mouseY >= 350){
        //     handleClick(e)
        //     setSwipeAnimate(true)
        // } 

        // if(mouseX <= 100 ){
        // } 
        handleClick(e)

        setSwipeAnimate(true)
        setZIndex(true)
        
        setTimeout(()=>{
            setSwipeAnimate(false)
        },1200)

          setTimeout(()=>{
            setZIndex(false)
        },100)
        // setMouseY(false)
        // setMouseX(false)

    }

    const move = e => {
        if(isHeld && e.currentTarget.innerText == name.name){
            // setMouseY(e.pageY)
            setMouseX(e.touches[0].clientX)
        }
    }

    const style = {
        backgroundColor: `${name.color}`,
        left: mouseX ? `${mouseX}px` : '50%',
        // top: mouseY ? `${mouseY}px`: '50%',
        zIndex: zIndex ? '5' : '',
        // transform: swipeAnimate ? `translate(-50%, -90%) scale(0.8)` : ''
    }

    return (
        <div 
        // onMouseMove={move}
        // onTouchMove={move}
        // onMouseDown={hold}
        // onTouchStart={hold}
        // onMouseUp={up}
        // onTouchEnd={up}
            className={"card" + ' ' + `card${index}` + ' ' + `${swipeAnimate ? "swiped" : ''}` }
            onClick={up}
            style={style}
        >
            <h2>{name.name}</h2>
        </div>
    )

}

export default CardSwipe