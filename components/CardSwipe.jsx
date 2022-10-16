import { useState } from 'react'
import '../src/cardswipe.css'

function CardSwipe({name, handleClick, index}) {
    
    const [isHeld, setIsHeld] = useState(false)
    const [mouseY, setMouseY] = useState()
    const [mouseX, setMouseX] = useState()
    const [swipeAnimate, setSwipeAnimate] = useState(false)


    const hold = (e) => {
        if(e.currentTarget.innerText == name.name){
            setIsHeld(true)
        }
    }

    const up = (e) => {
        setIsHeld(false)
    
        if(mouseX <= 215 || mouseX >= 550 || mouseY <= 130 || mouseY >= 350){
            handleClick(e)
            setSwipeAnimate(true)
        } 
        
        setMouseY(false)
        setMouseX(false)

        setTimeout(()=>{
            setSwipeAnimate(false)
          },1000)
    }

    const move = e => {
        if(isHeld && e.currentTarget.innerText == name.name){
            setMouseY(e.pageY)
            setMouseX(e.pageX)
        }
    }

    const style = {
        backgroundColor: `${name.color}`,
        left: mouseX ? `${mouseX}px` : '50%',
        top: mouseY ? `${mouseY}px`: '50%',
        cursor:'grab',
        zIndex: swipeAnimate ? '1' : null,
        transform: swipeAnimate ? `translate(-50%, -90%) scale(0.8)` : null
    }

    return (
        <div 
            onMouseMove={move}
            onTouchMove={move}
            onMouseDown={hold}
            onTouchStart={hold}
            onMouseUp={up}
            onTouchEnd={up}
            className={"card" + ' ' + `card${index}` + ' ' + `${swipeAnimate ? "swiped" : ''}` }
            style={style}
        >
            <div>{name.name}</div>
        </div>
    )

}

export default CardSwipe